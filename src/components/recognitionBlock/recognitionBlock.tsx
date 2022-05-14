import React, { ChangeEvent, useEffect, useState } from 'react';
import { LayoutTypeOne } from '../layouts';
import { Alert, Button, Input, SelectEntity, Text } from '../ui';
import { LayoutTree } from '../tree/tree';
import styles from './recognitionBlock.module.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { documentSelector, templateSelector } from '../../store/selectors';
import { useDispatch } from 'react-redux';
import {
    setZeroDocument,
    uploadDocument,
} from '../../store/actionCreators/document';
import DocumentService from '../../services/documentService';
import { PreloaderWithLayout } from '../preloader/preloaderWithLayout';
import { fetchTemplates } from '../../store/actionCreators/template';

export const RecognitionBlock: React.FC = () => {
    const [filename, setFilename] = useState<string>();
    const [fileRec, setFileRec] = useState<File>();
    const { document, loading: loadingRec } = useTypeSelector(documentSelector);
    const { templates } = useTypeSelector(templateSelector);
    const [fileError, setFileError] = useState<boolean>(false);
    const [fileNameError, setFileNameError] = useState<boolean>(false);
    const [isAlert, setAlert] = useState<boolean>(false);
    const [isErrorSave, setErrorSave] = useState<boolean>(false);
    const [templateId, setTemplateId] = useState<string>('');
    const [templateError, setTemplateError] = useState<boolean>(false);
    const [loadingSave, setLoadingSave] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTemplates());
        return () => {
            dispatch(setZeroDocument());
        };
    }, []);

    const changeFile = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length) {
            if (fileError) {
                setFileError(false);
                setFileNameError(false);
            }
            setFilename(files[0].name);
            setFileRec(files[0]);
        }
    };

    const changeFilename = (event: ChangeEvent<HTMLInputElement>) => {
        if (filename) {
            setFileNameError(false);
        }
        setFilename(event.target.value);
    };

    const onRecognitionDocument = () => {
        if (!fileRec) {
            setFileError(true);
            return;
        }
        if (!templateId) {
            return;
        }
        dispatch(uploadDocument(fileRec, templateId));
    };

    const changeTemplate = (e: ChangeEvent<HTMLSelectElement>) => {
        const tempId = e.target.value;
        if (templateError) {
            setTemplateError(false);
        }
        setTemplateId(tempId);
    };

    const onCreateDocument = () => {
        let stateError = false;

        if (!fileRec) {
            setFileNameError(true);
            stateError = true;
        }
        if (!filename) {
            setFileError(true);
            stateError = true;
        }
        if (!templateId) {
            setTemplateError(true);
            stateError = true;
        }
        if (stateError) {
            return;
        }
        setLoadingSave(true);
        if (filename && fileRec) {
            DocumentService.createDocument(
                filename,
                document.structure,
                templateId
            )
                .then(() => {
                    setAlert(true);
                    setErrorSave(false);
                })
                .catch(() => {
                    setAlert(true);
                    setErrorSave(true);
                })
                .finally(() => {
                    setLoadingSave(false);
                });
        }
    };

    return (
        <LayoutTypeOne
            sectionName={'Распознавание документа'}
            actions={
                <div className={styles.actions}>
                    <div className={styles.action}>
                        <Input
                            type={'file'}
                            accept={'.docx'}
                            disabled={loadingSave || loadingRec}
                            onChange={changeFile}
                            isError={fileError}
                        />
                        <Input
                            placeholder={'Введите название файла'}
                            value={filename}
                            disabled={!fileRec || loadingSave || loadingRec}
                            isError={fileNameError}
                            onChange={changeFilename}
                        />
                    </div>
                    <div className={styles.action}>
                        <SelectEntity
                            isError={templateError}
                            disabled={loadingSave || loadingRec}
                            data={templates}
                            onChange={changeTemplate}
                            defaultOption={'Выберите шаблон'}
                        />
                        <div className={styles.buttons}>
                            <Button
                                disable={loadingSave || loadingRec}
                                colorBtn={'blue'}
                                onClick={onRecognitionDocument}
                            >
                                Распознать файл
                            </Button>
                            <Button
                                disable={loadingSave || loadingRec}
                                colorBtn={'blue'}
                                onClick={onCreateDocument}
                            >
                                {loadingSave
                                    ? 'Файл сохраняется'
                                    : 'Сохранить файл'}
                            </Button>
                        </div>
                    </div>
                </div>
            }
            mainPart={
                <>
                    {document.structure && (
                        <LayoutTree data={document.structure} />
                    )}
                    {!document.structure && !loadingRec && (
                        <Text type="description">
                            Введите название, выберите документ, чтобы получить
                            результат
                        </Text>
                    )}
                    {loadingRec && <PreloaderWithLayout />}
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
