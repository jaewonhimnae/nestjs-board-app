import { Board } from "src/boards/board.entity";
import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    boards: Board[];
}
