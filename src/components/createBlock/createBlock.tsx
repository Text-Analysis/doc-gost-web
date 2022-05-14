import React, { ChangeEvent, useEffect, useState } from 'react';
import { LayoutTypeOne } from '../layouts';
import styles from './createBlock.module.scss';
import { Input, Button, Alert, SelectEntity } from '../ui';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { LayoutTree } from '../tree/tree';
import DocumentService from '../../services/documentService';
import { documentSelector, templateSelector } from '../../store/selectors';
import { PreloaderWithLayout } from '../preloader/preloaderWithLayout';
import {
    fetchTemplate,
    fetchTemplates,
    setZeroTemplate,
} from '../../store/actionCreators/template';
import {
    setStructureDocument,
    setZeroDocument,
} from '../../store/actionCreators/document';

export const CreateBlock: React.FC = () => {
    const dispatch = useDispatch();
    const { template, templates, loading } = useTypeSelector(templateSelector);
    const { document } = useTypeSelector(documentSelector);
    const [nameFile, setNameFile] = useState<string>();
    const [isErrorName, setErrorName] = useState<boolean>(false);
    const [isAlert, setAlert] = useState<boolean>(false);
    const [isErrorSave, setErrorSave] = useState<boolean>(false);
    const [isNoneFirst, setNoneFirst] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchTemplates());
        setNoneFirst(true);
        return () => {
            dispatch(setZeroTemplate());
            dispatch(setZeroDocument());
        };
    }, []);

    useEffect(() => {
        if (template.structure && isNoneFirst) {
            dispatch(setStructureDocument(template.structure));
        }
    }, [template.structure]);

    const changeNameFile = (e: ChangeEvent<HTMLInputElement>) => {
        setNameFile(e.target.value);
        setErrorName(false);
    };

    const changeTemplate = (e: ChangeEvent<HTMLSelectElement>) => {
        const tempId = e.target.value;
        dispatch(fetchTemplate(tempId));
    };

    const saveDocument = () => {
        if (!nameFile) {
            setErrorName(true);
            return;
        }

        DocumentService.createDocument(
            nameFile,
            template.structure,
            template.id
        )
            .then(() => {
                setAlert(true);
                setErrorSave(false);
            })
            .catch(() => {
                setAlert(true);
                setErrorSave(true);
            });
    };

    const documentFetch = document.structure && !loading;
    return (
        <LayoutTypeOne
            sectionName={'Создание документа'}
            actions={
                <div className={styles.actions}>
                    <div className={styles.action}>
                        <Input
                            placeholder={'Введите название файла'}
                            isError={isErrorName}
                            onChange={changeNameFile}
                        />
                        <Button colorBtn={'blue'} onClick={saveDocument}>
                            Сохранить файл
                        </Button>
                    </div>
                    <SelectEntity
                        data={templates}
                        onChange={changeTemplate}
                        defaultOption={'Выберите шаблон'}
                    />
                </div>
            }
            mainPart={
                <>
                    {documentFetch && <LayoutTree data={document.structure} />}
                    {loading && <PreloaderWithLayout />}
                    <Alert
                        visible={isAlert}
                        isError={isErrorSave}
                        onClick={() => setAlert(false)}
                    >
                        {isErrorSave
                            ? 'Произошла ошибка при сохранении файла'
                            : 'Файл успешно сохранён'}
                    </Alert>
                </>
            }
        />
    );
};
