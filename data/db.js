const perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'administrador' }
]

const usuarios = [
    {
        id: 1,
        nome: "Joao Silva",
        email: "jsilva@zemail.com",
        idade: 22,
        perfil_id: 1,
        status: "ATIVO"
    }, {
        id: 2,
        nome: "Maria da silva",
        email: "Msilva@zemail.com",
        idade: 23,
        perfil_id: 2,
        status: "INATIVO"
    }, {
        id: 3,
        nome: "Jose Silva",
        email: "josilva@zemail.com",
        idade: 44,
        perfil_id: 1,
        status: "BLOQUEADO"
    }
]

module.exports = { perfis, usuarios }