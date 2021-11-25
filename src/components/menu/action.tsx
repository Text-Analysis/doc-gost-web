import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './menu.module.scss';
import cn from 'classnames';

interface IAction
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    active: boolean;
}

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
