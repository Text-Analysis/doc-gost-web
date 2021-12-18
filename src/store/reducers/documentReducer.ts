import {
    DocumentAction,
    DocumentActionTypes,
    DocumentState,
    IDocumentFull,
} from '../../types/actions/document';

const initialState: DocumentState = {
    document: {} as IDocumentFull,
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
                document: {} as IDocumentFull,
                loading: true,
                error: null,
            };
        case DocumentActionTypes.FETCH_DOCUMENT_SUCCESS:
            return { document: action.payload, loading: false, error: null };
        case DocumentActionTypes.EDIT_SECTION_DOCUMENT:
            return {
                ...state,
                document: { ...state.document, structure: action.payload },
            };
        case DocumentActionTypes.FETCH_DOCUMENT_ERROR:
            return {
                document: {} as IDocumentFull,
                loading: false,
                error: null,
            };
        case DocumentActionTypes.SET_ZERO_DOCUMENT:
            return {
                document: {} as IDocumentFull,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};
