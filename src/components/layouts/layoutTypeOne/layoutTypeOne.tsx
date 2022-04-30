import React from 'react';
import styles from './layoutTypeOne.module.scss';
import { ILayoutAdd } from './layoutTypeOneProps';
import { Layout } from '../layout/layout';

export const LayoutTypeOne: React.FC<ILayoutAdd> = ({
    sectionName,
    actions,
    mainPart,
}) => {
    return (
        <Layout sectionName={sectionName}>
            <section className={styles.actions}>{actions}</section>
            <div className={styles.line} />
            <section className={styles.mainPart}>{mainPart}</section>
        </Layout>
    );
};
