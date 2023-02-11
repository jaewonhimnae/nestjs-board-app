"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config = require("config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const serverConfig = config.get('server');
    const port = serverConfig.port;
    await app.listen(port);
    common_1.Logger.log(`Application running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map