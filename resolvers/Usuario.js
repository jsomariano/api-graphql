import { perfis } from '../data/db'

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const selecionado = perfis.find(({ id }) => id === usuario.perfil_id)
        return selecionado
    }
}