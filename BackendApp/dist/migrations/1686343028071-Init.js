"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1686343028071 = void 0;
const axios_1 = require("axios");
const user_entity_1 = require("../entities/user.entity");
class Init1686343028071 {
    constructor(userService) {
        this.userService = userService;
        this.name = 'Init1686343028071';
    }
    async up(queryRunner) {
        const infoDataFrontend = await axios_1.default.post('').then(response => response.data);
        const newUser = new user_entity_1.User();
        newUser.correo = infoDataFrontend.correo;
        newUser.password = infoDataFrontend.password;
        newUser.admin = infoDataFrontend.admin;
        await this.userService.create(newUser);
        try {
            await queryRunner.manager.save(newUser);
        }
        catch (error) {
            console.error('Error al guardar el nuevo usuario', error);
            throw error;
        }
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" text`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_d3cf8c651c0e94ea522b61ca3ac"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "correo"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "correo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("correo")`);
    }
}
exports.Init1686343028071 = Init1686343028071;
//# sourceMappingURL=1686343028071-Init.js.map