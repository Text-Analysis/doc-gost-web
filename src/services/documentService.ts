import Api from '../api';
import {
    ICreateDocumentProps,
    IUpdateDocumentProps,
    RequestDocuments,
} from '../types/api';
import { IData, IDocumentFull } from '../types/actions/document';

class DocumentService extends Api {
    public getDocuments() {
        return this.get<RequestDocuments>('/specifications');
    }

    public getDocument(id: string) {
        return this.get<IDocumentFull>(`/specifications/${id}`);
    }

    public updateDocument(id: string, obj: IData[]) {
        return this.put<string, IUpdateDocumentProps>(`/specifications/${id}`, {
            structure: obj,
        });
    }

    public createDocument(name: string, obj: IData[]) {
        return this.post<string, ICreateDocumentProps>('/specifications/', {
            name: name,
            structure: obj,
        });
    }

    public getTemplate(id: string) {
        return this.get<IDocumentFull>(`/templates/${id}`);
    }

    public uploadDocument(filename: string, file: File) {
        const formData = new FormData();
        formData.set('filename', filename);
        formData.set('file', file);
        return this.post<string, FormData>('/file', formData);
    }
}

export default new DocumentService();
