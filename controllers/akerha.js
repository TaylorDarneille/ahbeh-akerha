const express = require('express')
const router = express.Router()

// routes go here
router.get('/movies', (req, res)=>{
    const badMovies = ['Dumb and Dumber', 'Titanic', 'Big Lebowski']
    res.render('movies.ejs', {movies: badMovies})
})
router.get('/products', (req, res)=>{
    const badProducts = ['Shamwow', 'Bump It', 'Air Soft Guns']
    res.render('products.ejs', {products: badProducts})
})

module.exports = router