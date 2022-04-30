import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './keywordsBlock.module.scss';
import DocumentService from '../../services/documentService';
import { IKeywordsTypeOne, Mode } from '../../types/api';
import { SettingsBlock } from './settingsBlock';
import { ListPhrases } from './listPhrases';
import { fetchDocumentsTitle } from '../../store/actionCreators/documents';
import { useDispatch } from 'react-redux';
import { PreloaderWithLayout } from '../preloader/preloaderWithLayout';
import { Text } from '../ui';
import { LayoutTypeTwo } from '../layouts';

export const KeywordsBlock: React.FC = () => {
    const [documentId, setDocumentId] = useState<string>('');
    const [mode, setMode] = useState<Mode>();
    const [sections, setSections] = useState<string[]>([]);
    const [section, setSection] = useState<string>('');
    const [keywords, setKeywords] = useState<IKeywordsTypeOne | string[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDocumentsTitle());
    }, []);

    useEffect(() => {
        if (documentId) {
            setSections([]);
            DocumentService.getSections(documentId).then((response) => {
                setSections(response.data);
            });
        }
    }, [documentId]);

    const onChangeDocumentId = (e: ChangeEvent<HTMLSelectElement>) => {
        setDocumentId(e.target.value);
    };

    const onChangeMode = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as Mode;
        setMode(value);
    };

    const onChangeSection = (e: ChangeEvent<HTMLSelectElement>) => {
        setSection(e.target.value);
    };

    const getKeywords = () => {
        if (documentId && mode) {
            setLoading(true);
            DocumentService.getKeywords(documentId, mode, section)
                .then((response) => {
                    setKeywords(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        }
    };

    const isKeywords = !loading && keywords?.length;
    const isNotKeywords = !loading && !keywords?.length;
    return (
        <LayoutTypeTwo
            sectionName={'Ключевые слова'}
            className={styles.keywordsBlock}
        >
            <SettingsBlock
                onChangeDocumentId={onChangeDocumentId}
                onChangeMode={onChangeMode}
                onChangeSection={onChangeSection}
                getKeywords={getKeywords}
                sections={sections}
                loading={loading}
            />
            {isNotKeywords && (
                <span className={styles.isNotKeywords}>
                    Выберите настройки и нажмите кнопку «Обработать», чтобы
                    получить результат
                </span>
            )}
            {isKeywords && (
                <div className={styles.keywords}>
                    <Text type="h3">Список ключевых слов (словосочетаний)</Text>
                    <div className={styles.keywordsInner}>
                        <ListPhrases keywords={keywords} mode={mode} />
                    </div>
                </div>
            )}
            {loading && <PreloaderWithLayout />}
        </LayoutTypeTwo>
    );
};
