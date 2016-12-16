var express = require('express');
var router = express.Router();
var ingredient_dal = require('../model/ingredient_dal');


router.get('/all', function(req, res) {
    ingredient_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('ingredient/ingredientViewAll', { 'result':result });
        }
    });
});

module.exports = router;
