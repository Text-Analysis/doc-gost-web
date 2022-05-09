import React from 'react';
import { Button, SelectEntity, SelectMode, Text } from '../ui';
import { modesKeywords } from '../../constants';
import styles from './keywordsBlock.module.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ISettingsBlock } from './keywordsBlockProps';
import { SelectSection } from '../ui/select';
import { documentSelector } from '../../store/selectors';

export const SettingsBlock: React.FC<ISettingsBlock> = ({
    onChangeDocumentId,
    onChangeMode,
    onChangeSection,
    getKeywords,
    saveKeywords,
    sections,
    loading,
}) => {
    const { documents } = useTypeSelector(documentSelector);
    return (
        <div className={styles.settingsBlock}>
            <Text type="h2">Настройки</Text>
            <div className={styles.settings}>
                <div className={styles.settingBlock}>
                    <div className={styles.setting}>
                        <Text type="h3">Выберите документ</Text>
                        <SelectEntity
                            data={documents}
                            disabled={loading}
                            className={styles.select}
                            onChange={onChangeDocumentId}
                            defaultOption={'Шаблон не выбран'}
                        />
                    </div>
                    <div className={styles.setting}>
                        <Text type="h3">Выберите режим выделения</Text>
                        <SelectMode
                            data={modesKeywords}
                            disabled={loading}
                            className={styles.select}
                            onChange={onChangeMode}
                            defaultOption={'Режим не выбран'}
                        />
                    </div>
                    <div className={styles.setting}>
                        <Text type="h3">Выберите раздел</Text>
                        <SelectSection
                            disabled={!sections.length || loading}
                            data={sections}
                            className={styles.select}
                            onChange={onChangeSection}
                            defaultOption={'Раздел не выбран'}
                        />
                    </div>
                </div>
                <div className={styles.settingBlock}>
                    <Button
                        colorBtn={'blue'}
                        className={styles.procBtn}
                        disable={loading}
                        onClick={getKeywords}
                    >
                        Обработать
                    </Button>
                    <Button
                        colorBtn={'blue'}
                        className={styles.procBtn}
                        disable={loading}
                        onClick={saveKeywords}
                    >
                        Сохранить ключевые слова
                    </Button>
                </div>
            </div>
            <div className={styles.line} />
        </div>
    );
};
