import Api from '../api';

class BaseService extends Api {
    public changeConnection(uri: string) {
        return this.put<string, undefined>(`/db?uri=${uri}&dev_mode=true`);
    }
}

export default new BaseService();
