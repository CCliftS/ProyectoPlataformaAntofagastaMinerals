"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RajoModule = void 0;
const common_1 = require("@nestjs/common");
const rajo_service_1 = require("./rajo.service");
const rajo_controller_1 = require("./rajo.controller");
const typeorm_1 = require("@nestjs/typeorm");
const rajo_entity_1 = require("../../entities/rajo.entity");
let RajoModule = exports.RajoModule = class RajoModule {
};
exports.RajoModule = RajoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([rajo_entity_1.Rajo])],
        controllers: [rajo_controller_1.RajoController],
        providers: [rajo_service_1.RajoService],
        exports: [rajo_service_1.RajoService]
    })
], RajoModule);
//# sourceMappingURL=rajo.module.js.map