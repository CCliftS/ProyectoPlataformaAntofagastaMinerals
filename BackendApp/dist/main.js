"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const typeorm_1 = require("typeorm");
const factor_carga_service_1 = require("./modules/factor-carga/factor-carga.service");
async function bootstrap() {
    dotenv.config();
    await (0, typeorm_1.createConnection)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const factorCargaService = app.get(factor_carga_service_1.FactorCargaService);
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map