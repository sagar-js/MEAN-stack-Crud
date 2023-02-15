const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/emp');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else {
            console.log('Error in Retriving Employess...' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('error in employee save' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put("/:id", (req, res) => {
    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };

    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log(`Error in EmployeeUpdate: ` + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(!err){ res.send(doc);}
        else{console.log(`Error in Employee Delete: `+JSON.stringify(err,undefined,2));}
    });
});

module.exports = router;