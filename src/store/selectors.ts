import { RootState } from './reducers';

export const documentSelector = (state: RootState) => state.document;
export const templateSelector = (state: RootState) => state.template;
