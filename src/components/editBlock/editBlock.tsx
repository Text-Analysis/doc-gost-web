import React, { ChangeEvent, useEffect, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchDocumentsTitle } from '../../store/actionCreators/documents';
import { useDispatch } from 'react-redux';
import styles from './editBlock.module.scss';
import { LayoutTree } from '../tree/tree';
import { Select } from '../select/select';
import { fetchDocument } from '../../store/actionCreators/document';
import { Button } from '../button/button';
import { updateDocument } from '../../api';
import { Alert } from '../alert/alert';

export const EditBlock: React.FC = () => {
    const dispatch = useDispatch();
    const { documents } = useTypeSelector((state) => state.documentTitles);
    const { document, loading } = useTypeSelector((state) => state.document);
    const [documentId, setDocumentId] = useState<string>('');
    const [isAlert, setAlert] = useState<boolean>(false);
    const [classAlert, setClassAlert] = useState<
        'success' | 'error' | undefined
    >(undefined);
    useEffect(() => {
        dispatch(fetchDocumentsTitle());
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
        updateDocument(document.id, document.structure)
            .then(() => {
                setAlert(true);
                setClassAlert('success');
            })
            .catch(() => {
                setAlert(true);
                setClassAlert('error');
            });
    };

    return (
        <div className={styles.editBlock}>
            <div className={styles.actions}>
                <Select data={documents} onChange={onChangeDocumentId} />
                <Button colorBtn={'blue'} onClick={updateDoc}>
                    Изменить
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
                state={classAlert}
                visible={isAlert}
                onClick={() => setAlert(false)}
            >
                {classAlert === 'success' && 'Данные успешно обновлены'}
                {classAlert === 'error' &&
                    'Произошла ошибка про обновлении данных'}
            </Alert>
        </div>
    );
};
