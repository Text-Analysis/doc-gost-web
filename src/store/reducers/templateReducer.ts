import {
    ITemplate,
    TemplateAction,
    TemplateActionTypes,
    TemplateState,
} from '../types/template';

const initialState: TemplateState = {
    template: {} as ITemplate,
    templates: [],
    loading: false,
    error: null,
};

export const templateReducer = (
    state = initialState,
    action: TemplateAction
): TemplateState => {
    switch (action.type) {
        case TemplateActionTypes.FETCH_TEMPLATE:
            return {
                ...state,
                template: {} as ITemplate,
                loading: true,
                error: null,
            };
        case TemplateActionTypes.FETCH_TEMPLATE_SUCCESS:
            return {
                ...state,
                template: action.payload,
                loading: false,
                error: null,
            };
        case TemplateActionTypes.FETCH_TEMPLATE_ERROR:
            return {
                ...state,
                template: {} as ITemplate,
                loading: false,
                error: action.payload,
            };
        case TemplateActionTypes.FETCH_TEMPLATES:
            return {
                ...state,
                templates: [],
                loading: false,
                error: null,
            };
        case TemplateActionTypes.FETCH_TEMPLATES_SUCCESS:
            return {
                ...state,
                templates: action.payload,
                loading: false,
                error: null,
            };
        case TemplateActionTypes.FETCH_TEMPLATES_ERROR:
            return {
                ...state,
                templates: [],
                loading: false,
                error: action.payload,
            };
    }
    return state;
};
