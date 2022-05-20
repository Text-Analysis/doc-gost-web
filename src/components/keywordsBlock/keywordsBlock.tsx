import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './keywordsBlock.module.scss';
import DocumentService from '../../services/documentService';
import { SettingsBlock } from './settingsBlock';
import { ListPhrases } from './listPhrases';
import { useDispatch } from 'react-redux';
import { PreloaderWithLayout } from '../preloader/preloaderWithLayout';
import { Text } from '../ui';
import { LayoutTypeTwo } from '../layouts';
import { fetchShortDocuments } from '../../store/actionCreators/document';
import { IKeywordsTypeOne, Mode } from '../../services/serviceProps';
import cn from 'classnames';
import { addNotification } from '../../store/actionCreators/notification';

export const KeywordsBlock: React.FC = () => {
    const [documentId, setDocumentId] = useState<string>('');
    const [mode, setMode] = useState<Mode>();
    const [sections, setSections] = useState<string[]>([]);
    const [section, setSection] = useState<string>('');
    const [keywords, setKeywords] = useState<IKeywordsTypeOne | string[]>();
    const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShortDocuments());
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
            DocumentService.generationKeywords(documentId, mode, section)
                .then((response) => {
                    setKeywords(response.data);
                    return DocumentService.getKeywords(documentId);
                })
                .then((response) => {
                    const result = response.data;
                    if (!result) {
                        setSelectedKeywords([]);
                    } else {
                        setSelectedKeywords(result);
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };
    const toggleSelectedKeyword = (keyword: string) => {
        const index = selectedKeywords.indexOf(keyword);
        if (index !== -1) {
            const filteredArray = selectedKeywords.filter(
                (_, num) => num !== index
            );
            setSelectedKeywords(filteredArray);
        } else {
            setSelectedKeywords([...selectedKeywords, keyword]);
        }
    };

    const saveKeywords = () => {
        DocumentService.updateDocument(documentId, undefined, selectedKeywords)
            .then(() =>
                dispatch(addNotification('success', 'Ключевые слова сохранены'))
            )
            .catch(() =>
                dispatch(
                    addNotification(
                        'error',
                        'Произошла ошибка при сохранении слов'
                    )
                )
            );
    };

    const isKeywords = !loading && keywords?.length;
    const isNotKeywords = !loading && !keywords?.length;
    return (
        <LayoutTypeTwo
            sectionName={'Ключевые слова'}
            className={cn(styles.keywordsBlock, {
                [styles.keywordsBlockOverflow]: keywords,
            })}
        >
            <SettingsBlock
                onChangeDocumentId={onChangeDocumentId}
                onChangeMode={onChangeMode}
                onChangeSection={onChangeSection}
                getKeywords={getKeywords}
                saveKeywords={saveKeywords}
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
                        <ListPhrases
                            keywords={keywords}
                            mode={mode}
                            selectedKeywords={selectedKeywords}
                            toggleSelectedKeyword={toggleSelectedKeyword}
                        />
                    </div>
                </div>
            )}
            {loading && <PreloaderWithLayout />}
        </LayoutTypeTwo>
    );
};
