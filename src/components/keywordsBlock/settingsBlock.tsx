import React from 'react';
import { Button, SelectDoc, SelectMode } from '../ui';
import { modesKeywords } from '../../constants';
import styles from './keywordsBlock.module.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { documentTitlesSelector } from '../../store/selectors';
import { ISettingsBlock } from './keywordsBlockProps';
import { SelectSection } from '../ui/select';

export const SettingsBlock: React.FC<ISettingsBlock> = ({
    onChangeDocumentId,
    onChangeMode,
    onChangeSection,
    getKeywords,
    sections,
    loading,
}) => {
    const { documents } = useTypeSelector(documentTitlesSelector);
    return (
        <div className={styles.settingsBlock}>
            <h2>Настройки</h2>
            <div className={styles.settings}>
                <div className={styles.settingBlock}>
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
                        <SelectMode
                            data={modesKeywords}
                            className={styles.select}
                            onChange={onChangeMode}
                        />
                    </div>
                </div>
                <div className={styles.settingBlock}>
                    <div className={styles.setting}>
                        <h3>Выберите раздел</h3>
                        <SelectSection
                            disabled={!sections.length}
                            data={sections}
                            className={styles.select}
                            onChange={onChangeSection}
                        />
                    </div>
                    <Button
                        colorBtn={'blue'}
                        className={styles.procBtn}
                        disable={loading}
                        onClick={getKeywords}
                    >
                        Обработать
                    </Button>
                </div>
            </div>
            <div className={styles.line} />
        </div>
    );
};
