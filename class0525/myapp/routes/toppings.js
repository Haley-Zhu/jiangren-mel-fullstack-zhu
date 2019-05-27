var express = require('express');
var router = express.Router();

toppings = [
    {id:1, name:'pineapple', image:''},
    {id:2, name:'pepple', image:''},
    {id:3, name:'onion', image:''},
];

/* GET toppings listing. */
router.get('/', function(req, res, next) {
    res.json(toppings);
});

/* create a new toppings. */
router.post('/', function(req, res, next) {
    var newId = toppings[toppings.length - 1].id + 1;
    var newItem = Object.assign({}, {id: newId}, req.body);
    toppings.push(newItem);
    res.json(newItem);
}); 

module.exports = router;