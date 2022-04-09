import React, { useCallback } from 'react';
import styles from './keywordsBlock.module.scss';
import { IKeywordsTypeOne } from '../../types/api';
import { IListPhrases } from './keywordsBlockProps';

export const ListPhrases: React.FC<IListPhrases> = ({ mode, keywords }) => {
    const getKeywordsLayout = useCallback(() => {
        if (keywords && (mode === 'combine' || mode === 'tf_idf')) {
            return (
                <div className={styles.listKeywords}>
                    {(keywords as IKeywordsTypeOne).map((keyword) => {
                        const title = `${keyword[0]} (${keyword[1]})`;
                        console.log(getColorByKeyword(keyword[1]));
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
                                    <span>{title}</span>
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
                                <span>{title}</span>
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
                                <span>{keyword}</span>
                            </div>
                        );
                    })}
                </div>
            );
        }
        return null;
    }, [keywords]);

    const getColorByKeyword = (ratio: number) => {
        return `linear-gradient(#447ACC, ${ratio * 100}%, #FFBD73)`;
    };

    return getKeywordsLayout();
};
