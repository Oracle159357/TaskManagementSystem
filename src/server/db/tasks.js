import db from 'db/connection'

export const insert = ({title}) => db.none('INSERT INTO "Task" (value) VALUES(${value})', {
    value: title
});
export const remove = (id) => db.none('DELETE FROM "Task" WHERE "pkKey" = ${pkKey}', {
    pkKey: id
});
export const change = (buka) => db.none('UPDATE "Task" SET done = ${status} WHERE "pkKey" = ${id}', {
    id: buka.id,
    status: buka.status
});
export const getAllTask = () => db.any('SELECT "value", "pkKey", "done" from "Task"');