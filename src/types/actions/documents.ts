export interface IDocument {
    id: string;
    name: string;
}

export interface DocumentsState {
    documents: IDocument[];
    loading: boolean;
    error: string | null;
}

export enum DocumentsActionTypes {
    FETCH_DOCUMENTS = 'FETCH_DOCUMENTS',
    FETCH_DOCUMENTS_SUCCESS = 'FETCH_DOCUMENTS_SUCCESS',
    FETCH_DOCUMENTS_ERROR = 'FETCH_DOCUMENTS_ERROR',
}

interface FetchDocumentsAction {
    type: DocumentsActionTypes.FETCH_DOCUMENTS;
}

interface FetchDocumentsActionSuccess {
    type: DocumentsActionTypes.FETCH_DOCUMENTS_SUCCESS;
    payload: IDocument[];
}

interface FetchDocumentsActionError {
    type: DocumentsActionTypes.FETCH_DOCUMENTS_ERROR;
    payload: any;
}

export type DocumentsAction =
    | FetchDocumentsAction
    | FetchDocumentsActionSuccess
    | FetchDocumentsActionError;
