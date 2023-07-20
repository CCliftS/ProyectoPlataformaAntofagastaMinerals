"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosPlanModule = void 0;
const common_1 = require("@nestjs/common");
const datos_plan_service_1 = require("./datos_plan.service");
const datos_plan_controller_1 = require("./datos_plan.controller");
const typeorm_1 = require("@nestjs/typeorm");
const datos_plan_entity_1 = require("../../entities/datos_plan.entity");
let DatosPlanModule = exports.DatosPlanModule = class DatosPlanModule {
};
exports.DatosPlanModule = DatosPlanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([datos_plan_entity_1.DatosPlan])],
        controllers: [datos_plan_controller_1.DatosPlanController],
        providers: [datos_plan_service_1.DatosPlanService],
        exports: [datos_plan_service_1.DatosPlanService]
    })
], DatosPlanModule);
//# sourceMappingURL=datos_plan.module.js.map