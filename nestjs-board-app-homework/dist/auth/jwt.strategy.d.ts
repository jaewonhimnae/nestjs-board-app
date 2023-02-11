import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: any): Promise<User>;
}
export {};
