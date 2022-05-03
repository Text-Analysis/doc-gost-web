import { Mode } from './services/serviceProps';

export const urlApi = 'http://127.0.0.1:8000/api/';

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
        title: 'TF-IDF + Pullenti',
    },
];

interface IModeKeyword {
    mode: Mode;
    title: string;
}

export type ModesKeywords = IModeKeyword[];
