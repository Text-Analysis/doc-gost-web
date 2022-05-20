import React, { ChangeEvent, useState } from 'react';
import styles from '../settingsBlock.module.scss';
import { Button, Input, Text } from '../../ui';
import TemplateService from '../../../services/templateService';
import { useDispatch } from 'react-redux';
import { fetchTemplates } from '../../../store/actionCreators/template';
import { addNotification } from '../../../store/actionCreators/notification';

export const Download: React.FC = () => {
    const [templateName, setTemplateName] = useState<string>();
    const [templateStructure, setTemplateStructure] = useState();
    const [errorName, setErrorName] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    const onChangeTemplate = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length) {
            setErrorName(false);
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
        setErrorName(false);
        setTemplateName(event.target.value);
    };

    const onCreateTemplate = () => {
        if (!templateName) {
            setErrorName(true);
            return;
        }
        if (!templateStructure) {
            return;
        }
        setLoading(true);
        TemplateService.createTemplate(templateName, templateStructure)
            .then(() => {
                dispatch(fetchTemplates());
                dispatch(addNotification('success', 'Шаблон успешно загружен'));
            })
            .catch(() => {
                dispatch(
                    addNotification('error', 'Ошибка при загрузке шаблона')
                );
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <article className={styles.setting}>
            <Text type={'h3'}>Загрузка нового шаблона</Text>
            <section>
                <Input
                    placeholder={'Введите название шаблона'}
                    value={templateName}
                    isError={errorName}
                    disabled={!templateStructure || isLoading}
                    onChange={onChangeName}
                />
            </section>
            <section>
                <Input
                    type={'file'}
                    accept={'.json'}
                    onChange={onChangeTemplate}
                />
                <Button
                    colorBtn={'blue'}
                    disable={isLoading}
                    onClick={onCreateTemplate}
                >
                    {isLoading ? 'Загружается...' : 'Загрузить'}
                </Button>
            </section>
        </article>
    );
};
