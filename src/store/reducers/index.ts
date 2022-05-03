import { combineReducers } from 'redux';
import { documentReducer } from './documentReducer';
import { templateReducer } from './templateReducer';

export const rootReducer = combineReducers({
    document: documentReducer,
    template: templateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
