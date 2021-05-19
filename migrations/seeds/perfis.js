const { PERFIL_ROTULOS } = require('../enums');

exports.seed = async function seed(knex) {
    // Deletes ALL existing entries
    await knex('perfis').del();

    await knex('perfis')
        .insert([
            { nome: 'comum', rotulo: PERFIL_ROTULOS.find((rotulo) => rotulo === 'COMUM') },
            { nome: 'admin', rotulo: PERFIL_ROTULOS.find((rotulo) => rotulo === 'ADMINISTRADOR') },
            { nome: 'master', rotulo: PERFIL_ROTULOS.find((rotulo) => rotulo === 'MASTER') },
        ]);
};
