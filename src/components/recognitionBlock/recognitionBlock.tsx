import React, { ChangeEvent, useEffect, useState } from 'react';
import { LayoutBlock } from '../layoutBlock/layoutBlock';
import { Button, Input } from '../ui';
import { LayoutTree } from '../tree/tree';
import styles from './recognitionBlock.module.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { documentSelector } from '../../store/selectors';
import { useDispatch } from 'react-redux';
import {
    setZeroDocument,
    uploadDocument,
} from '../../store/actionCreators/document';
import { Preloader } from '../preloader/preloader';

export const RecognitionBlock: React.FC = () => {
    const [filename, setFilename] = useState<string>();
    const [fileRec, setFileRec] = useState<File>();
    const { document, loading } = useTypeSelector(documentSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setZeroDocument());
    }, []);

    const changeFile = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setFilename(files[0].name);
            setFileRec(files[0]);
        }
    };

    const changeFilename = (event: ChangeEvent<HTMLInputElement>) => {
        setFilename(event.target.value);
    };

    const onRecognitionFile = () => {
        if (filename && fileRec) {
            dispatch(uploadDocument(filename, fileRec));
        }
    };
    return (
        <LayoutBlock
            sectionName={'Распознавание документа'}
            actions={
                <>
                    <Input
                        placeholder={'Введите название файла'}
                        value={filename}
                        onChange={changeFilename}
                    />
                    <Button colorBtn={'blue'} onClick={onRecognitionFile}>
                        Распознать файл
                    </Button>
                    <Input type={'file'} onChange={changeFile} />
                </>
            }
            mainPart={
                <>
                    {document.structure && (
                        <LayoutTree data={document.structure} />
                    )}
                    {!document.structure && !loading && (
                        <span className={styles.notFindText}>
                            Введите название, выберите документ, чтобы получить
                            результат
                        </span>
                    )}
                    {loading && (
                        <div className={styles.layoutPreloader}>
                            <Preloader />
                        </div>
                    )}
                </>
            }
        />
    );
};
