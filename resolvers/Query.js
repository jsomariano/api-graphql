import { usuarios, perfis } from '../data/db'

module.exports = {
    ola() {
        return "Hello World"
    },
    hora_certa() {
        return new Date()
    },
    usuario_logado() {
        return {
            id: 1,
            nome: "Junior Santos",
            email: "junior_santos@outlook.com",
            idade: 23,
            salario_real: (Math.random() * 1000).toFixed(2),
            vip: true
        }
    },
    produto_em_destaque() {
        return {
            nome: "Coca Cola",
            preco: 10,
            desconto: 0.2
        }
    },
    numeros_mega_sena() {
        const ordernaCrecentemente = (a, b) => (a - b)
        const removeItemsDuplicados = (item, index, array) => { return array.indexOf(item) == index }
        return Array(6)
            .fill(0)
            .map(() => parseInt(Math.random() * 60 + 1))
            .filter(removeItemsDuplicados)
            .sort(ordernaCrecentemente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, args) {
        const selecionados = usuarios.find(u => u.id === args.id)
        return selecionados ? selecionados : null
    },
    perfis() {
        return perfis
    },
    perfil(_, args) {
        const selecionados = perfis.find(({ id }) => id === args.id)
        return selecionados
    }
}