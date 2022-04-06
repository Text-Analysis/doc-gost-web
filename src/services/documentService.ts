import Api from '../api';
import {
    ICreateDocumentProps,
    IKeywordsTypeOne,
    IUpdateDocumentProps,
    Mode,
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

    public getKeywords(id: string, mode: Mode) {
        if (mode === 'combine' || mode === 'tf_idf') {
            return this.get<IKeywordsTypeOne>(
                `/specifications/${id}/keywords?mode=${mode}`
            );
        }
        return this.get<string[]>(
            `/specifications/${id}/keywords?mode=${mode}`
        );
    }
}

export default new DocumentService();
