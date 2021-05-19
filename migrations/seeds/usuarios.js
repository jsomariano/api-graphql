exports.seed = async function seed(knex) {
    // Deletes ALL existing entries
    await knex('usuarios').del();

    await knex('usuarios')
        .insert([
            { nome: 'João Show', email: 'jshow@empresa.com.br', senha: '12345678' },
            { nome: 'Jaime Lannister', email: 'jlann@empresa.com.br', senha: '12345678' },
            { nome: 'Gabriela T. Nunes', email: 'gtnunes@empresa.com.br', senha: '12345678' },
        ]);
};
