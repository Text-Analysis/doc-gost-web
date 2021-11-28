import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import styles from './section.module.scss';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import cn from 'classnames';

export interface ISection
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: React.ReactNode;
    title: string;
    text?: string;
}

export const Section: React.FC<ISection> = ({
    title,
    text,
    children,
    ...props
}) => {
    const [activeBlock, setActiveBlock] = useState<boolean>(false);
    const [activeText, setActiveText] = useState<boolean>(false);

    return (
        <div
            className={cn(styles.section, {
                [styles.activeSection]: activeBlock,
            })}
            {...props}
        >
            <div className={styles.titleBlock}>
                <input placeholder={title} />
                <Arrow
                    className={cn({ [styles.activeSvg]: activeBlock })}
                    onClick={() => setActiveBlock((state) => !state)}
                />
            </div>
            {text && (
                <div
                    className={cn(styles.aboutBlock, {
                        [styles.activeAboutBlock]: activeText,
                    })}
                >
                    <div>
                        <span>Содержание</span>{' '}
                        <Arrow
                            className={cn({ [styles.activeSvg]: activeText })}
                            onClick={() => setActiveText((state) => !state)}
                        />
                    </div>
                    <textarea>{text}</textarea>
                </div>
            )}
            {children}
        </div>
    );
};
