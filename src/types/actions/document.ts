import { IDocument } from './documents';

export interface IDocumentFull extends IDocument {
    structure: IData[];
}

export interface IData {
    name: string;
    text?: string;
    children?: IData[];
}

export interface DocumentState {
    document: IDocumentFull;
    loading: boolean;
    error: string | null;
}

export enum DocumentActionTypes {
    FETCH_DOCUMENT = 'FETCH_DOCUMENT',
    FETCH_DOCUMENT_SUCCESS = 'FETCH_DOCUMENT_SUCCESS',
    EDIT_SECTION_DOCUMENT = 'EDIT_SECTION_DOCUMENT',
    FETCH_DOCUMENT_ERROR = 'FETCH_DOCUMENT_ERROR',
}

interface FetchDocumentAction {
    type: DocumentActionTypes.FETCH_DOCUMENT;
}

interface FetchDocumentActionSuccess {
    type: DocumentActionTypes.FETCH_DOCUMENT_SUCCESS;
    payload: IDocumentFull;
}

interface EditSectionDocument {
    type: DocumentActionTypes.EDIT_SECTION_DOCUMENT;
    payload: IData[];
}

interface FetchDocumentActionError {
    type: DocumentActionTypes.FETCH_DOCUMENT_ERROR;
    payload: any;
}

export type DocumentAction =
    | FetchDocumentAction
    | FetchDocumentActionSuccess
    | FetchDocumentActionError
    | EditSectionDocument;
