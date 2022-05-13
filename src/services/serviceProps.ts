import { IData, IEntity } from '../store/types';

export interface RequestEntities {
    data: IEntity[];
}

export interface IUpdateDocumentProps {
    structure?: IData[];
    keywords?: string[];
}

export interface ICreateDocumentProps {
    name: string;
    structure: IData[];
    templateId: string;
}

export interface ICreateTemplateProps {
    name: string;
    structure: IData[];
}

export type Mode = 'tf_idf' | 'pullenti' | 'combine';

type IKeywordTypeOne = [string, number];

export type IKeywordsTypeOne = IKeywordTypeOne[];
