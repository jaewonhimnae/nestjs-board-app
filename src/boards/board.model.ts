export interface Board {
    id: string;
    title: string;
    description: string;
    status: BoardStatus
}

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}