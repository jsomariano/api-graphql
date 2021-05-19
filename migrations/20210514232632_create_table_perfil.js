const { PERFIL_ROTULOS } = require('./enums');

exports.up = async function run(knex) {
    await knex.schema.createTable('perfis', (table) => {
        table.increments('id').primary();
        table.string('nome').notNull().unique();
        table.enum('rotulo', PERFIL_ROTULOS).notNull();
    });
};

exports.down = async function back(knex) {
    await knex.schema.dropTable('perfis');
};
