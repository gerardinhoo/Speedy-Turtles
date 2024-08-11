const express = require('express');

const router = express.Router();


// GET all players
router.get('/', (req, res) => {
   res.json({message: 'GET all players'})
})

// GET a single player
router.get('/:id', (req, res) => {
   res.json({message: 'GET a single player'})
})

// POST a single player
router.post('/:id', (req, res) => {
   res.json({message: 'POST a single player'})
})

// DELETE a single player
router.delete('/:id', (req, res) => {
   res.json({message: 'Delete a single player'})
})

// UPDATE a single player
router.put('/:id', (req, res) => {
   res.json({message: 'Update a single player'})
})

module.exports = router;