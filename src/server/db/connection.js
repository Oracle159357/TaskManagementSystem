const pgp = require("pg-promise")();
let cn = {
    host: 'localhost',
    port: 5432,
    database: 'task',
    user: 'postgres',
    password: 'gfhjkm36'
};
let db = pgp(cn);
export default db