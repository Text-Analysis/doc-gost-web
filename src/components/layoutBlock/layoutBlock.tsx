import React from 'react';
import styles from './layoutBlock.module.scss';
import { ILayoutBlock } from '../../types/components';

export const LayoutBlock: React.FC<ILayoutBlock> = ({ actions, mainPart }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.actions}>{actions}</div>
            {mainPart}
        </div>
    );
};
