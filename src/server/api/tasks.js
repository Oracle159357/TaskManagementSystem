import {Router} from 'express';

import {getAll} from 'service/tasks';
import {insertTask} from "../service/tasks";
import {removeTask} from "../service/tasks";
import {changeStatusTak} from "../service/tasks";

const router = Router();
router.put('/', async (req, res) => {
    await insertTask(req.body);
    res.status(200).end();
});
router.delete('/:id', async (req, res) => {
    await removeTask(req.params.id);
    res.status(200).end();
});
router.post('/', async (req, res) => {
    await changeStatusTak(req.body);
    res.status(200).end();
});
router.get('/', async (req, res) => res.send(await getAll()));

export default router;
