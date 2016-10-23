var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET Home page. */

router.get('/mathematics', function(req, res, next){
    models.mathematics.findAll().then(function(rows){
        console.log(rows);
        res.SetHeader("Content-Type", "application/json");
        res.send(JSON.stringfy({rows: rows}));
    });
});

router.get('/addWord', function(req, res, next){
    res.render('addWord');
});

router.get('/timetable', function(req, res, next){
    res.render('timetable');
});

/* POST Add a Word */
router.post('/addWord', function(req, res){
        var name = req.body.name;
        var finnish = req.body.finnish;
        var meaning = req.body.meaning;
        var subject = req.body.subject;
        console.log(name, finnish, meaning, subject);
        switch(subject){
            case '1':
                models.physics.create({name: name, finnish: finnish, meaning: meaning}).then(function(data){
                    res.render('addWord', {message: 'Successfully saved Word!'});
                }).catch(function(err){
                    res.render('addWord', {message: 'Failed to save Word! ' + err});
                });
                break;
            case '2':
                models.chemistry.create({name: name, finnish: finnish, meaning: meaning}).then(function(data){
                    res.render('addWord', {message: 'Successfully saved Word!'});
                }).catch(function(err){
                    res.render('addWord', {message: 'Failed to save Word! ' + err});
                });
                break;
            case '3':
                models.mathematics.create({name: name, finnish: finnish, meaning: meaning}).then(function(data){
                    res.render('addWord', {message: 'Successfully saved Word!'});
                }).catch(function(err){
                    res.render('addWord', {message: 'Failed to save Word! ' + err});
                });
                break;
            case '4':
                models.biology.create({name: name, finnish: finnish, meaning: meaning}).then(function(data){
                    res.render('addWord', {message: 'Successfully saved Word!'});
                }).catch(function(err){
                    res.render('addWord', {message: 'Failed to save Word! ' + err});
                });
                break;
            case '5':
                models.finnish.create({name: name, finnish: finnish, meaning: meaning}).then(function(data){
                    res.render('addWord', {message: 'Successfully saved Word!'});
                }).catch(function(err){
                    res.render('addWord', {message: 'Failed to save Word! ' + err});
                });
                break;
            case '6':
                models.history.create({name: name, finnish: finnish, meaning: meaning}).then(function(data){
                    res.render('addWord', {message: 'Successfully saved Word!'});
                }).catch(function(err){
                    res.render('addWord', {message: 'Failed to save Word! ' + err});
                });
                break;
            case '7':
                models.psychology.create({name: name, finnish: finnish, meaning: meaning}).then(function(data){
                    res.render('addWord', {message: 'Successfully saved Word!'});
                }).catch(function(err){
                    res.render('addWord', {message: 'Failed to save Word! ' + err});
                });
                break;    
            default:
                res.render('addWord');
                break;
        }
});
router.get('/', function(req, res, next) {
    var maths, physics, chemistry, history, biology, finnish, psychologi;
    
    models.physics.findAll({}).then(function(rows){
        physics = rows;
        models.chemistry.findAll({}).then(function(rows){
            chemistry = rows;
            models.mathematics.findAll({}).then(function(rows){
                maths = rows;
                models.history.findAll({}).then(function(rows){
                    history = rows;
                    models.biology.findAll({}).then(function(rows){
                        biology = rows;
                        models.finnish.findAll({}).then(function(rows){
                            finnish = rows;
                            models.psychology.findAll({}).then(function(rows){
                                psychology = rows;
                                res.render('index', { title: 'Terminology', 
                                    maths: maths,
                                    physics: physics,
                                    chemistry: chemistry,
                                    finnish: finnish,
                                    history: history,
                                    biology: biology,
                                    psychology: psychology
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

module.exports = router;
