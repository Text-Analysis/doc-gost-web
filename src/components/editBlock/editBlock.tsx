import React, { ChangeEvent, useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import styles from './editBlock.module.scss';
import { LayoutTree } from '../tree/tree';
import { Button, SelectEntity, Text } from '../ui';
import {
    fetchDocument,
    fetchShortDocuments,
    setZeroDocument,
} from '../../store/actionCreators/document';
import { LayoutTypeOne } from '../layouts';
import DocumentService from '../../services/documentService';
import { documentSelector } from '../../store/selectors';
import { PreloaderWithLayout } from '../preloader/preloaderWithLayout';
import { addNotification } from '../../store/actionCreators/notification';

export const EditBlock: React.FC = () => {
    const dispatch = useDispatch();
    const {
        document: documentEdit,
        documents,
        loading,
    } = useTypeSelector(documentSelector);
    const [documentId, setDocumentId] = useState<string>('');
    const [isUpdate, setUpdate] = useState<boolean>(false);
    const [isDelete, setDelete] = useState<boolean>(false);
    const [selectError, setSelectError] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchShortDocuments());
        return () => {
            dispatch(setZeroDocument());
        };
    }, []);

    useEffect(() => {
        if (documentId) {
            dispatch(fetchDocument(documentId));
        }
    }, [documentId]);

    const onChangeDocumentId = (e: ChangeEvent<HTMLSelectElement>) => {
        if (selectError) {
            setSelectError(false);
        }
        setDocumentId(e.target.value);
    };

    const onUpdateDocument = () => {
        if (!documentId) {
            setSelectError(true);
            return;
        }

        setUpdate(true);
        DocumentService.updateDocument(documentEdit.id, documentEdit.structure)
            .then(() => {
                dispatch(
                    addNotification('success', 'Документ успешно обновлён')
                );
            })
            .catch(() => {
                dispatch(
                    addNotification(
                        'error',
                        'При обновлении документа произошла ошибка'
                    )
                );
            })
            .finally(() => {
                setUpdate(false);
            });
    };

    const onDeleteDocument = () => {
        if (!documentId) {
            setSelectError(true);
            return;
        }
        setDelete(true);
        DocumentService.deleteDocument(documentId)
            .then(() => {
                dispatch(setZeroDocument());
                dispatch(fetchShortDocuments());
                dispatch(addNotification('success', 'Документ успешно удалён'));
            })
            .catch(() => {
                dispatch(
                    addNotification(
                        'error',
                        'Произошла ошибка при удалении документа'
                    )
                );
            })
            .finally(() => {
                setDelete(false);
            });
    };

    const onDownloadDocument = () => {
        if (!documentId) {
            setSelectError(true);
            return;
        }
        DocumentService.downloadDocument(documentId).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.docx');
            document.body.appendChild(link);
            link.click();
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
                        isError={selectError}
                    />
                    <Button
                        colorBtn={'blue'}
                        onClick={onUpdateDocument}
                        disable={isUpdate || isDelete}
                    >
                        {isUpdate ? 'Сохраняется...' : 'Изменить'}
                    </Button>
                    <Button
                        colorBtn={'blue'}
                        onClick={onDeleteDocument}
                        disable={isUpdate || isDelete}
                    >
                        {isDelete ? 'Удаляется...' : 'Удалить'}
                    </Button>
                    <Button
                        colorBtn={'blue'}
                        onClick={onDownloadDocument}
                        disable={isUpdate || isDelete}
                    >
                        Скачать в Word
                    </Button>
                </div>
            }
            mainPart={
                <>
                    {documentEdit.structure && (
                        <LayoutTree data={documentEdit.structure} />
                    )}
                    {!documentEdit.structure && !loading && (
                        <Text type="description">
                            Выберите документ, чтобы получить информацию
                        </Text>
                    )}
                    {loading && <PreloaderWithLayout />}
                </>
            }
        />
    );
};
