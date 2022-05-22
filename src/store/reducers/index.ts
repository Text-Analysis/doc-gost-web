import { combineReducers } from 'redux';
import { documentReducer } from './documentReducer';
import { templateReducer } from './templateReducer';
import { notificationReducer } from './notificationReducer';

export const rootReducer = combineReducers({
    document: documentReducer,
    template: templateReducer,
    notification: notificationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
