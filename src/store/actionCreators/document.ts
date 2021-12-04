import { Dispatch } from 'redux';
import {
    DocumentAction,
    DocumentActionTypes,
    IData,
} from '../../types/actions/document';
import { getDocument } from '../../api';
import { changeTextSection } from '../../utils';

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

export const editSectionDocument = (
    structure: IData[],
    childName: string,
    value: string
) => {
    return (dispatch: Dispatch<DocumentAction>) => {
        const data = changeTextSection(structure, childName, value);
        dispatch({
            type: DocumentActionTypes.EDIT_SECTION_DOCUMENT,
            payload: data,
        });
    };
};
