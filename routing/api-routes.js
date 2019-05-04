const Trashcan = require('../models/Trashcan');

module.exports = function (app) {


    app.get('/api/trash', function(req,res) {
        Trashcan.find({})
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err)
        });
    });

    app.get('/api/trash/:position', function(req,res) {
        Trashcan.find({position: req.params.position})
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.status(400).json(err)
        });
    });

    app.post('/api/trash', function(req,res) {
        // const trashPile = {
        //     image: req.body.image,
        //     position: req.body.position,
        //     description: req.body.description,
        //     needsCleaning: true
        // };

        Trashcan.create(req.body)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err)
        });
    });

    app.put('/api/trash/:id', function(req,res) {
        Trashcan.findByIdAndUpdate(id, { needsCleaning: false } )
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.status(400).json(err)
        });
    });

}