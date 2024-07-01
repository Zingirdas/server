import express from 'express'
import { postsController } from '../../controllers/posts.controller';

const postsRouter=express.Router();

postsRouter.get('/', postsController.getAll);
postsRouter.post('/', postsController.store);
postsRouter.put('id', postsController.update);
postsRouter.delete('id', postsController.delete);

export {postsRouter};