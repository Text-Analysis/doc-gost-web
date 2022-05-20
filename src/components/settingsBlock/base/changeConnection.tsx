import React, { ChangeEvent, useState } from 'react';
import styles from '../settingsBlock.module.scss';
import { Button, Input, Text } from '../../ui';
import BaseService from '../../../services/baseService';
import { fixedEncodeURIComponent } from '../../../utils';

export const ChangeConnection: React.FC = () => {
    const [uri, setUri] = useState<string>('');
    const [errorURI, setErrorURI] = useState<boolean>(false);

    const onChangeUri = (event: ChangeEvent<HTMLInputElement>) => {
        setErrorURI(false);
        setUri(event.target.value);
    };

    const onChangeConnection = () => {
        if (!uri) {
            setErrorURI(true);
            return;
        }
        const encodedURI = fixedEncodeURIComponent(uri);
        BaseService.changeConnection(encodedURI);
    };

    return (
        <article className={styles.setting}>
            <Text type={'h3'}>Сменить подключение к базе данных</Text>
            <section>
                <Input
                    placeholder={'Введите URI'}
                    isError={errorURI}
                    onChange={onChangeUri}
                />
                <Button colorBtn={'blue'} onClick={onChangeConnection}>
                    Сменить
                </Button>
            </section>
        </article>
    );
};
