console.log('inside of pets.js');

const mongoose = require("mongoose");
// const Pet = mongoose.model("Pet");
const Shelter = mongoose.model("Shelter");

class Pets {

    addPet(req, res){
        let pet = new Pet(req.body);
        pet.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                Pet.findOne({_id:req.params.id}, function(err, shelter){
                    shelter.reviews.push(review);
                    let total = 0;
                    for (let r of shelter.reviews){
                        total += r.rating;
                    }
                    shelter.avgreview = total/shelter.reviews.length;
                    shelter.save(function(err){
                        if (err){
                            res.json({"status": 'not ok', "errors": err});
                        }
                        else{
                            res.json({"status": 'ok'});
                        }

                    })
                })
            }
        });
    }
}


module.exports = new Pets();