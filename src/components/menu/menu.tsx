import React from 'react';
import styles from './menu.module.scss';
import Action from './action';
import { IMenu } from './menuProps';
import Logo from '../../assets/logo.svg';
import Edit from '../../assets/edit.svg';
import Create from '../../assets/create.svg';
import Recognition from '../../assets/recognition.svg';
import Keywords from '../../assets/keywords.svg';
import Settings from '../../assets/settings.svg';

export const Menu: React.FC<IMenu> = ({ activeSection, setSection }) => {
    return (
        <header className={styles.menu}>
            <section className={styles.titleBlock}>
                <img alt={'logo'} src={Logo} />
                <span className={styles.title}>TAS</span>
            </section>
            <section className={styles.actions}>
                <Action
                    active={activeSection === 0}
                    onClick={() => setSection(0)}
                >
                    <img alt={'logo'} src={Edit} />
                    <span>Редактирование документа</span>
                </Action>
                <Action
                    active={activeSection === 1}
                    onClick={() => setSection(1)}
                >
                    <img alt={'logo'} src={Create} />
                    <span>Создание документа</span>
                </Action>
                <Action
                    active={activeSection === 2}
                    onClick={() => setSection(2)}
                >
                    <img alt={'logo'} src={Recognition} />
                    <span>Распознавание документа</span>
                </Action>
                <Action
                    active={activeSection === 3}
                    onClick={() => setSection(3)}
                >
                    <img alt={'logo'} src={Keywords} />
                    <span>Ключевые слова</span>
                </Action>
                <Action
                    active={activeSection === 4}
                    onClick={() => setSection(4)}
                >
                    <img alt={'logo'} src={Settings} />
                    <span>Настройки сервиса</span>
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
