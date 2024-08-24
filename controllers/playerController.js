const Player = require('../models/playerModel');
const mongoose = require('mongoose');

// GET all players
const getPlayers = async (req, res) => {
   const players = await Player.find({}).sort({createAt: -1});
   res.status(200).json(players);
}

// GET a single player
const getPlayer = async (req, res) => {
   const {id} = req.params;

   if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such player'})
   }

   const player = await Player.findById(id);
   if(!player) {
      return res.status(404).json({error: 'No such player found'});
   }

   res.status(200).json(player);
}

// CREATE a single player
const createPlayer = async (req, res) => {
   const {fullName, origin, favoriteNumber} = req.body;

   // Add doc to db
   try {
      const player = await Player.create(
         {
            fullName, 
            origin, 
            favoriteNumber
         }
      )
      res.status(200).json(player);
   } catch (error) {
      res.status(400).json({error: error.message});
   }
}

// DELETE a single player
const deletePlayer = async(req, res) => {
   const {id} = req.params;
   if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such player found'})
   }

   const player = await Player.findOneAndDelete({_id: id});

   if(!player) {
      return res.status(404).json({error: 'No such player found'})
   }
   res.status(200).json(player);
}

// UPDATE a single player
const updatePlayer = async(req, res) => {
   const {id} = req.params;
   if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such player found'})
   }

   const player = await Player.findOneAndUpdate({_id: id}, {
      ...req.body
   });

   if(!player) {
      return res.status(404).json({error: 'No such player found'})
   }
   res.status(200).json(player);

}


module.exports = {
   createPlayer,
   getPlayers,
   getPlayer,
   deletePlayer,
   updatePlayer
}