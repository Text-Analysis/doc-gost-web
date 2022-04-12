import React, { ChangeEvent, useState } from 'react';
import styles from './section.module.scss';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import cn from 'classnames';
import { ISection } from '../../types/components';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { editSectionDocument } from '../../store/actionCreators/document';
import { Button } from '../ui';
import { documentSelector } from '../../store/selectors';

export const Section: React.FC<ISection> = ({
    title,
    text,
    children,
    ...props
}) => {
    const [activeBlock, setActiveBlock] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [valueText, setValueText] = useState<string>('');
    const { document } = useTypeSelector(documentSelector);
    const dispatch = useDispatch();

    const changeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setValueText(value);
        setIsEdit(true);
    };

    const editSection = (nameSection: string) => {
        dispatch(
            editSectionDocument(document.structure, nameSection, valueText)
        );
        setIsEdit(false);
    };

    return (
        <div
            className={cn(styles.section, {
                [styles.activeSection]: activeBlock,
            })}
            {...props}
        >
            <div
                className={cn(styles.titleBlock, {
                    [styles.activeTitleBlock]: activeBlock,
                })}
            >
                <div onClick={() => setActiveBlock((state) => !state)}>
                    <span>{title}</span>
                    <Arrow
                        className={cn({ [styles.activeSvg]: activeBlock })}
                    />
                </div>
                {!children && (
                    <>
                        <textarea defaultValue={text} onChange={changeValue} />
                        <Button
                            colorBtn={'green'}
                            disable={!isEdit}
                            onClick={() => editSection(title)}
                        >
                            Сохранить
                        </Button>
                    </>
                )}
            </div>
            {children}
        </div>
    );
};
