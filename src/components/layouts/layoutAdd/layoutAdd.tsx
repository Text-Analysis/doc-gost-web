import React from 'react';
import styles from './layoutAdd.module.scss';
import { ILayoutAdd } from './layoutAddProps';
import { LayoutDefault } from '../layoutDefault/layoutDefault';

export const LayoutAdd: React.FC<ILayoutAdd> = ({
    sectionName,
    actions,
    mainPart,
}) => {
    return (
        <LayoutDefault sectionName={sectionName}>
            <section className={styles.actions}>{actions}</section>
            <div className={styles.line} />
            <section className={styles.mainPart}>{mainPart}</section>
        </LayoutDefault>
    );
};
