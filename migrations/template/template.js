exports.up = function run(knex) {
    return knex.schema.createTable('table', (table) => {
        table.increments('incremental_id');
        table.string('campo_string');
        table.boolean('situacao').defaultTo(true);
        table.timestamps('criado_em');
    });
};

exports.down = function back(knex) {
    knex.schema.dropTable('table');
};
