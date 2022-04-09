import React, { ChangeEvent, useState } from 'react';
import styles from './keywordsBlock.module.scss';
import DocumentService from '../../services/documentService';
import { IKeywordsTypeOne, Mode } from '../../types/api';
import { SettingsBlock } from './settingsBlock';
import { ListPhrases } from './listPhrases';
import { Preloader } from '../preloader/preloader';

export const KeywordsBlock: React.FC = () => {
    const [documentId, setDocumentId] = useState<string>('');
    const [mode, setMode] = useState<Mode>();
    const [keywords, setKeywords] = useState<IKeywordsTypeOne | string[]>();
    const [loading, setLoading] = useState<boolean>(false);

    const onChangeDocumentId = (e: ChangeEvent<HTMLSelectElement>) => {
        setDocumentId(e.target.value);
    };

    const onChangeMode = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as Mode;
        setMode(value);
    };

    const getKeywords = () => {
        if (documentId && mode) {
            setLoading(true);
            DocumentService.getKeywords(documentId, mode)
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
        <div className={styles.keywordsBlock}>
            <h1>Ключевые слова</h1>
            <SettingsBlock
                onChangeDocumentId={onChangeDocumentId}
                onChangeMode={onChangeMode}
                getKeywords={getKeywords}
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
                    <h3>Список ключевых слов</h3>
                    <div className={styles.keywordsInner}>
                        <ListPhrases keywords={keywords} mode={mode} />
                    </div>
                </div>
            )}
            {loading && (
                <div className={styles.layoutPreloader}>
                    <Preloader />
                </div>
            )}
        </div>
    );
};
