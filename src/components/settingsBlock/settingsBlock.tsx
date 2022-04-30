import React from 'react';
import { LayoutTypeTwo } from '../layouts';
import { SelectDoc, Text } from '../ui';
import styles from './settingsBlock.module.scss';

export const SettingsBlock: React.FC = () => {
    return (
        <LayoutTypeTwo sectionName="Настройки сервиса">
            <section className={styles.templateSection}>
                <Text type="h2">Шаблон</Text>
                <div className={styles.settings}>
                    <div className={styles.setting}>
                        <Text type="h3">Выберите стандартный шаблон</Text>
                        <SelectDoc data={[]} />
                    </div>
                </div>
            </section>
        </LayoutTypeTwo>
    );
};
