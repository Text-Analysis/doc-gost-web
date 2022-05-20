import {
    NotificationAction,
    NotificationActionTypes,
} from '../types/notification';
import { v4 } from 'uuid';
import { INotification } from '../../components/notification/notificationProps';

const notifications: INotification[] = [];

export const notificationReducer = (
    state = notifications,
    action: NotificationAction
): INotification[] => {
    switch (action.type) {
        case NotificationActionTypes.ADD_NOTIFICATION:
            return [...state, { id: v4(), ...action.payload } as INotification];
        case NotificationActionTypes.REMOVE_NOTIFICATION:
            return state.filter((element) => element.id !== action.payload);
        default:
            return state;
    }
};
