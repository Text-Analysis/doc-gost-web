import axios from 'axios';
import { IData, IDocumentFull } from '../types/actions/document';
import { RequestDocuments } from '../types/api';

const instanceApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

export const getDocuments = () => {
    return instanceApi.get<RequestDocuments>('/specifications');
};

export const getDocument = (id: string) => {
    return instanceApi.get<IDocumentFull>(`/specifications/${id}`);
};

export const getData = () => {
    return axios.get<IData[]>('http://localhost:3000/sections');
};
