import { Mode } from './types/api';

export const urlApi = 'http://127.0.0.1:8000/api/';

export const templateId = '61bc2be58718677d692a26c7';

export const modesKeywords = <ModesKeywords>[
    {
        mode: 'tf_idf',
        title: 'TF-IDF',
    },
    {
        mode: 'pullenti',
        title: 'Pullenti',
    },
    {
        mode: 'combine',
        title: 'Комбинированный',
    },
];

interface IModeKeyword {
    mode: Mode;
    title: string;
}

export type ModesKeywords = IModeKeyword[];
