let id = 1;

// eslint-disable-next-line no-return-assign
const proximoId = () => id += 1;

const perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'administrador' },
];

const usuarios = [
    {
        id: proximoId(),
        nome: 'Joao Silva',
        email: 'joao@email.com',
        idade: 22,
        perfil_id: 1,
        status: 'ATIVO',
    }, {
        id: proximoId(),
        nome: 'Maria da silva',
        email: 'maria@email.com',
        idade: 23,
        perfil_id: 2,
        status: 'INATIVO',
    }, {
        id: proximoId(),
        nome: 'Jose Silva',
        email: 'jose@email.com',
        idade: 44,
        perfil_id: 1,
        status: 'BLOQUEADO',
    },
];

module.exports = {
    perfis,
    usuarios,
    proximoId,
};
