var express = require('express');
var router = express.Router();
var party_dal = require('../model/party_dal');


router.get('/all', function(req, res) {
    party_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('party/partyViewAll', { 'result':result });
        }
    });

});

module.exports = router;
