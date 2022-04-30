import React from 'react';
import styles from './menu.module.scss';
import cn from 'classnames';
import { IAction } from './menuProps';

const Action: React.FC<IAction> = ({ children, active, ...props }) => {
    return (
        <section
            className={cn(styles.action, { [styles.activeAction]: active })}
            {...props}
        >
            {children}
        </section>
    );
};

export default Action;
