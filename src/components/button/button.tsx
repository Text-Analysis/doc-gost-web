import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './button.module.scss';
import cn from 'classnames';
interface IButton
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
    colorBtn: 'green' | 'blue';
    disableBtn?: boolean;
}

export const Button: React.FC<IButton> = ({
    children,
    className,
    colorBtn,
    disableBtn,
}) => {
    return (
        <button
            className={cn(className, styles.button, {
                [styles.btnBlue]: colorBtn === 'blue',
                [styles.btnGreen]: colorBtn === 'green',
                [styles.btnDisable]: disableBtn,
            })}
        >
            {children}
        </button>
    );
};
