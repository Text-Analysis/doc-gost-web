import React from 'react';
import styles from './preloader.module.scss';

export const Preloader: React.FC = () => {
    return (
        <div className={styles.ldsRing}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
