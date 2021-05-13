import { perfis } from '../../data/db';

module.exports = {
    perfis() {
        return perfis;
    },
    perfil(_, args) {
        const selecionados = perfis.find(({ id }) => id === args.id);
        return selecionados;
    },
};
