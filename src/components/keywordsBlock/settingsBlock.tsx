import React, { ChangeEvent } from 'react';
import { Button, SelectDoc, SelectSetting } from '../ui';
import { modesKeywords } from '../../constants';
import styles from './keywordsBlock.module.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { documentTitlesSelector } from '../../store/selectors';
import { ISettingsBlock } from './keywordsBlockProps';

export const SettingsBlock: React.FC<ISettingsBlock> = ({
    onChangeDocumentId,
    onChangeMode,
    getKeywords,
    loading,
}) => {
    const { documents } = useTypeSelector(documentTitlesSelector);
    return (
        <div className={styles.settingsBlock}>
            <h2>Настройки</h2>
            <div className={styles.settings}>
                <div className={styles.setting}>
                    <h3>Выберите документ</h3>
                    <SelectDoc
                        data={documents}
                        className={styles.select}
                        onChange={onChangeDocumentId}
                    />
                </div>
                <div className={styles.setting}>
                    <h3>Выберите режим выделения</h3>
                    <SelectSetting
                        data={modesKeywords}
                        className={styles.select}
                        onChange={onChangeMode}
                    />
                </div>
                <Button
                    colorBtn={'blue'}
                    className={styles.procBtn}
                    disableBtn={loading}
                    onClick={getKeywords}
                >
                    Обработать
                </Button>
            </div>
            <div className={styles.line} />
        </div>
    );
};
