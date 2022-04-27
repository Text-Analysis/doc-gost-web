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
        return this.get<RequestDocuments>('/specification/');
    }

    public getDocument(id: string) {
        return this.get<IDocumentFull>(`/specification/${id}`);
    }

    public updateDocument(id: string, obj: IData[]) {
        return this.put<string, IUpdateDocumentProps>(`/specification/${id}`, {
            structure: obj,
        });
    }

    public createDocument(name: string, obj: IData[]) {
        return this.post<string, ICreateDocumentProps>('/specification/', {
            name: name,
            structure: obj,
        });
    }

    public getTemplate(id: string) {
        return this.get<IDocumentFull>(`/template/${id}`);
    }

    public parseDocument(file: File) {
        const formData = new FormData();
        formData.set('file', file);
        return this.post<IData[], FormData>('/file/', formData);
    }

    public getSections(id: string) {
        return this.get<string[]>(`section/${id}`);
    }

    public getKeywords(id: string, mode: Mode, section = '') {
        if (mode === 'combine' || mode === 'tf_idf') {
            if (section) {
                return this.get<IKeywordsTypeOne>(
                    `/specification/${id}/keywords?mode=${mode}&section=${section}`
                );
            }
            return this.get<IKeywordsTypeOne>(
                `/specification/${id}/keywords?mode=${mode}`
            );
        }
        if (section) {
            return this.get<string[]>(
                `/specification/${id}/keywords?mode=${mode}&section=${section}`
            );
        }
        return this.get<string[]>(`/specification/${id}/keywords?mode=${mode}`);
    }
}

export default new DocumentService();
