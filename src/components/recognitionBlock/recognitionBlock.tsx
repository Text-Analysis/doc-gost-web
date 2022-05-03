import React, { ChangeEvent, useEffect, useState } from 'react';
import { LayoutTypeOne } from '../layouts';
import { Alert, Button, Input, Text } from '../ui';
import { LayoutTree } from '../tree/tree';
import styles from './recognitionBlock.module.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { documentSelector } from '../../store/selectors';
import { useDispatch } from 'react-redux';
import {
    setZeroDocument,
    uploadDocument,
} from '../../store/actionCreators/document';
import DocumentService from '../../services/documentService';
import { PreloaderWithLayout } from '../preloader/preloaderWithLayout';

export const RecognitionBlock: React.FC = () => {
    const [filename, setFilename] = useState<string>();
    const [fileRec, setFileRec] = useState<File>();
    const { document, loading } = useTypeSelector(documentSelector);
    const [fileError, setFileError] = useState<boolean>(false);
    const [fileNameError, setFileNameError] = useState<boolean>(false);
    const [isAlert, setAlert] = useState<boolean>(false);
    const [isErrorSave, setErrorSave] = useState<boolean>(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setZeroDocument());
    }, []);

    const changeFile = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
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
        dispatch(uploadDocument(fileRec));
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
        if (stateError) {
            return;
        }
        if (filename && fileRec) {
            DocumentService.createDocument(filename, document.structure)
                .then(() => {
                    setAlert(true);
                    setErrorSave(false);
                })
                .catch(() => {
                    setAlert(true);
                    setErrorSave(true);
                });
        }
    };

    return (
        <LayoutTypeOne
            sectionName={'Распознавание документа'}
            actions={
                <>
                    <div className={styles.action}>
                        <Input
                            placeholder={'Введите название файла'}
                            value={filename}
                            isError={fileNameError}
                            onChange={changeFilename}
                        />
                        <Button
                            disable={loading}
                            colorBtn={'blue'}
                            onClick={onRecognitionDocument}
                        >
                            Распознать файл
                        </Button>
                    </div>
                    <div className={styles.action}>
                        <Input
                            type={'file'}
                            onChange={changeFile}
                            isError={fileError}
                        />
                        <Button
                            disable={loading}
                            colorBtn={'blue'}
                            onClick={onCreateDocument}
                        >
                            Сохранить файл
                        </Button>
                    </div>
                </>
            }
            mainPart={
                <>
                    {document.structure && (
                        <LayoutTree data={document.structure} />
                    )}
                    {!document.structure && !loading && (
                        <Text type="description">
                            Введите название, выберите документ, чтобы получить
                            результат
                        </Text>
                    )}
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
