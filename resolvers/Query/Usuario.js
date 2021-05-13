import { usuarios } from '../../data/db';

module.exports = {
    usuarios() {
        return usuarios;
    },
    usuario(_, args) {
        const selecionados = usuarios.find((u) => u.id === args.id);
        return selecionados || null;
    },
};
