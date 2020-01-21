//Require the node modules needed
let express = require('express')

//Create an app instance
let app =  express()

//Set up middleware
app.use(express.urlencoded({ extended: false}))  //Accept form data
app.use(express.json())  //Accept data from AJAX requests
//TODO: add cors

//Include any controllers we have
app.use('/v1/bounties', require('./controllers/v1/bounties'))

//Define a catch-all route (AKA 404)
app.get('*', (req, res) => {
    res.status(404).send({ message: 'Not Found' })
    //can use .json() here as well
})

//Listen on the specified PORT
app.listen(process.env.PORT || 3000)