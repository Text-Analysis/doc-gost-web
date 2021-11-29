import {
    DocumentsAction,
    DocumentsActionTypes,
    DocumentsState,
} from '../../types/actions/documents';

const initialState: DocumentsState = {
    documents: [],
    loading: false,
    error: null,
};

export const documentsReducer = (
    state = initialState,
    action: DocumentsAction
): DocumentsState => {
    switch (action.type) {
        case DocumentsActionTypes.FETCH_DOCUMENTS:
            return { documents: [], loading: true, error: null };
        case DocumentsActionTypes.FETCH_DOCUMENTS_SUCCESS:
            return { documents: action.payload, loading: false, error: null };
        case DocumentsActionTypes.FETCH_DOCUMENTS_ERROR:
            return { documents: [], loading: false, error: null };
        default:
            return state;
    }
};
