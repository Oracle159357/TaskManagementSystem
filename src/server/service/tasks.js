import {getAllTask} from 'db/tasks';
import {insert} from "../db/tasks";
import {remove} from "../db/tasks";
import {change} from "../db/tasks";

export const getAll = async () =>
    (await getAllTask()).map(x => ({title: x.value, id: x.pkKey, done: x.done}));

export const insertTask = (title) => insert(title);

export const removeTask = (id) => remove(id);

export const changeStatusTak = (buka)=>change(buka);