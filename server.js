import Fastify from 'fastify';

const fastify = Fastify({
    logger: true
});


fastify.get('/', (request, reply) => {
    return { message: 'Oi! chamado a partir da raiz!' };
});

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('Servidor rodando em http://localhost:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
