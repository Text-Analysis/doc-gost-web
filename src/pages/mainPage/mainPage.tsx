import React, { useEffect, useState } from 'react';
import { getData, IData } from '../../api';
import { Menu, LayoutTree } from '../../components';
import styles from './mainPage.module.scss';

export const MainPage: React.FC = () => {
    const [data, setData] = useState<IData[]>([]);
    const [activeSection, setActiveSection] = useState<number>(0);
    useEffect(() => {
        getData()
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className={styles.mainPage}>
            <Menu activeSection={activeSection} setSection={setActiveSection} />
            {data.length !== 0 && <LayoutTree data={data} />}
        </div>
    );
};
