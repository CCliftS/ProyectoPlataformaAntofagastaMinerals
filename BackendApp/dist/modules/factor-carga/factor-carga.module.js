"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactorCargaModule = void 0;
const common_1 = require("@nestjs/common");
const factor_carga_service_1 = require("./factor-carga.service");
const factor_carga_controller_1 = require("./factor-carga.controller");
const typeorm_1 = require("@nestjs/typeorm");
const factor_carga_entity_1 = require("../../entities/factor-carga.entity");
let FactorCargaModule = exports.FactorCargaModule = class FactorCargaModule {
};
exports.FactorCargaModule = FactorCargaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([factor_carga_entity_1.FactorCarga])
        ],
        controllers: [factor_carga_controller_1.FactorCargaController],
        providers: [factor_carga_service_1.FactorCargaService],
        exports: [factor_carga_service_1.FactorCargaService]
    })
], FactorCargaModule);
//# sourceMappingURL=factor-carga.module.js.map