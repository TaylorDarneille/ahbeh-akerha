const express = require('express')
const app = express()
const PORT = 3000
const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)
// controllers middleware
app.use('/akerha', require('./controllers/akerha.js'))

// ROUTES
// home
app.get('/', (req, res)=>{
    res.render('home.ejs')
})
app.get('/ahbeh/animals', (req, res)=>{
    const faveAnimals = ['sand crab', 'corny joke dog', 'benedict the sea cucumber']
    res.render('animals.ejs', {animals: faveAnimals})
})
app.get('/ahbeh/foods', (req, res)=>{
    const faveFoods = ['tacos', 'kale', 'sushi']
    res.render('foods.ejs', {foods: faveFoods})
})


app.listen(PORT, ()=>{
    console.log(`You're running the ahbeh-akerha app`)
})