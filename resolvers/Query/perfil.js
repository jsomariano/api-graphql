import knex from '../../config/knex';

module.exports = {
    perfis() {
        return knex('perfis');
    },
    perfil(_, { filtro }) {
        if (!filtro) return null;

        const { id, nome } = filtro;

        if (id) {
            return knex('perfis')
                .where({ id })
                .first();
        } if (nome) {
            return knex('perfis')
                .where({ nome })
                .first();
        }
        return null;
    },
};
