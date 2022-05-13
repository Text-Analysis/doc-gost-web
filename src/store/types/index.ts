export interface IData {
    name: string;
    text?: string;
    children?: IData[];
}

export interface IEntity {
    id: string;
    name: string;
}
