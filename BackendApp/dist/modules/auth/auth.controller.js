"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const auth_service_1 = require("./auth.service");
const user_login_dto_1 = require("./dto/user-login.dto");
const mailer_service_1 = require("../../mailer/mailer.service");
const crypto_1 = require("crypto");
const users_service_1 = require("../users/users.service");
let AuthController = exports.AuthController = class AuthController {
    constructor(authService, mailerService, usersService) {
        this.authService = authService;
        this.mailerService = mailerService;
        this.usersService = usersService;
    }
    async login(userLoginDto) {
        return await this.authService.login(userLoginDto);
    }
    async sendTemporaryPassword(correo) {
        const temporaryPassword = generateRandomPassword();
        const dataUser = {
            correo: correo,
            password: temporaryPassword,
            admin: false,
        };
        await this.usersService.create(dataUser);
        await this.mailerService.sendTemporaryPassword(correo, temporaryPassword);
        return { message: 'Contraseña temporal enviada correctamente' };
    }
};
__decorate([
    (0, decorators_1.Post)('login'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, decorators_1.Post)('password'),
    __param(0, (0, decorators_1.Body)('correo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendTemporaryPassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        mailer_service_1.MailerService,
        users_service_1.UsersService])
], AuthController);
function generateRandomPassword(length = 10) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const randomBytesCount = Math.ceil((length * 6) / 8);
    const randomBytesBuffer = (0, crypto_1.randomBytes)(randomBytesCount);
    const passwordArray = [];
    for (let i = 0; i < randomBytesCount; i++) {
        const byte = randomBytesBuffer.readUInt8(i);
        const charIndex = byte % charset.length;
        passwordArray.push(charset[charIndex]);
    }
    return passwordArray.join('');
}
//# sourceMappingURL=auth.controller.js.map