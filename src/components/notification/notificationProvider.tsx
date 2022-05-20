import React from 'react';
import styles from './notification.module.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { notificationSelector } from '../../store/selectors';
import { Notification } from './notification';

const NotificationProvider: React.FC = () => {
    const notifications = useTypeSelector(notificationSelector);
    return (
        <div className={styles.notificationWrapper}>
            {notifications.map((note) => {
                return (
                    <Notification
                        key={note.id}
                        id={note.id}
                        type={note.type}
                        message={note.message}
                    />
                );
            })}
        </div>
    );
};

export default NotificationProvider;
