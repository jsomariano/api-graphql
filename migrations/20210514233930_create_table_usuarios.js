exports.up = function run(knex) {
    return knex.schema.createTable('usuarios', (table) => {
        table.increments('id')
            .primary();
        table.string('nome')
            .notNull();
        table.string('email')
            .notNull()
            .unique();
        table.string('senha', 60);
        table.boolean('ativo')
            .notNull()
            .defaultTo(true);
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now());
    });
};

exports.down = async function back(knex) {
    await knex.schema.dropTable('usuarios');
};
