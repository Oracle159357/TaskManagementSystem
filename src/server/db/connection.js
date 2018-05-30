const pgp = require("pg-promise")();
let cn = {
    host: 'localhost',
    port: 5432,
    database: 'task',
    user: 'postgres',
    password: 'gfhjkm36'
};
let db = pgp(cn);
//var x=db.one('INSERT INTO Task(value, pkKey) VALUES(Buka, 1234)');
export default db