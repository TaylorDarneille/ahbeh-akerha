const express = require('express')
const router = express.Router()

router.get('/animals', (req, res)=>{
    const faveAnimals = ['sand crab', 'corny joke dog', 'benedict the sea cucumber']
    res.render('animals.ejs', {animals: faveAnimals})
})
router.get('/foods', (req, res)=>{
    const faveFoods = ['tacos', 'kale', 'sushi']
    res.render('foods.ejs', {foods: faveFoods})
})

module.exports = router