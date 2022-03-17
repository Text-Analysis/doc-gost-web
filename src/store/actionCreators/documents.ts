import { Dispatch } from 'redux';
import {
    DocumentsAction,
    DocumentsActionTypes,
} from '../../types/actions/documents';
import DocumentService from '../../services/documentService';

export const fetchDocumentsTitle = () => {
    return async (dispatch: Dispatch<DocumentsAction>) => {
        try {
            dispatch({ type: DocumentsActionTypes.FETCH_DOCUMENTS });
            const response = await DocumentService.getDocuments();
            dispatch({
                type: DocumentsActionTypes.FETCH_DOCUMENTS_SUCCESS,
                payload: response.data.data,
            });
        } catch (error) {
            dispatch({
                type: DocumentsActionTypes.FETCH_DOCUMENTS_ERROR,
                payload: error,
            });
        }
    };
};
