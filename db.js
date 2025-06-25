// db.js
const { DataSource } = require('typeorm');

const AppDataSource = new DataSource({
  type: process.env.DB_TYPE || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'west_dmaag',
  schema: process.env.DB_SCHEMA || 'DMAAG',
  synchronize: process.env.DB_SYNCHRONIZE === 'true' || false,
  logging: process.env.DB_LOGGING === 'true' || false,
  entities: [
    require('./models/GsuTable'),
    require('./models/TroyTable')
  ]
});

module.exports = { AppDataSource };