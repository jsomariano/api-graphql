require('dotenv/config');

module.exports = {
    client: 'mysql2',
    connection: {
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations',
        stub: 'migrations/template/template.js',
    },
    seeds: {
        directory: 'migrations/seeds/',
    },
};
