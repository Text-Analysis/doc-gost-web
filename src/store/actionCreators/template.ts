import { Dispatch } from 'redux';
import { TemplateAction, TemplateActionTypes } from '../types/template';
import TemplateService from '../../services/templateService';

export const fetchTemplate = (id: string) => {
    return async (dispatch: Dispatch<TemplateAction>) => {
        try {
            dispatch({ type: TemplateActionTypes.FETCH_TEMPLATE });

            const response = await TemplateService.getTemplate(id);

            dispatch({
                type: TemplateActionTypes.FETCH_TEMPLATE_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: TemplateActionTypes.FETCH_TEMPLATE_ERROR,
                payload: error,
            });
        }
    };
};

export const fetchTemplates = () => {
    return async (dispatch: Dispatch<TemplateAction>) => {
        try {
            dispatch({ type: TemplateActionTypes.FETCH_TEMPLATES });

            const response = await TemplateService.getTemplates();

            dispatch({
                type: TemplateActionTypes.FETCH_TEMPLATES_SUCCESS,
                payload: response.data.data,
            });
        } catch (error) {
            dispatch({
                type: TemplateActionTypes.FETCH_TEMPLATES_ERROR,
                payload: error,
            });
        }
    };
};

export const setZeroTemplate = () => {
    return (dispatch: Dispatch<TemplateAction>) => {
        dispatch({
            type: TemplateActionTypes.SET_ZERO_TEMPLATE,
        });
    };
};
