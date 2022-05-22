import { Dispatch } from 'redux';
import {
    NotificationAction,
    NotificationActionTypes,
} from '../types/notification';

export const addNotification = (type: 'success' | 'error', message: string) => {
    return (dispatch: Dispatch<NotificationAction>) => {
        dispatch({
            type: NotificationActionTypes.ADD_NOTIFICATION,
            payload: {
                type,
                message,
            },
        });
    };
};

export const removeNotification = (id: string) => {
    return (dispatch: Dispatch<NotificationAction>) => {
        dispatch({
            type: NotificationActionTypes.REMOVE_NOTIFICATION,
            payload: id,
        });
    };
};
