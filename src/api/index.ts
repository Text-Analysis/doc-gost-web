import axios from 'axios';

export interface IData {
    section_name: string;
    text?: string;
    sub_sections?: IData[];
}

export const getData = () => {
    return axios.get<IData[]>('http://localhost:3000/sections');
};
