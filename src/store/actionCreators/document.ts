import { Dispatch } from 'redux';
import {
    DocumentAction,
    DocumentActionTypes,
    IData,
} from '../../types/actions/document';
import { changeTextSection } from '../../utils';
import DocumentService from '../../services/documentService';

export const fetchDocument = (id: string) => {
    return async (dispatch: Dispatch<DocumentAction>) => {
        try {
            dispatch({ type: DocumentActionTypes.FETCH_DOCUMENT });

            const response = await DocumentService.getDocument(id);

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

export const uploadDocument = (filename: string, file: File) => {
    return async (dispatch: Dispatch<DocumentAction>) => {
        try {
            dispatch({ type: DocumentActionTypes.FETCH_DOCUMENT });

            const responseId = await DocumentService.uploadDocument(
                filename,
                file
            );

            const responseDocument = await DocumentService.getDocument(
                responseId.data
            );

            dispatch({
                type: DocumentActionTypes.FETCH_DOCUMENT_SUCCESS,
                payload: responseDocument.data,
            });
        } catch (error) {
            dispatch({
                type: DocumentActionTypes.FETCH_DOCUMENT_ERROR,
                payload: error,
            });
        }
    };
};

export const fetchTemplate = (id: string) => {
    return async (dispatch: Dispatch<DocumentAction>) => {
        try {
            dispatch({ type: DocumentActionTypes.FETCH_DOCUMENT });

            const response = await DocumentService.getTemplate(id);

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

export const setZeroDocument = () => {
    return (dispatch: Dispatch<DocumentAction>) => {
        dispatch({
            type: DocumentActionTypes.SET_ZERO_DOCUMENT,
        });
    };
};
