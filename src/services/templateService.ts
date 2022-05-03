import Api from '../api';
import { ITemplate } from '../store/types/template';
import { RequestEntities } from './serviceProps';

class TemplateService extends Api {
    public getTemplate(id: string) {
        return this.get<ITemplate>(`/templates/${id}`);
    }
    public getTemplates() {
        return this.get<RequestEntities>('/templates/');
    }
}

export default new TemplateService();
