import React, { ChangeEvent, useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import styles from './editBlock.module.scss';
import { LayoutTree } from '../tree/tree';
import { Button, Alert, SelectEntity, Text } from '../ui';
import {
    fetchDocument,
    fetchShortDocuments,
    setZeroDocument,
} from '../../store/actionCreators/document';
import { LayoutTypeOne } from '../layouts';
import DocumentService from '../../services/documentService';
import { documentSelector } from '../../store/selectors';
import { PreloaderWithLayout } from '../preloader/preloaderWithLayout';

export const EditBlock: React.FC = () => {
    const dispatch = useDispatch();
    const { document, documents, loading } = useTypeSelector(documentSelector);
    const [documentId, setDocumentId] = useState<string>('');
    const [isAlertUpdate, setAlertUpdate] = useState<boolean>(false);
    const [isAlertDelete, setAlertDelete] = useState<boolean>(false);
    const [isUpdate, setUpdate] = useState<boolean>(false);
    const [isDelete, setDelete] = useState<boolean>(false);
    const [isErrorUpdate, setErrorUpdate] = useState<boolean>(false);
    const [isErrorDelete, setErrorDelete] = useState<boolean>(false);
    const [selError, setSelError] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchShortDocuments());
        if (document.structure) {
            dispatch(setZeroDocument());
        }
    }, []);

    useEffect(() => {
        if (documentId) {
            dispatch(fetchDocument(documentId));
        }
    }, [documentId]);

    const onChangeDocumentId = (e: ChangeEvent<HTMLSelectElement>) => {
        if (selError) {
            setSelError(false);
        }
        setDocumentId(e.target.value);
    };

    const updateDoc = () => {
        if (!documentId) {
            setSelError(true);
            return;
        }

        setUpdate(true);
        DocumentService.updateDocument(document.id, document.structure)
            .then(() => {
                setErrorUpdate(false);
            })
            .catch(() => {
                setErrorUpdate(true);
            })
            .finally(() => {
                setAlertUpdate(true);
                setUpdate(false);
            });
    };

    const deleteDoc = () => {
        if (!documentId) {
            setSelError(true);
            return;
        }
        setDelete(true);
        DocumentService.deleteDocument(documentId)
            .then(() => {
                dispatch(setZeroDocument());
                dispatch(fetchShortDocuments());
                setErrorDelete(false);
            })
            .catch(() => {
                setErrorDelete(true);
            })
            .finally(() => {
                setAlertDelete(true);
                setDelete(false);
            });
    };
    return (
        <LayoutTypeOne
            sectionName={'Редактирование документа'}
            actions={
                <div className={styles.action}>
                    <SelectEntity
                        data={documents}
                        onChange={onChangeDocumentId}
                        disabled={isUpdate || isDelete}
                        isError={selError}
                    />
                    <Button
                        colorBtn={'blue'}
                        onClick={updateDoc}
                        disable={isUpdate || isDelete}
                    >
                        {isUpdate ? 'Сохраняется...' : 'Изменить'}
                    </Button>
                    <Button
                        colorBtn={'blue'}
                        onClick={deleteDoc}
                        disable={isUpdate || isDelete}
                    >
                        {isDelete ? 'Удаляется...' : 'Удалить'}
                    </Button>
                </div>
            }
            mainPart={
                <>
                    {document.structure && (
                        <LayoutTree data={document.structure} />
                    )}
                    {!document.structure && !loading && (
                        <Text type="description">
                            Выберите документ, чтобы получить информацию
                        </Text>
                    )}
                    {loading && <PreloaderWithLayout />}
                    <Alert
                        isError={isErrorUpdate}
                        visible={isAlertUpdate}
                        onClick={() => setAlertUpdate(false)}
                    >
                        {isErrorUpdate
                            ? 'Произошла ошибка при обновлении файла'
                            : 'Файл успешно обновлён'}
                    </Alert>
                    <Alert
                        isError={isErrorDelete}
                        visible={isAlertDelete}
                        onClick={() => setAlertDelete(false)}
                    >
                        {isErrorDelete
                            ? 'Произошла ошибка при удалении файла'
                            : 'Файл успешно удалён'}
                    </Alert>
                </>
            }
        />
    );
};
