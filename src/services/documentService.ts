import Api from '../api';
import {
    ICreateDocumentProps,
    IKeywordsTypeOne,
    IUpdateDocumentProps,
    Mode,
    RequestEntities,
} from './serviceProps';
import { IDocument } from '../store/types/document';
import { IData } from '../store/types';

class DocumentService extends Api {
    public getDocuments() {
        return this.get<RequestEntities>('/documents');
    }

    public getDocument(id: string) {
        return this.get<IDocument>(`/documents/${id}`);
    }

    public updateDocument(
        id: string,
        structure?: IData[],
        keywords?: string[]
    ) {
        return this.patch<string, IUpdateDocumentProps>(`/documents/${id}`, {
            structure: structure,
            keywords: keywords,
        });
    }

    public createDocument(name: string, obj: IData[], templateId: string) {
        return this.post<string, ICreateDocumentProps>('/documents', {
            name: name,
            structure: obj,
            templateId,
        });
    }

    public deleteDocument(id: string) {
        return this.delete(`/documents/${id}`);
    }

    public parseDocument(file: File, templateId: string) {
        const formData = new FormData();
        formData.set('file', file);
        formData.set('template_id', templateId);
        return this.post<IData[], FormData>('/files', formData);
    }

    public getSections(id: string) {
        return this.get<string[]>(`/documents/${id}/sections`);
    }

    public getKeywords(id: string) {
        return this.get<string[]>(`/documents/${id}/keywords`);
    }

    public generationKeywords(id: string, mode: Mode, section = '') {
        if (mode === 'combine' || mode === 'tf_idf') {
            if (section) {
                return this.get<IKeywordsTypeOne>(
                    `/documents/${id}/keywords/generation?mode=${mode}&section_name=${section}`
                );
            }
            return this.get<IKeywordsTypeOne>(
                `/documents/${id}/keywords/generation?mode=${mode}`
            );
        }
        if (section) {
            return this.get<string[]>(
                `/documents/${id}/keywords/generation?mode=${mode}&section_name=${section}`
            );
        }
        return this.get<string[]>(
            `/documents/${id}/keywords/generation?mode=${mode}`
        );
    }
    public downloadDocument(id: string) {
        return this.get<BlobPart>(`/documents/${id}/download`, {
            responseType: 'blob',
        });
    }
}

export default new DocumentService();
