import React from 'react';
import cn from 'classnames';
import styles from './layout.module.scss';
import { Text } from '../../ui';
import { ILayout } from './layoutProps';

export const Layout: React.FC<ILayout> = ({
    sectionName,
    className,
    children,
}) => (
    <main className={cn(styles.layout, className)}>
        <Text type="h1">{sectionName}</Text>
        {children}
    </main>
);
