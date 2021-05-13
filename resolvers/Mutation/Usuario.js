import { usuarios, proximoId } from '../../data/db';

const indiceUsuario = (filtro) => {
    if (!filtro) return -1;

    const {
        id, email,
    } = filtro;

    if (id) {
        return usuarios
            .findIndex((usuarioCadastrado) => usuarioCadastrado.id === id);
    }

    if (email) {
        return usuarios
            .findIndex((usuarioCadastrado) => usuarioCadastrado.email === email);
    }

    return -1;
};

module.exports = {
    novoUsuario(_, { dados }) {
        const emailExitente = usuarios
            .some((usuarioCadastrado) => usuarioCadastrado.email === dados.email);

        if (emailExitente) throw new Error('E-mail cadastrado');

        const novo = {
            ...dados,
            id: proximoId(),
            perfil_id: 1,
            status: 'ATIVO',
        };

        usuarios.push(novo);
        return novo;
    },
    excluirUsuario(_, { filtro }) {
        const index = indiceUsuario(filtro);

        if (index < 0) return null;

        const excluidos = usuarios.splice(index, 1);
        return excluidos[0] || null;
    },
    alterarUsuario(_, { filtro, dados }) {
        const index = indiceUsuario(filtro);

        if (index < 0) return null;

        usuarios[index].nome = dados.nome;
        usuarios[index].email = dados.email;

        if (dados.idade) {
            usuarios[index].idade = dados.idade;
        }

        return usuarios[index];
    },
};
