import React from 'react';
import { LayoutTypeTwo } from '../layouts';
import { Template } from './template';

export const SettingsBlock: React.FC = () => {
    return (
        <LayoutTypeTwo sectionName="Настройки сервиса">
            <Template />
        </LayoutTypeTwo>
    );
};
