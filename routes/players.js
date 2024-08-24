const express = require('express');
const {
   createPlayer,
   getPlayers,
   getPlayer,
   deletePlayer,
   updatePlayer
} = require('../controllers/playerController')

const router = express.Router();

// GET all players
router.get('/', getPlayers);

// GET a single player
router.get('/:id', getPlayer)

// CREATE a single player
router.post('/', createPlayer)

// DELETE a single player
router.delete('/:id', deletePlayer)

// UPDATE a single player
router.put('/:id', updatePlayer)

module.exports = router;