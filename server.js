import { fastify } from 'fastify'
import { pool } from './db.js';

const server = fastify();

server.get('/', () => {
    return ('Servidor Rodando.')
});

server.get('/pastel', async () => {
    const result = await pool.query('SELECT * FROM pastel');
    return {
        message: 'retornou pasteu!',
        result: result.rows, 
    };
});


server.listen({
    port: 3000,
});

