import Api from '../api';

class BaseService extends Api {
    public changeConnection(uri: string) {
        return this.put<string, undefined>(`/db?uri=${uri}`);
    }
}

export default new BaseService();
