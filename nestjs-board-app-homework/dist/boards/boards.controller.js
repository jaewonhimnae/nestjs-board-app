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
exports.BoardsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const user_entity_1 = require("../auth/user.entity");
const board_status_enum_1 = require("./board-status.enum");
const boards_service_1 = require("./boards.service");
const create_board_dto_1 = require("./dto/create-board.dto");
const board_status_validation_pipe_1 = require("./pipes/board-status-validation.pipe");
let BoardsController = class BoardsController {
    constructor(boardsService) {
        this.boardsService = boardsService;
        this.logger = new common_1.Logger('Boards');
    }
    getAllBoard(user) {
        this.logger.verbose(`User ${user.username} trying to get all boards`);
        return this.boardsService.getAllBoards(user);
    }
    createBoard(createBoardDto, user) {
        this.logger.verbose(`User ${user.username} creating a new board. 
        Payload: ${JSON.stringify(createBoardDto)} `);
        return this.boardsService.createBoard(createBoardDto, user);
    }
    getBoardById(id) {
        return this.boardsService.getBoardById(id);
    }
    deleteBoard(id, user) {
        return this.boardsService.deleteBoard(id, user);
    }
    updateBoardStatus(id, status) {
        return this.boardsService.updateBoardStatus(id, status);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getAllBoard", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_board_dto_1.CreateBoardDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "createBoard", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getBoardById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "deleteBoard", null);
__decorate([
    (0, common_1.Patch)('/:id/status'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('status', board_status_validation_pipe_1.BoardStatusValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], BoardsController.prototype, "updateBoardStatus", null);
BoardsController = __decorate([
    (0, common_1.Controller)('boards'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [boards_service_1.BoardsService])
], BoardsController);
exports.BoardsController = BoardsController;
//# sourceMappingURL=boards.controller.js.map