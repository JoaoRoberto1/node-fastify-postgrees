import pg from 'pg';
const {Pool} = pg;

const pool = new Pool({
    user: 'neondb_owner',
    password: 'npg_5yES1Nbklomrx',
    host: 'ep-morning-glitter-a53srgnd-pooler.us-east-2.aws.neon.tech',
    port: '5432',
    database: 'neondb',
    ssl: {
        rejectUnauthorized: false
    },
});

const result = await pool.query('SELECT NOW()');
const rows = result.rows[0].now;
console.log(rows);

