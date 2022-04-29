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
        return this.get<RequestDocuments>('/documents');
    }

    public getDocument(id: string) {
        return this.get<IDocumentFull>(`/documents/${id}`);
    }

    public updateDocument(id: string, obj: IData[]) {
        return this.put<string, IUpdateDocumentProps>(`/documents/${id}`, {
            structure: obj,
        });
    }

    public createDocument(name: string, obj: IData[]) {
        return this.post<string, ICreateDocumentProps>('/documents', {
            name: name,
            structure: obj,
        });
    }

    public getTemplate(id: string) {
        return this.get<IDocumentFull>(`/templates/${id}`);
    }

    public parseDocument(file: File) {
        const formData = new FormData();
        formData.set('file', file);
        return this.post<IData[], FormData>('/files', formData);
    }

    public getSections(id: string) {
        return this.get<string[]>(`sections/${id}`);
    }

    public getKeywords(id: string, mode: Mode, section = '') {
        if (mode === 'combine' || mode === 'tf_idf') {
            if (section) {
                return this.get<IKeywordsTypeOne>(
                    `/documents/${id}/keywords?mode=${mode}&section_name=${section}`
                );
            }
            return this.get<IKeywordsTypeOne>(
                `/documents/${id}/keywords?mode=${mode}`
            );
        }
        if (section) {
            return this.get<string[]>(
                `/documents/${id}/keywords?mode=${mode}&section_name=${section}`
            );
        }
        return this.get<string[]>(`/documents/${id}/keywords?mode=${mode}`);
    }
}

export default new DocumentService();
