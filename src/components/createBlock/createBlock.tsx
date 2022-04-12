import React, { ChangeEvent, useEffect, useState } from 'react';
import { LayoutBlock } from '../layoutBlock/layoutBlock';
import styles from './createBlock.module.scss';
import { Input, Button, Alert } from '../ui';
import { useDispatch } from 'react-redux';
import { fetchTemplate } from '../../store/actionCreators/document';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { LayoutTree } from '../tree/tree';
import DocumentService from '../../services/documentService';
import { templateId } from '../../constants';
import { documentSelector } from '../../store/selectors';
import { PreloaderWithLayout } from '../preloader/preloaderWithLayout';

export const CreateBlock: React.FC = () => {
    const dispatch = useDispatch();
    const { document, loading } = useTypeSelector(documentSelector);
    const [nameFile, setNameFile] = useState<string>();
    const [isErrorName, setErrorName] = useState<boolean>(false);
    const [isAlert, setAlert] = useState<boolean>(false);
    const [isErrorSave, setErrorSave] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchTemplate(templateId));
    }, []);

    const changeNameFile = (e: ChangeEvent<HTMLInputElement>) => {
        setNameFile(e.target.value);
        setErrorName(false);
    };

    const saveDocument = () => {
        if (!nameFile) {
            setErrorName(true);
            return;
        }

        DocumentService.createDocument(nameFile, document.structure)
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
        <LayoutBlock
            sectionName={'Создание документа'}
            actions={
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
