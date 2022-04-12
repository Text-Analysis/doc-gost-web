import React from 'react';
import styles from './menu.module.scss';
import Action from './action';
import { IMenu } from '../../types/components';

export const Menu: React.FC<IMenu> = ({ activeSection, setSection }) => {
    return (
        <div className={styles.menu}>
            <span className={styles.title}>SRS parser</span>
            <div className={styles.actions}>
                <Action
                    active={activeSection === 0}
                    onClick={() => setSection(0)}
                >
                    Редактирование документа
                </Action>
                <Action
                    active={activeSection === 1}
                    onClick={() => setSection(1)}
                >
                    Создание документа
                </Action>
                <Action
                    active={activeSection === 2}
                    onClick={() => setSection(2)}
                >
                    Распознавание документа
                </Action>
                <Action
                    active={activeSection === 3}
                    onClick={() => setSection(3)}
                >
                    Ключевые слова
                </Action>
            </div>
            <div className={styles.aboutProject}>
                <button
                    className={styles.aboutProject}
                    onClick={() => setSection(4)}
                >
                    О проекте
                </button>
            </div>
        </div>
    );
};
