console.log("inside of shelters.js");

const mongoose = require("mongoose");
const Shelter = mongoose.model("Shelter");

class Shelters {
    getAll(req, res){
        Shelter.find({}).sort({"avgreview" : -1}).exec( function(err, shelters){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok", "shelters": shelters})
            }
        });
    }

    getId(req, res){
        Shelter.findOne({_id: req.params.id}, function(err, shelter){
          if(err){
              res.json({"status": "not ok", "errors": err});
          }
          else{
              res.json({"status": "ok", "shelter": shelter});
          }
        })
    }

    create(req, res){
        Shelter.find({name: req.body.name}, function(err, shelters){
            if (err) {
                res.json({"status": "not ok", "errors": err});
            } else if(shelters.length > 0){
                res.json(
                    {"status": "not ok", 
                        "errors": {
                            "errors": {
                                "name": { 
                                    "message": "Name is already taken!"
                                }
                            }
                        }
                    });
            } else {
                let shelter = new Shelter(req.body);
                shelter.save(function(err){
                    if(err){
                        res.json({"status": "not ok", "errors": err});
                    }else{
                        res.json({"status": "ok", "id": shelter._id});
                    }
                });
            }
        })
    }

    update(req, res){
        Shelter.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, function(err){
          if(err){
              res.json({"status": "not ok", "errors": err});
          }else{
              res.json({"status": "ok"});
          }
        })
    }

    delete(req, res){
        Shelter.remove({_id: req.params.id}, function(err){
          if(err){
              res.json({"status": "not ok", "errors": err});
          }else{
              res.json({"status": "ok"});
          }
        })
    }
}

module.exports = new Shelters();

