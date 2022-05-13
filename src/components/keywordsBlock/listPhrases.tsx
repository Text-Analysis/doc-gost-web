import React, { useCallback } from 'react';
import styles from './keywordsBlock.module.scss';
import { IListPhrases } from './keywordsBlockProps';
import { IKeywordsTypeOne } from '../../services/serviceProps';
import { Checkbox } from '../ui/checkbox/checkbox';

export const ListPhrases: React.FC<IListPhrases> = ({
    selectedKeywords,
    toggleSelectedKeyword,
    mode,
    keywords,
}) => {
    const getKeywordsLayout = useCallback(() => {
        if (keywords && (mode === 'combine' || mode === 'tf_idf')) {
            return (
                <div className={styles.listKeywords}>
                    {(keywords as IKeywordsTypeOne).map((keyword) => {
                        const refactorKeyword = `${keyword[0]} (${keyword[1]})`;
                        if (mode === 'combine') {
                            return (
                                <div
                                    className={styles.phraseTypeThree}
                                    key={keyword[0]}
                                >
                                    <div
                                        style={{
                                            background: getColorByKeyword(
                                                keyword[1]
                                            ),
                                        }}
                                    />
                                    <Checkbox
                                        label={refactorKeyword}
                                        value={selectedKeywords.includes(
                                            keyword[0]
                                        )}
                                        onChange={() =>
                                            toggleSelectedKeyword(keyword[0])
                                        }
                                    />
                                </div>
                            );
                        }
                        return (
                            <div
                                className={styles.phraseTypeOne}
                                key={keyword[0]}
                            >
                                <div
                                    style={{
                                        background: getColorByKeyword(
                                            keyword[1]
                                        ),
                                    }}
                                />
                                <Checkbox
                                    label={refactorKeyword}
                                    value={selectedKeywords.includes(
                                        keyword[0]
                                    )}
                                    onChange={() =>
                                        toggleSelectedKeyword(keyword[0])
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            );
        }
        if (keywords && mode === 'pullenti') {
            return (
                <div className={styles.listKeywords}>
                    {(keywords as string[]).map((keyword) => {
                        return (
                            <div className={styles.phraseTypeTwo} key={keyword}>
                                <Checkbox
                                    label={keyword}
                                    value={selectedKeywords.includes(keyword)}
                                    onChange={() =>
                                        toggleSelectedKeyword(keyword)
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            );
        }
        return null;
    }, [keywords, selectedKeywords]);

    const getColorByKeyword = (ratio: number) => {
        return `linear-gradient(#FFBD73, ${ratio * 100}%, #447ACC)`;
    };

    return getKeywordsLayout();
};
