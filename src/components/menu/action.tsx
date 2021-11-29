import React from 'react';
import styles from './menu.module.scss';
import cn from 'classnames';
import { IAction } from '../../types/components';

const Action: React.FC<IAction> = ({ children, active, ...props }) => {
    return (
        <div
            className={cn(styles.action, { [styles.activeAction]: active })}
            {...props}
        >
            {children}
        </div>
    );
};

export default Action;
