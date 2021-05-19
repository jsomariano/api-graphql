import knex from '../../config/knex';

module.exports = {
    usuarios() {
        return knex('usuarios');
    },
    usuario(_, { filtro }) {
        if (!filtro) return null;

        const { id, email } = filtro;

        if (id) {
            return knex('usuarios')
                .where({ id })
                .first();
        } if (email) {
            return knex('usuarios')
                .where({ email })
                .first();
        }
        return null;
    },
};
