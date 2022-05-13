import Api from '../api';
import { ITemplate } from '../store/types/template';
import { ICreateTemplateProps, RequestEntities } from './serviceProps';
import { IData } from '../store/types';

class TemplateService extends Api {
    public getTemplate(id: string) {
        return this.get<ITemplate>(`/templates/${id}`);
    }
    public getTemplates() {
        return this.get<RequestEntities>('/templates/');
    }
    public createTemplate(name: string, structure: IData[]) {
        return this.post<string, ICreateTemplateProps>('/templates/', {
            name: name,
            structure: structure,
        });
    }
    public deleteTemplate(id: string) {
        return this.delete(`/templates/${id}`);
    }
}

export default new TemplateService();
