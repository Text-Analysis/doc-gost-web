export enum NotificationActionTypes {
    ADD_NOTIFICATION = 'ADD_NOTIFICATION',
    REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
}

interface AddNotificationAction {
    type: NotificationActionTypes.ADD_NOTIFICATION;
    payload: {
        type: 'success' | 'error';
        message: string;
    };
}

interface RemoveNotificationAction {
    type: NotificationActionTypes.REMOVE_NOTIFICATION;
    payload: string;
}

export type NotificationAction =
    | AddNotificationAction
    | RemoveNotificationAction;
