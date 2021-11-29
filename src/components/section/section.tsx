import React, { ChangeEvent, useState } from 'react';
import styles from './section.module.scss';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import cn from 'classnames';
import { ISection } from '../../types/components';

export const Section: React.FC<ISection> = ({
    title,
    text,
    children,
    ...props
}) => {
    const [activeBlock, setActiveBlock] = useState<boolean>(false);
    const [activeText, setActiveText] = useState<boolean>(false);
    const [valueInput, setValueInput] = useState<string>(title);

    const changeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);
    };
    return (
        <div
            className={cn(styles.section, {
                [styles.activeSection]: activeBlock,
            })}
            {...props}
        >
            <div className={styles.titleBlock}>
                <input value={valueInput} onChange={changeValueInput} />
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
                    <textarea defaultValue={text} />
                </div>
            )}
            {children}
        </div>
    );
};
