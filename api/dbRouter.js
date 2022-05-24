import { Router } from 'express';
const router = Router()

router.use('/test1', (req, res) => {
  res.send( {foo:1} );
})

router.use('/test2', (req, res) => {
  res.send( {foo:3} );
})

export default router
