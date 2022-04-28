import React from 'react';
import { Section } from '../section/section';
import styles from './tree.module.scss';
import { ILayout, ITree } from './treeProps';

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
