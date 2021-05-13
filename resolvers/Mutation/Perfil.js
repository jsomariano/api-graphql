import { perfis, proximoId } from '../../data/db';

const indicePerfil = (filtro) => {
    if (!filtro) return -1;

    const {
        id, nome,
    } = filtro;

    if (id) {
        return perfis
            .findIndex((perfilCadastrado) => perfilCadastrado.id === id);
    }

    if (nome) {
        return perfis
            .findIndex((perfilCadastrado) => perfilCadastrado.nome === nome);
    }

    return -1;
};

module.exports = {
    novoPerfil(_, { dados }) {
        const nomeExistente = perfis
            .some((perfilCadastrado) => perfilCadastrado.nome === dados.nome);

        if (nomeExistente) throw new Error('Perfil cadastrado');

        const novo = {
            ...dados,
            id: proximoId(),
        };

        perfis.push(novo);
        return novo;
    },
    excluirPerfil(_, { filtro }) {
        const index = indicePerfil(filtro);

        if (index < 0) return null;

        const excluidos = perfis.splice(index, 1);
        return excluidos[0] || null;
    },
    alterarPerfil(_, { filtro, dados }) {
        const index = indicePerfil(filtro);

        if (index < 0) return null;

        perfis[index].nome = dados.nome;

        return perfis[index];
    },
};
