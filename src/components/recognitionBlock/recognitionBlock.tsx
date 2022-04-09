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
import DocumentService from '../../services/documentService';

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

    const onRecognitionDocument = () => {
        if (fileRec) {
            dispatch(uploadDocument(fileRec));
        }
    };

    const onCreateDocument = () => {
        if (filename && fileRec) {
            DocumentService.createDocument(filename, document.structure).then(
                (response) => {
                    console.log('SUCCESS', response);
                }
            );
        }
    };
    return (
        <LayoutBlock
            sectionName={'Распознавание документа'}
            actions={
                <>
                    <div className={styles.action}>
                        <Input
                            placeholder={'Введите название файла'}
                            value={filename}
                            onChange={changeFilename}
                        />
                        <Button
                            disableBtn={loading}
                            colorBtn={'blue'}
                            onClick={onRecognitionDocument}
                        >
                            Распознать файл
                        </Button>
                    </div>
                    <div className={styles.action}>
                        <Input type={'file'} onChange={changeFile} />
                        <Button
                            disableBtn={loading}
                            colorBtn={'blue'}
                            onClick={onCreateDocument}
                        >
                            Сохранить файл
                        </Button>
                    </div>
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
