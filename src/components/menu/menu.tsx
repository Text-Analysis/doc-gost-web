import React from 'react';
import styles from './menu.module.scss';
import Action from './action';
import { IMenu } from './menuProps';

export const Menu: React.FC<IMenu> = ({ activeSection, setSection }) => {
    return (
        <header className={styles.menu}>
            <span className={styles.title}>TAS</span>
            <section className={styles.actions}>
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
                <Action
                    active={activeSection === 4}
                    onClick={() => setSection(4)}
                >
                    Настройки сервиса
                </Action>
            </section>
            <section className={styles.aboutProject}>
                <button
                    className={styles.aboutProject}
                    onClick={() => setSection(5)}
                >
                    О проекте
                </button>
            </section>
        </header>
    );
};
