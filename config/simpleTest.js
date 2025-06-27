// Load environment variables
require('dotenv').config();

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
    logging: process.env.DB_LOGGING === 'true' || true,
    // Remove entities for now
    entities: []
});

async function testConnection() {
    try {
        await AppDataSource.initialize();
        console.log('Connection to PostgreSQL database has been established successfully.');
        
        // Test basic query
        const result = await AppDataSource.query('SELECT NOW() as current_time');
        console.log('Current time:', result[0].current_time);
        
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    } finally {
        await AppDataSource.destroy();
    }
}

testConnection();