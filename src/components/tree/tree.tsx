import React from 'react';
import { IData } from '../../api';
import { Section } from '../section/section';
import styles from './tree.module.scss';

interface ILayout {
    data: IData[];
}

type ITree = ILayout;

const Tree: React.FC<ITree> = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <Section
                    title={item.name}
                    key={index}
                    text={item.text && item.text}
                >
                    {item.children && <Tree data={item.children} />}
                </Section>
            ))}
        </>
    );
};

export const LayoutTree: React.FC<ILayout> = ({ data }) => {
    return (
        <div className={styles.tree}>
            <Tree data={data} />
        </div>
    );
};
