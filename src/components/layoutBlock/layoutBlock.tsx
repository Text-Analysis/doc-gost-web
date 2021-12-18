import React from 'react';
import styles from './layoutBlock.module.scss';
import { ILayoutBlock } from '../../types/components';

export const LayoutBlock: React.FC<ILayoutBlock> = ({ children }) => {
    return <div className={styles.layout}>{children}</div>;
};
