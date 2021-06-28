import knex from '../../config/knex';
import { perfil as obterPerfil } from '../Query/perfil';
import { usuario as obterUsuario } from '../Query/usuario';

module.exports = {
    async novoUsuario(_, { dados }) {
        try {
            const perfisIds = [];

            if (dados.perfis) {
                dados.perfis.forEach(async (filtro) => {
                    const perfil = await obterPerfil(_, {
                        filtro,
                    });
                    if (perfil) perfisIds.push(perfil.id);
                });
            }

            const values = {
                ...dados,
                perfis: undefined,
            };

            const [id] = await knex('usuarios')
                .insert({ values });

            perfisIds.forEach(async (perfilId) => {
                await knex('usuarios_perfis')
                    .insert({ perfilId, usuario_id: id });
            });

            return knex('usuarios')
                .where({ id }).first();
        } catch (e) {
            throw new Error(e.sqlMessage);
        }
    },
    async excluirUsuario(_, args) {
        try {
            const usuario = await obterUsuario(_, args);

            if (usuario) {
                const { id } = usuario;
                await knex('usuarios_perfis')
                    .where({ usuario_id: id }).delete();
                await knex('usuarios')
                    .where({ id }).delete();
            }

            return usuario;
        } catch (e) {
            throw new Error(e.sqlMessage);
        }
    },
    async alterarUsuario(_, { filtro, dados }) {
        try {
            const usuario = await obterUsuario(_, { filtro });

            if (usuario) {
                const { id } = usuario;

                if (dados.perfis) {
                    await knex('usuarios_perfis')
                        .where({ usuario_id: id }).delete();

                    dados.perfis.forEach(async (perfilFiltro) => {
                        const perfil = await obterPerfil(_, {
                            filtro: perfilFiltro,
                        });

                        if (perfil) {
                            await knex('usuarios_perfis')
                                .insert({
                                    perfil_id: perfil.id,
                                    usuario_id: id,
                                });
                        }
                    });
                }

                const values = {
                    ...dados,
                    perfis: undefined,
                };

                await knex('usuarios')
                    .where({ id })
                    .update(values);
            }
            return !usuario ? null : { ...usuario, ...dados };
        } catch (e) {
            throw new Error(e);
        }
    },
};
