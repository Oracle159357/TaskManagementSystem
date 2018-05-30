import {Router} from 'express';
import tasks from './tasks';

const router = Router();

const routes = {tasks};

Object.keys(routes).forEach(routePath => router.use(`/${routePath}`, routes[routePath]));

export default router;

