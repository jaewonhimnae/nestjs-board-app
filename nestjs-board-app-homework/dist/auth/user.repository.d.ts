import { Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { User } from "./user.entity";
export declare class UserRepository extends Repository<User> {
    createUser(authCredentialsDto: AuthCredentialsDto): Promise<void>;
}
