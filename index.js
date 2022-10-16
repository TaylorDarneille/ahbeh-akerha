const express = require('express')
const app = express()
const PORT = 3000
const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// ROUTES
// home
app.get('/', (req, res)=>{
    res.render('home.ejs')
})
// favorite animals
app.get('/animals', (req, res)=>{
    const faveAnimals = ['sand crab', 'corny joke dog', 'benedict the sea cucumber']
    res.render('animals.ejs', {animals: faveAnimals})
})

app.listen(PORT, ()=>{
    console.log(`You're running the ahbeh-akerha app`)
})