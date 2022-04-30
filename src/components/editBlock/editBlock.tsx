import React, { ChangeEvent, useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchDocumentsTitle } from '../../store/actionCreators/documents';
import { useDispatch } from 'react-redux';
import styles from './editBlock.module.scss';
import { LayoutTree } from '../tree/tree';
import { Button, Alert, SelectDoc, Text } from '../ui';
import {
    fetchDocument,
    setZeroDocument,
} from '../../store/actionCreators/document';
import { LayoutTypeOne } from '../layouts';
import DocumentService from '../../services/documentService';
import {
    documentSelector,
    documentTitlesSelector,
} from '../../store/selectors';
import { PreloaderWithLayout } from '../preloader/preloaderWithLayout';

export const EditBlock: React.FC = () => {
    const dispatch = useDispatch();
    const { documents } = useTypeSelector(documentTitlesSelector);
    const { document, loading } = useTypeSelector(documentSelector);
    const [documentId, setDocumentId] = useState<string>('');
    const [isAlert, setAlert] = useState<boolean>(false);
    const [isUpdate, setUpdate] = useState<boolean>(false);
    const [isErrorUpdate, setErrorUpdate] = useState<boolean>(false);
    const [selError, setSelError] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchDocumentsTitle());
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
                setUpdate(false);
                setAlert(true);
                setErrorUpdate(false);
            })
            .catch(() => {
                setUpdate(false);
                setAlert(true);
                setErrorUpdate(true);
            });
    };

    return (
        <LayoutTypeOne
            sectionName={'Редактирование документа'}
            actions={
                <div className={styles.action}>
                    <SelectDoc
                        data={documents}
                        onChange={onChangeDocumentId}
                        isError={selError}
                    />
                    <Button
                        colorBtn={'blue'}
                        onClick={updateDoc}
                        disable={isUpdate}
                    >
                        {isUpdate ? 'Сохраняется' : 'Изменить'}
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
                        visible={isAlert}
                        onClick={() => setAlert(false)}
                    >
                        {isErrorUpdate
                            ? 'Произошла ошибка при обновлении файла'
                            : 'Файл успешно обновлён'}
                    </Alert>
                </>
            }
        />
    );
};
