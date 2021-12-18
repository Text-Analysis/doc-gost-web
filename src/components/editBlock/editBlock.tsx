import React, { ChangeEvent, useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchDocumentsTitle } from '../../store/actionCreators/documents';
import { useDispatch } from 'react-redux';
import styles from './editBlock.module.scss';
import { LayoutTree } from '../tree/tree';
import { Select, Button, Alert } from '../ui';
import {
    fetchDocument,
    setZeroDocument,
} from '../../store/actionCreators/document';
import { updateDocument } from '../../api';
import { LayoutBlock } from '../layoutBlock/layoutBlock';

export const EditBlock: React.FC = () => {
    const dispatch = useDispatch();
    const { documents } = useTypeSelector((state) => state.documentTitles);
    const { document, loading } = useTypeSelector((state) => state.document);
    const [documentId, setDocumentId] = useState<string>('');
    const [isAlert, setAlert] = useState<boolean>(false);
    const [isUpdate, setUpdate] = useState<boolean>(false);
    const [isErrorUpdate, setErrorUpdate] = useState<boolean>(false);
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
        setDocumentId(e.target.value);
    };

    const updateDoc = () => {
        setUpdate(true);
        updateDocument(document.id, document.structure)
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
        <LayoutBlock>
            <div className={styles.actions}>
                <Select data={documents} onChange={onChangeDocumentId} />
                <Button
                    colorBtn={'blue'}
                    onClick={updateDoc}
                    disableBtn={isUpdate}
                >
                    {isUpdate ? 'Сохраняется' : 'Изменить'}
                </Button>
            </div>
            {document.structure && <LayoutTree data={document.structure} />}
            {!document.structure && !loading && (
                <span className={styles.notFindText}>
                    Выберите документ, чтобы получить информацию
                </span>
            )}
            <Alert
                className={styles.alert}
                isError={isErrorUpdate}
                visible={isAlert}
                onClick={() => setAlert(false)}
            >
                {isErrorUpdate
                    ? 'Произошла ошибка при обновлении файла'
                    : 'Файл успешно обновлён'}
            </Alert>
        </LayoutBlock>
    );
};
