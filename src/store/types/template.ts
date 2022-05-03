import { IData, IEntity } from './index';

export interface ITemplate extends IEntity {
    structure: IData[];
}

export interface TemplateState {
    template: ITemplate;
    templates: IEntity[];
    loading: boolean;
    error: string | null;
}

export enum TemplateActionTypes {
    FETCH_TEMPLATE = 'FETCH_TEMPLATE',
    FETCH_TEMPLATE_SUCCESS = 'FETCH_TEMPLATE_SUCCESS',
    FETCH_TEMPLATE_ERROR = 'FETCH_TEMPLATE_ERROR',
    FETCH_TEMPLATES = 'FETCH_TEMPLATES',
    FETCH_TEMPLATES_SUCCESS = 'FETCH_TEMPLATES_SUCCESS',
    FETCH_TEMPLATES_ERROR = 'FETCH_TEMPLATES_ERROR',
}

interface FetchTemplateAction {
    type: TemplateActionTypes.FETCH_TEMPLATE;
}

interface FetchTemplateActionSuccess {
    type: TemplateActionTypes.FETCH_TEMPLATE_SUCCESS;
    payload: ITemplate;
}

interface FetchTemplateActionError {
    type: TemplateActionTypes.FETCH_TEMPLATE_ERROR;
    payload: any;
}

interface FetchTemplatesAction {
    type: TemplateActionTypes.FETCH_TEMPLATES;
}

interface FetchTemplatesActionSuccess {
    type: TemplateActionTypes.FETCH_TEMPLATES_SUCCESS;
    payload: IEntity[];
}

interface FetchTemplatesActionError {
    type: TemplateActionTypes.FETCH_TEMPLATES_ERROR;
    payload: any;
}

export type TemplateAction =
    | FetchTemplateAction
    | FetchTemplateActionSuccess
    | FetchTemplateActionError
    | FetchTemplatesAction
    | FetchTemplatesActionSuccess
    | FetchTemplatesActionError;
