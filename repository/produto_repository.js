const { Client } = require('pg')
const conexao = {
    user: 'postgres',
    host: 'localhost',
    database: 'cantina',
    password: 'dorgas784',
    port: 5432,
};

// Ler
exports.listar = () => {
    const client = new Client(conexao)
    client.connect();
    const resultado = client.query('SELECT * from produtos');
    console.log("Resultado: " + JSON.stringify(resultado))
    client.end();
    return (resultado.rows);

    try {
        const res = await client.query(sql)
        console.log(res.rows[0])
        console.log(res.rows[1])
            // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    } catch (err) {
        console.log(err.stack)
    }
    client.end()
}

// Ler por ID
exports.buscarPorId = (id) => {
    const client = new Client(conexao)
    await client.connect()
    const res = await client.query('SELECT * FROM produtos WHERE id=$1')
    console.log(res.rows[0].message) // Hello world!
    console.log(res.rows[1].message)
    await client.end()
}

// Inserir
exports.inserir = (produto) => {
    const client = new Client(conexao)
    await client.connect()
    const res = await client.query('INSERT INTO produtos(nome, preco) VALUES ($1, $2) RETURNING *')
    console.log(res.rows[0].message) // Hello world!
    console.log(res.rows[1].message)
    await client.end()
}

// Deletar
exports.deletar = (id) => {
    const client = new Client(conexao)
    await client.connect()
    const res = await client.query('DELETE FROM produtos WHERE id=$1 RETURNING *')
    console.log(res.rows[0].message) // Hello world!
    console.log(res.rows[1].message)
    await client.end()
}

// Update
exports.atualizar = (id, produto) => {
    const client = new Client(conexao)
    await client.connect()
    const res = await client.query('UPDATE produtos SET nome=$1, preco=$2 WHERE id=$3 RETURNING *')
    console.log(res.rows[0].message) // Hello world!
    console.log(res.rows[1].message)
    await client.end()
}