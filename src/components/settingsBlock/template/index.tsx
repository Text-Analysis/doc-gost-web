import React from 'react';
import styles from '../settingsBlock.module.scss';
import { Text } from '../../ui';
import { Download } from './download';
import { Delete } from './delete';

export const Template: React.FC = () => {
    return (
        <section className={styles.section}>
            <Text type="h2">Настройки шаблона</Text>
            <Download />
            <Delete />
            <div className={styles.line} />
        </section>
    );
};
