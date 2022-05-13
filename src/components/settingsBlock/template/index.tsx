import React from 'react';
import styles from '../settingsBlock.module.scss';
import { Text } from '../../ui';
import { Download } from './download';
import { Delete } from './delete';

export const Template: React.FC = () => {
    return (
        <section className={styles.templateSection}>
            <Text type="h2">Шаблон</Text>
            <Download />
            <Delete />
            <div className={styles.line} />
        </section>
    );
};
