exports.up = function run(knex) {
    return knex.schema.createTable('usuarios_perfis', (table) => {
        table.integer('usuario_id').unsigned();
        table.integer('perfil_id').unsigned();
        table.foreign('usuario_id').references('usuarios.id');
        table.foreign('perfil_id').references('perfis.id');
        table.primary(['usuario_id', 'perfil_id']);
    });
};

exports.down = async function back(knex) {
    await knex.schema.dropTable('usuarios_perfis');
};
