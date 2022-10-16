const express = require('express')
const app = express()
const PORT = 3000
const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)
// controllers middleware
app.use('/akerha', require('./controllers/akerha.js'))
app.use('/ahbeh', require('./controllers/ahbeh.js'))

// ROUTES
// home
app.get('/', (req, res)=>{
    res.render('home.ejs')
})


app.listen(PORT, ()=>{
    console.log(`You're running the ahbeh-akerha app`)
})