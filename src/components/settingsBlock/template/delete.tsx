import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from '../settingsBlock.module.scss';
import { Alert, Button, SelectEntity, Text } from '../../ui';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { templateSelector } from '../../../store/selectors';
import { fetchTemplates } from '../../../store/actionCreators/template';
import { useDispatch } from 'react-redux';
import templateService from '../../../services/templateService';

export const Delete: React.FC = () => {
    const { templates } = useTypeSelector(templateSelector);
    const [templateId, setTemplateId] = useState<string>();
    const [isErrorTemplate, setErrorTemplate] = useState<boolean>(false);
    const [isErrorSave, setErrorSave] = useState<boolean>(false);
    const [isAlert, setAlert] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTemplates());
    }, []);

    const changeTemplate = (e: ChangeEvent<HTMLSelectElement>) => {
        const tempId = e.target.value;
        setTemplateId(tempId);
    };

    const onDeleteTemplate = () => {
        if (!templateId) {
            setErrorTemplate(true);
            return;
        }
        setLoading(true);
        templateService
            .deleteTemplate(templateId)
            .then(() => {
                dispatch(fetchTemplates());
                setErrorSave(false);
                setAlert(true);
            })
            .catch(() => {
                setErrorSave(true);
                setAlert(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <>
            <article className={styles.setting}>
                <Text type={'h3'}>Удаление шаблона</Text>
                <section>
                    <SelectEntity
                        data={templates}
                        disabled={isLoading}
                        isError={isErrorTemplate}
                        onChange={changeTemplate}
                        defaultOption={'Выберите шаблон'}
                    />
                    <Button
                        colorBtn={'blue'}
                        disable={isLoading}
                        onClick={onDeleteTemplate}
                    >
                        {isLoading ? 'Удаляется...' : 'Удалить'}
                    </Button>
                </section>
            </article>
            <Alert
                visible={isAlert}
                isError={isErrorSave}
                onClick={() => setAlert(false)}
            >
                {isErrorSave
                    ? 'Произошла ошибка при удалении шаблона'
                    : 'Шаблон успешно удален'}
            </Alert>
        </>
    );
};
