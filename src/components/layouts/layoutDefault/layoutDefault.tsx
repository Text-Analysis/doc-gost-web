import React from 'react';
import { Text } from '../../ui';
import styles from './layoutDefault.module.scss';
import { ILayoutDefault } from './layoutDefaultProps';
import cn from 'classnames';

export const LayoutDefault: React.FC<ILayoutDefault> = ({
    sectionName,
    children,
    className,
}) => {
    return (
        <article className={cn(styles.layoutDefault, className)}>
            <Text type="h1">{sectionName}</Text>
            <section>{children}</section>
        </article>
    );
};
