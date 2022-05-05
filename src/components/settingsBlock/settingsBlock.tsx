import React, { ChangeEvent, useState } from 'react';
import { LayoutTypeTwo } from '../layouts';
import { Button, Input, Text } from '../ui';
import styles from './settingsBlock.module.scss';
import TemplateService from '../../services/templateService';

export const SettingsBlock: React.FC = () => {
    const [templateName, setTemplateName] = useState<string>();
    const [templateStructure, setTemplateStructure] = useState();

    const onChangeTemplate = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length) {
            setTemplateName(files[0].name);
            const reader = new FileReader();
            reader.onload = onReaderLoad;
            reader.readAsText(files[0]);
        }
    };

    const onReaderLoad = (event: ProgressEvent) => {
        const target = event.target as FileReader;
        if (typeof target.result === 'string') {
            const structure = JSON.parse(target.result);
            setTemplateStructure(structure);
        }
    };

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setTemplateName(event.target.value);
    };

    const onCreateTemplate = () => {
        if (!templateName) {
            return;
        }
        if (!templateStructure) {
            return;
        }
        TemplateService.createTemplate(templateName, templateStructure);
    };
    return (
        <LayoutTypeTwo sectionName="Настройки сервиса">
            <section className={styles.templateSection}>
                <Text type="h2">Шаблон</Text>
                <div className={styles.setting}>
                    <Input
                        placeholder={'Введите название шаблона'}
                        value={templateName}
                        onChange={onChangeName}
                    />
                </div>
                <div className={styles.setting}>
                    <Input
                        type={'file'}
                        accept={'.json'}
                        onChange={onChangeTemplate}
                    />
                    <Button colorBtn={'blue'} onClick={onCreateTemplate}>
                        Загрузить документ
                    </Button>
                </div>
            </section>
        </LayoutTypeTwo>
    );
};
