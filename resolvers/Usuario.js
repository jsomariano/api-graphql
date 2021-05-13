import { perfis } from '../data/db';

module.exports = {
    perfil(usuario) {
        const selecionado = perfis.find(({ id }) => id === usuario.perfil_id);
        return selecionado;
    },
};
