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

export const EditBlock: React.FC = () => {
    const dispatch = useDispatch();
    const { documents } = useTypeSelector((state) => state.documentTitles);
    const { document, loading } = useTypeSelector((state) => state.document);
    const [documentId, setDocumentId] = useState<string>('');

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
        updateDocument(document.id, document.structure).then();
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
        </div>
    );
};
