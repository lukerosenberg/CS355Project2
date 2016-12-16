var express = require('express');
var router = express.Router();
var food_dal = require('../model/food_dal');


router.get('/all', function(req, res) {
    food_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('food/foodViewAll', { 'result':result });
        }
    });
});

module.exports = router;
