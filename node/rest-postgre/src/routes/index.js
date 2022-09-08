const{Router} = require('express');
const router = Router();
const{getUser, createUser, getUserbyId} = require('../controllers/index.controller');
router.get('/users', getUser)
router.get('/users/:id', getUserbyId)
router.post('/users', createUser)
module.exports = router;