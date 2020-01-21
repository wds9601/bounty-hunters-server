//Create router and reference the models
let db = require('../../models')
let router = require('express').Router()

//GET v1/bounties - retrieve all bounties in DB
router.get('/', (req, res) => {
    db.Bounty.find()
    .then(bounties => {
        res.send(bounties)
    })
    .catch(err => {
        console.log('ERROR in /GET bounties', err)
        res.status(503).send({message: 'Database asleep?'})
    })
})

//POST /v1/bounties - Create a new bounty
router.post('/', (req, res) => {
    res.send('TBD - create a bounty')
})

//PUT /v1/bounties - Bulk Update ALL bounties
router.put('/', (req, res) => {
    res.send('TBD - Update all the bounties')
})

//DELETE /v1/bounties - Delete ALL bounties
router.delete('/', (req, res) => {
    res.send('TBD - Delete all the bounties')
})

//GET v1/bounties/:id - Retrieve a single bounty by its ID
router.get('/:id', (req, res) => {
    db.Bounty.findById(req.params.id)
    .then(bounty => {
        if(bounty) {
            res.send(bounty)
        } else {
            res.status(404).send({ message: 'Resource not Located'})
        } //this error is like 'query was correct, but thi thing doesnt exist' 
    })
    .catch(err => {
        console.log('ERROR in GET /bounties/:id', err)
        res.status(503).send({message: 'Service Unvailable'})
    }) //This error is like 'the query didnt work correctly, there was an error'
})

//PUT /v1/bounties/:id - Update a single bounty
router.put('/:id', (req, res) => {
    res.send('TBD - Update one bounty')
})

//DELETE /v1/bounties/:id - Delete a single bounty
router.delete('/:id', (req, res) => {
    res.send('TBD - Delete one bounty')
})

//Export the router object and the routes attached to it
module.exports = router