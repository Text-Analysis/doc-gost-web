import React, { useState } from 'react';
import { EditBlock, Menu } from '../../components';
import styles from './mainPage.module.scss';

export const MainPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState<number>(0);

    const changeBlock = () => {
        switch (activeSection) {
            case 0:
                return <EditBlock />;
        }
    };
    return (
        <div className={styles.mainPage}>
            <Menu activeSection={activeSection} setSection={setActiveSection} />
            {changeBlock()}
        </div>
    );
};
