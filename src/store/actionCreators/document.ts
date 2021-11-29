import { Dispatch } from 'redux';
import {
    DocumentAction,
    DocumentActionTypes,
} from '../../types/actions/document';
import { getDocument } from '../../api';

export const fetchDocument = (id: string) => {
    return async (dispatch: Dispatch<DocumentAction>) => {
        try {
            dispatch({ type: DocumentActionTypes.FETCH_DOCUMENT });

            const response = await getDocument(id);

            dispatch({
                type: DocumentActionTypes.FETCH_DOCUMENT_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: DocumentActionTypes.FETCH_DOCUMENT_ERROR,
                payload: error,
            });
        }
    };
};
