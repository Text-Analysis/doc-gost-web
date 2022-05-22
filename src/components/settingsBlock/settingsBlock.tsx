import React from 'react';
import { LayoutTypeTwo } from '../layouts';
import { Template } from './template';
import { Base } from './base';
import styles from './settingsBlock.module.scss';

export const SettingsBlock: React.FC = () => {
    return (
        <LayoutTypeTwo
            sectionName="Настройки сервиса"
            className={styles.settingsBlock}
        >
            <Base />
            <Template />
        </LayoutTypeTwo>
    );
};
