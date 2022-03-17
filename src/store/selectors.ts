import { RootState } from './reducers';

export const documentSelector = (state: RootState) => state.document;
export const documentTitlesSelector = (state: RootState) =>
    state.documentTitles;
