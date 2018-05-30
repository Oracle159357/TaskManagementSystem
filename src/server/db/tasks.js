import db from 'db/connection'
// db.none('INSERT INTO "Task(value, pkKey)" VALUES(${pkKey}, ${this})', {
//     pkKey: 123,
//     value: 'some text'
// })

//db.none('INSERT INTO "Task"(pkKey) VALUES(12345)');
// var x=db.none('INSERT INTO "Task(value, pkKey)" VALUES(${pkKey}, ${this})', {
//     pkKey: 123,
//     value: 'some text'
// })
// var x=db.none('INSERT INTO Task(value, pkKey) VALUES(Buka, 1234)');
//db.none('INSERT INTO documents(id, doc) VALUES(123, {"id":123,"body":"some text"}');
//db.none('INSERT INTO Task(value, pkKey) VALUES(Buka1234, 12346)');
//db.none('INSERT INTO "Task"(value) VALUES("dhusfsd")');
export const insert = ({title})=> db.none('INSERT INTO "Task" (value) VALUES(${value})', {
    value: title
});
export const remove = (id)=> db.none('DELETE FROM "Task" WHERE "pkKey" = ${pkKey}', {
    pkKey: id // надо указывать то что в task list
});
export const change = (buka)=>db.none('UPDATE "Task" SET done = ${status} WHERE "pkKey" = ${id}', {
    id:  buka.id,
    status: buka.status
}) ;
export const getAllTask =() => db.any('SELECT "value", "pkKey", "done" from "Task"');