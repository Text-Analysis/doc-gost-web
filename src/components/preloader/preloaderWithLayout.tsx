import React from 'react';
import { Preloader } from './preloader';
import styles from './preloader.module.scss';

export const PreloaderWithLayout: React.FC = () => {
    return (
        <div className={styles.layoutPreloader}>
            <Preloader />
        </div>
    );
};
