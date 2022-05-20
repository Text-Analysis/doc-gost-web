import React, { useEffect, useState } from 'react';
import styles from './notification.module.scss';
import cn from 'classnames';
import { INotification } from './notificationProps';
import { useDispatch } from 'react-redux';
import { removeNotification } from '../../store/actionCreators/notification';

export const Notification: React.FC<INotification> = ({
    id,
    message,
    type,
}) => {
    const [exit, setExit] = useState(false);
    const [width, setWidth] = useState(0);
    const [intervalID, setIntervalID] = useState<NodeJS.Timeout | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        handleStartTimer();
    }, []);

    useEffect(() => {
        if (width === 100) {
            handleCloseNotification();
        }
    }, [width]);

    const handleStartTimer = () => {
        const id = setInterval(() => {
            setWidth((prev) => {
                if (prev < 100) {
                    return prev + 0.5;
                }

                clearInterval(id);
                return prev;
            });
        }, 15);

        setIntervalID(id);
    };

    const handlePauseTimer = () => {
        if (intervalID) {
            clearInterval(intervalID);
        }
    };

    const handleCloseNotification = () => {
        handlePauseTimer();
        setExit(true);
        setTimeout(() => {
            dispatch(removeNotification(id));
        }, 400);
    };

    return (
        <div
            className={cn(styles.notification, {
                [styles.success]: type === 'success',
                [styles.error]: type === 'error',
            })}
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleStartTimer}
        >
            <p>{message}</p>
            <div
                className={cn(styles.bar, {
                    [styles.successBar]: type === 'success',
                    [styles.errorBar]: type === 'error',
                    [styles.exit]: exit,
                })}
                style={{ width: `${width}%` }}
            />
        </div>
    );
};
