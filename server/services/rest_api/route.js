import {Router} from  'express'
import { context } from '../middleware/context'
import { postController,updateController  } from './controller';

export const router = Router()


router.post('/post',context,postController)
router.put('/update',context,updateController)


  