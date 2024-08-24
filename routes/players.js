const express = require('express');
const {
   createPlayer,
   getPlayers,
   getPlayer
} = require('../controllers/playerController')

const router = express.Router();

// GET all players
router.get('/', getPlayers);

// GET a single player
router.get('/:id', getPlayer)

// CREATE a single player
router.post('/', createPlayer)

// DELETE a single player
router.delete('/:id', (req, res) => {
   res.json({message: 'Delete a single player'})
})

// UPDATE a single player
router.put('/:id', (req, res) => {
   res.json({message: 'Update a single player'})
})

module.exports = router;