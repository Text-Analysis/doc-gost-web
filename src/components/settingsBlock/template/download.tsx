import React, { ChangeEvent, useState } from 'react';
import styles from '../settingsBlock.module.scss';
import { Alert, Button, Input } from '../../ui';
import TemplateService from '../../../services/templateService';
import { PreloaderWithLayout } from '../../preloader/preloaderWithLayout';

export const Download: React.FC = () => {
    const [templateName, setTemplateName] = useState<string>();
    const [templateStructure, setTemplateStructure] = useState();
    const [errorName, setErrorName] = useState<boolean>(false);
    const [isAlert, setAlert] = useState<boolean>(false);
    const [isErrorSave, setErrorSave] = useState<boolean>(false);

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
        TemplateService.createTemplate(templateName, templateStructure)
            .then(() => {
                setErrorSave(false);
                setAlert(true);
            })
            .catch(() => {
                setErrorSave(true);
                setAlert(true);
            });
    };
    return (
        <>
            <div className={styles.setting}>
                <div className={styles.part}>
                    <Input
                        placeholder={'Введите название шаблона'}
                        value={templateName}
                        isError={errorName}
                        disabled={!templateStructure}
                        onChange={onChangeName}
                    />
                </div>
                <div className={styles.part}>
                    <Input
                        type={'file'}
                        accept={'.json'}
                        onChange={onChangeTemplate}
                    />
                    <Button colorBtn={'blue'} onClick={onCreateTemplate}>
                        Загрузить документ
                    </Button>
                </div>
                <div className={styles.line} />
            </div>
            <Alert
                visible={isAlert}
                isError={isErrorSave}
                onClick={() => setAlert(false)}
            >
                {isErrorSave
                    ? 'Произошла ошибка при сохранении шаблона (проверьте структуру)'
                    : 'Шаблон успешно сохранён'}
            </Alert>
        </>
    );
};
