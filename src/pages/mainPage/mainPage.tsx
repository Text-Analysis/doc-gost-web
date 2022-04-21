import React, { useState } from 'react';
import {
    CreateBlock,
    EditBlock,
    KeywordsBlock,
    Menu,
    RecognitionBlock,
} from '../../components';
import styles from './mainPage.module.scss';
import { AboutBlock } from '../../components/aboutBlock/aboutBlock';

export const MainPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState<number>(4);

    const changeBlock = () => {
        switch (activeSection) {
            case 0:
                return <EditBlock />;
            case 1:
                return <CreateBlock />;
            case 2:
                return <RecognitionBlock />;
            case 3:
                return <KeywordsBlock />;
            case 4:
                return <AboutBlock />;
        }
    };
    return (
        <div className={styles.mainPage}>
            <Menu activeSection={activeSection} setSection={setActiveSection} />
            {changeBlock()}
        </div>
    );
};
