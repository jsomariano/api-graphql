import knex from '../../config/knex';
import { perfil as obterPerfil } from '../Query/perfil';

module.exports = {
    async novoPerfil(_, { dados }) {
        try {
            const [id] = await knex('perfis')
                .insert(dados);

            return knex('perfis')
                .where({ id }).first();
        } catch (e) {
            throw new Error(e.sqlMessage);
        }
    },
    async excluirPerfil(_, args) {
        try {
            const perfil = await obterPerfil(_, args);

            if (perfil) {
                const { id } = perfil;

                await knex('usuarios_perfis')
                    .where({ perfil_id: id }).delete();

                await knex('perfis')
                    .where({ id }).delete();
            }

            return perfil;
        } catch (e) {
            throw new Error(e.sqlMessage);
        }
    },
    async alterarPerfil(_, { filtro, dados }) {
        try {
            const perfil = await obterPerfil(_, { filtro });

            if (perfil) {
                const { id } = perfil;
                await knex('perfis')
                    .where({ id })
                    .update(dados);
            }

            return { ...perfil, ...dados };
        } catch (e) {
            throw new Error(e.sqlMessage);
        }
    },
};
