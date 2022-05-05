import { IData, IEntity } from './index';

export interface IDocument extends IEntity {
    templateId: string;
    structure: IData[];
}

export interface DocumentState {
    document: IDocument;
    documents: IEntity[];
    loading: boolean;
    error: string | null;
}

export enum DocumentActionTypes {
    FETCH_DOCUMENT = 'FETCH_DOCUMENT',
    FETCH_DOCUMENT_SUCCESS = 'FETCH_DOCUMENT_SUCCESS',
    FETCH_DOCUMENT_ERROR = 'FETCH_DOCUMENT_ERROR',
    PARSE_DOCUMENT = 'PARSE_DOCUMENT',
    PARSE_DOCUMENT_SUCCESS = 'PARSE_DOCUMENT_SUCCESS',
    PARSE_DOCUMENT_ERROR = 'PARSE_DOCUMENT_ERROR',
    FETCH_DOCUMENTS = 'FETCH_DOCUMENTS',
    FETCH_DOCUMENTS_SUCCESS = 'FETCH_DOCUMENTS_SUCCESS',
    FETCH_DOCUMENTS_ERROR = 'FETCH_DOCUMENTS_ERROR',
    SET_ZERO_DOCUMENT = 'SET_ZERO_DOCUMENT',
    EDIT_SECTION_DOCUMENT = 'EDIT_SECTION_DOCUMENT',
    SET_STRUCTURE_DOCUMENT = 'SET_STRUCTURE_DOCUMENT',
}

interface ParseDocumentAction {
    type: DocumentActionTypes.PARSE_DOCUMENT;
}

interface ParseDocumentActionSuccess {
    type: DocumentActionTypes.PARSE_DOCUMENT_SUCCESS;
    payload: IData[];
}

interface ParseDocumentActionError {
    type: DocumentActionTypes.PARSE_DOCUMENT_ERROR;
    payload: any;
}

interface FetchDocumentAction {
    type: DocumentActionTypes.FETCH_DOCUMENT;
}

interface FetchDocumentActionSuccess {
    type: DocumentActionTypes.FETCH_DOCUMENT_SUCCESS;
    payload: IDocument;
}

interface EditSectionDocument {
    type: DocumentActionTypes.EDIT_SECTION_DOCUMENT;
    payload: IData[];
}

interface FetchDocumentActionError {
    type: DocumentActionTypes.FETCH_DOCUMENT_ERROR;
    payload: any;
}

interface SetZeroDocument {
    type: DocumentActionTypes.SET_ZERO_DOCUMENT;
}

interface FetchDocumentsAction {
    type: DocumentActionTypes.FETCH_DOCUMENTS;
}

interface FetchDocumentsActionSuccess {
    type: DocumentActionTypes.FETCH_DOCUMENTS_SUCCESS;
    payload: IEntity[];
}

interface FetchDocumentsActionError {
    type: DocumentActionTypes.FETCH_DOCUMENTS_ERROR;
    payload: any;
}

interface SetStructureDocumentAction {
    type: DocumentActionTypes.SET_STRUCTURE_DOCUMENT;
    payload: IData[];
}

export type DocumentAction =
    | FetchDocumentAction
    | FetchDocumentActionSuccess
    | FetchDocumentActionError
    | EditSectionDocument
    | SetZeroDocument
    | ParseDocumentAction
    | ParseDocumentActionSuccess
    | ParseDocumentActionError
    | FetchDocumentsAction
    | FetchDocumentsActionSuccess
    | FetchDocumentsActionError
    | SetStructureDocumentAction;
