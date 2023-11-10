// Create web service for comments

// Required modules
const express = require('express')
const router = express.Router()
const db = require('../models')
const Comment = db.Comment
const User = db.User

// Create comment
router.post('/', (req, res) => {
  Comment.create({
    text: req.body.text,
    UserId: req.user.id,
    RestaurantId: req.body.restaurantId
  })
    .then(() => res.redirect(`/restaurants/${req.body.restaurantId}`))
    .catch(error => console.log(error))
})

// Delete comment
router.delete('/:id', (req, res) => {
  Comment.findByPk(req.params.id)
    .then(comment => comment.destroy())
    .then(() => res.redirect(`/restaurants/${req.body.restaurantId}`))
    .catch(error => console.log(error))
})

// Export router
module.exports = router