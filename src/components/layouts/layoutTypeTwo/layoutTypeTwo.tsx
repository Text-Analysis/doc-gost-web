import React from 'react';
import styles from './layoutTypeTwo.module.scss';
import { ILayoutDefault } from './layoutTypeTwoProps';
import { Layout } from '../layout/layout';

export const LayoutTypeTwo: React.FC<ILayoutDefault> = ({
    sectionName,
    children,
    ...props
}) => {
    return (
        <Layout sectionName={sectionName} {...props}>
            <section className={styles.mainPart}>{children}</section>
        </Layout>
    );
};
