import {Router} from  'express'
import { context } from '../middleware/context'
import { authController  } from './controller';

export const router = Router()


router.post('/',context,authController)


  