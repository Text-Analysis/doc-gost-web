import React from 'react';
import { LayoutBlock } from '../layoutBlock/layoutBlock';
import { Button, Input } from '../ui';

export const RecognitionBlock: React.FC = () => {
    return (
        <LayoutBlock
            actions={
                <>
                    <Input
                        placeholder={'Введите название файла'}
                        isError={true}
                        onChange={() => console.log('rer')}
                    />
                    <Button
                        colorBtn={'blue'}
                        onClick={() => console.log('rer')}
                    >
                        Распознать файл
                    </Button>
                    <Input
                        type={'file'}
                        isError={true}
                        onChange={() => console.log('rer')}
                    />
                </>
            }
            mainPart={<></>}
        />
    );
};
