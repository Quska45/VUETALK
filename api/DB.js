import { Router } from 'express';
const router = Router()

router.use('/DB', (req, res) => {
  res.json( {foo:1} );
})

module.exports = router
