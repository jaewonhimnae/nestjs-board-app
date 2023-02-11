"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
const config = require("config");
const dbConfig = config.get('db');
exports.typeORMConfig = {
    type: dbConfig.type,
    host: process.env.RDS_HOSTNAME || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.RDS_DB_NAME || dbConfig.database,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: dbConfig.synchronize
};
//# sourceMappingURL=typeorm.config.js.map