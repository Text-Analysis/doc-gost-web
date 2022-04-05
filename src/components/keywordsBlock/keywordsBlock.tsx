import React from 'react';
import styles from './keywordsBlock.module.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { documentTitlesSelector } from '../../store/selectors';
import { Button, SelectDoc, SelectSetting } from '../ui';

export const KeywordsBlock: React.FC = () => {
    const { documents } = useTypeSelector(documentTitlesSelector);

    return (
        <div className={styles.keywordsBlock}>
            <h1>Ключевые слова</h1>
            <div className={styles.settingsBlock}>
                <h2>Настройки</h2>
                <div className={styles.settings}>
                    <div className={styles.setting}>
                        <h3>Выберите документ</h3>
                        <SelectDoc data={documents} className={styles.select} />
                    </div>
                    <div className={styles.setting}>
                        <h3>Выберите режим выделения</h3>
                        <SelectSetting data={[]} className={styles.select} />
                    </div>
                    <Button colorBtn={'blue'} className={styles.procBtn}>
                        Обработать
                    </Button>
                </div>
                <div className={styles.line} />
            </div>
        </div>
    );
};
