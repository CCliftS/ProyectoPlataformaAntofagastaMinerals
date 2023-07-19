"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVisitaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_visita_dto_1 = require("./create-visita.dto");
class UpdateVisitaDto extends (0, mapped_types_1.PartialType)(create_visita_dto_1.CreateVisitaDto) {
}
exports.UpdateVisitaDto = UpdateVisitaDto;
//# sourceMappingURL=update-visita.dto.js.map