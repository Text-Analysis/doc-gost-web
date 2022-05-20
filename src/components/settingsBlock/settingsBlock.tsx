import React from 'react';
import { LayoutTypeTwo } from '../layouts';
import { Template } from './template';
import { Base } from './base';

export const SettingsBlock: React.FC = () => {
    return (
        <LayoutTypeTwo sectionName="Настройки сервиса">
            <Base />
            <Template />
        </LayoutTypeTwo>
    );
};
