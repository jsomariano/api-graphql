import knex from '../../config/knex';

module.exports = {
    perfis(usuario) {
        return knex('perfis')
            .join(
                'usuarios_perfis',
                'perfis.id',
                'usuarios_perfis.perfil_id',
            )
            .where({ usuario_id: usuario.id });
    },
};
