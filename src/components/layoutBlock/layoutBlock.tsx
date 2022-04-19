import React from 'react';
import styles from './layoutBlock.module.scss';
import { ILayoutBlock } from '../../types/components';
import { Text } from '../ui';

export const LayoutBlock: React.FC<ILayoutBlock> = ({
    sectionName,
    actions,
    mainPart,
}) => {
    return (
        <div className={styles.layout}>
            <Text type="h1" className={styles.sectionName}>
                {sectionName}
            </Text>
            <div className={styles.actions}>{actions}</div>
            <div className={styles.line} />
            <div className={styles.mainPart}>{mainPart}</div>
        </div>
    );
};
