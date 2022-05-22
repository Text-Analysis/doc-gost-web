import React from 'react';
import styles from '../settingsBlock.module.scss';
import { Text } from '../../ui';
import { ChangeConnection } from './changeConnection';

export const Base: React.FC = () => {
    return (
        <section className={styles.section}>
            <Text type="h2">Базовые настройки</Text>
            <ChangeConnection />
            <div className={styles.line} />
        </section>
    );
};
