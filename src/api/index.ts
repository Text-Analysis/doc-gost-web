import axios from 'axios';

export interface IData {
    name: string;
    text?: string;
    children?: IData[];
}

export const getData = () => {
    return axios.get<IData[]>('http://localhost:3000/sections');
};
