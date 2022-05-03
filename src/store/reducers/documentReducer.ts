import {
    DocumentAction,
    DocumentActionTypes,
    DocumentState,
    IDocument,
} from '../types/document';

const initialState: DocumentState = {
    document: {} as IDocument,
    documents: [],
    loading: false,
    error: null,
};

export const documentReducer = (
    state = initialState,
    action: DocumentAction
): DocumentState => {
    switch (action.type) {
        case DocumentActionTypes.FETCH_DOCUMENT:
            return {
                ...state,
                document: {} as IDocument,
                loading: true,
                error: null,
            };
        case DocumentActionTypes.FETCH_DOCUMENT_SUCCESS:
            return {
                ...state,
                document: action.payload,
                loading: false,
                error: null,
            };

        case DocumentActionTypes.EDIT_SECTION_DOCUMENT:
            return {
                ...state,
                document: { ...state.document, structure: action.payload },
            };

        case DocumentActionTypes.FETCH_DOCUMENT_ERROR:
            return {
                ...state,
                document: {} as IDocument,
                loading: false,
                error: null,
            };

        case DocumentActionTypes.SET_ZERO_DOCUMENT:
            return {
                ...state,
                document: {} as IDocument,
                loading: false,
                error: null,
            };

        case DocumentActionTypes.PARSE_DOCUMENT:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case DocumentActionTypes.PARSE_DOCUMENT_SUCCESS:
            return {
                ...state,
                document: { ...state.document, structure: action.payload },
                loading: false,
                error: null,
            };

        case DocumentActionTypes.PARSE_DOCUMENT_ERROR:
            return {
                ...state,
                document: {} as IDocument,
                loading: false,
                error: null,
            };
        case DocumentActionTypes.FETCH_DOCUMENTS:
            return { ...state, documents: [], loading: true, error: null };
        case DocumentActionTypes.FETCH_DOCUMENTS_SUCCESS:
            return {
                ...state,
                documents: action.payload,
                loading: false,
                error: null,
            };
        case DocumentActionTypes.FETCH_DOCUMENTS_ERROR:
            return {
                ...state,
                documents: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
