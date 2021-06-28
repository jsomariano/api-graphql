exports.seed = async function seed(knex) {
    // Deletes ALL existing entries
    await knex('usuarios_perfis').del();

    // Inserts seed entries
    await knex('usuarios_perfis').insert([
        { usuario_id: 1, perfil_id: 2 },
        { usuario_id: 1, perfil_id: 3 },
        { usuario_id: 2, perfil_id: 2 },
        { usuario_id: 3, perfil_id: 1 },
    ]);
};
