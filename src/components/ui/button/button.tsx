import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';
import { IButton } from './buttonProps';

export const Button: React.FC<IButton> = ({
    children,
    className,
    colorBtn,
    disable,
    ...props
}) => {
    return (
        <button
            className={cn(className, styles.button, {
                [styles.btnBlue]: colorBtn === 'blue',
                [styles.btnGreen]: colorBtn === 'green',
                [styles.btnDisable]: disable,
            })}
            {...props}
        >
            {children}
        </button>
    );
};
