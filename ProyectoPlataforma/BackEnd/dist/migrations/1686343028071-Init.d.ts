import { MigrationInterface, QueryRunner } from "typeorm";
import { UsersService } from "src/modules/users/users.service";
export declare class Init1686343028071 implements MigrationInterface {
    private readonly userService;
    constructor(userService: UsersService);
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
