import React, { ChangeEvent, useEffect, useState } from 'react';
import { LayoutBlock } from '../layoutBlock/layoutBlock';
import styles from './createBlock.module.scss';
import { Input, Button, Alert } from '../ui';
import { useDispatch } from 'react-redux';
import { fetchTemplate } from '../../store/actionCreators/document';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { LayoutTree } from '../tree/tree';
import { createDocument } from '../../api';

export const CreateBlock: React.FC = () => {
    const dispatch = useDispatch();
    const { document } = useTypeSelector((state) => state.document);
    const [nameFile, setNameFile] = useState<string>();
    const [isErrorName, setErrorName] = useState<boolean>(false);
    const [isAlert, setAlert] = useState<boolean>(false);
    const [isErrorSave, setErrorSave] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchTemplate('61bc2be58718677d692a26c7'));
    }, []);

    const changeNameFile = (e: ChangeEvent<HTMLInputElement>) => {
        setNameFile(e.target.value);
        setErrorName(false);
    };

    const saveDocument = () => {
        if (!nameFile) {
            setErrorName(true);
            return;
        }

        createDocument(nameFile, document.structure)
            .then(() => {
                setAlert(true);
                setErrorSave(false);
            })
            .catch(() => {
                setAlert(true);
                setErrorSave(true);
            });
    };

    return (
        <LayoutBlock>
            <div className={styles.actions}>
                <Input
                    placeholder={'Введите название файла'}
                    isError={isErrorName}
                    onChange={changeNameFile}
                />
                <Button colorBtn={'blue'} onClick={saveDocument}>
                    Сохранить файл
                </Button>
            </div>
            {document.structure && <LayoutTree data={document.structure} />}
            <Alert
                className={styles.alert}
                visible={isAlert}
                isError={isErrorSave}
                onClick={() => setAlert(false)}
            >
                {isErrorSave
                    ? 'Произошла ошибка при сохранении файла'
                    : 'Файл успешно сохранён'}
            </Alert>
        </LayoutBlock>
    );
};
