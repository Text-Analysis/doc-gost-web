import React from 'react';
import styles from './layoutBlock.module.scss';
import { ILayoutBlock } from '../../types/components';

export const LayoutBlock: React.FC<ILayoutBlock> = ({
    sectionName,
    actions,
    mainPart,
}) => {
    return (
        <div className={styles.layout}>
            <h1 className={styles.sectionName}>{sectionName}</h1>
            <div className={styles.actions}>{actions}</div>
            <div className={styles.line} />
            <div className={styles.mainPart}>{mainPart}</div>
        </div>
    );
};
