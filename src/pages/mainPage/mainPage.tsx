import React, { useState } from 'react';
import { CreateBlock, EditBlock, KeywordsBlock, Menu } from '../../components';
import styles from './mainPage.module.scss';
import { RecognitionBlock } from '../../components/recognitionBlock/recognitionBlock';

export const MainPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState<number>(0);

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
        }
    };
    return (
        <div className={styles.mainPage}>
            <Menu activeSection={activeSection} setSection={setActiveSection} />
            {changeBlock()}
        </div>
    );
};
