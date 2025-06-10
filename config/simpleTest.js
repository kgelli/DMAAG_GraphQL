const { DataSource } = require('typeorm');

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres', // Update with your actual password
    database: 'west_dmaag',
    schema: 'DMAAG',
    synchronize: false,
    logging: true,
    // Remove entities for now
    entities: []
});

async function testConnection() {
    try {
        await AppDataSource.initialize();
        console.log('✅ Connection to PostgreSQL database has been established successfully.');
        
        // Test basic query
        const result = await AppDataSource.query('SELECT NOW() as current_time');
        console.log('Current time:', result[0].current_time);
        
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error.message);
    } finally {
        await AppDataSource.destroy();
    }
}

testConnection();