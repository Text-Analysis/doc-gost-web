import { combineReducers } from 'redux';
import { documentReducer } from './documentReducer';
import { documentsReducer } from './documentsReducer';

export const rootReducer = combineReducers({
    document: documentReducer,
    documentTitles: documentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
