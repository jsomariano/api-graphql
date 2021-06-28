import knex from '../../config/knex';

module.exports = {
    usuarios(perfil) {
        return knex('usuarios')
            .join(
                'usuarios_perfis',
                'usuarios.id',
                'usuarios_perfis.usuario_id',
            )
            .where({ perfil_id: perfil.id });
    },
};
