
const userDB = require('../model/model');
// var Usardb = require('../model/model');


// Create and save new user 

exports.create = (req, res) =>{

    // validate request

    if (!req.body)
    {
        res.status (400).send({ message : "Content can not be empty "});
        return;
    }

    // new user 

    const user = new userDB({

        name:req.body.name,
        email : req.body.email,
        gender : req.body.gender,
        status : req.body.status
    })

    // save users
    user

    .save( user)
    .then(data => {
       // res.send(data);
       console.log(data);

       res.redirect("/add-user")
    })
    .catch(err =>{

        res.status(5000).send({
            message : err.message ||" Some error occurred while creating a create operation"
        })
    } )
}

// Retrieve and return all users / retrieve and return a single user

exports.find = (req,res) => {

  if ( req.query.id) 
  {
        
    const id = req.query.id;

    userDB.findById(id)
    
    .then( data => {

        if (!data )
        {
            res.status(404).send( { message : " NOt found user with id "+id})
        }
        else
        {

            res.send(data);
        }
    })
    .catch( err => {
        res.status(500).send({ message : "Error while retriving user information "})
    })

  }else
  {
    userDB.find()

    .then(user => {
    
        res.send(user)
    }) 
    .catch( err => {
    
        res.status(500).send({ message: err.message || "error Occured while retriving user information  "})
    })
    
    }
  }


// this section is to update the data users

exports.update = ( req, res) => {

    if ( ! req.body)
    {
        return res
        .status(400)
        .send({ message: " Data to update can not be empty "})
    }

    const id = req.params.id;

    userDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false})

    .then(data => {

        if (! data){
            res.status(404).send({message:` Cannot update user with ${id}. Maybe user not found!` })
        }else{

            res.send(data);
        }
    })
    .catch( err => {

        res.status(500).send( {message :"Error update user information "});
    })

}

// Delete a user with specified user id in the request 
 
exports.delete = (req, res) => {

    const id = req.params.id;

    userDB.findByIdAndDelete(id)

    .then(data => {

        if (! data)
        {
            res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`});

        }else {

            res.send({
                message : "User was deleted sucessfully !"
            })
        }
    })
    .catch( err => {

        res.status(500).send({
            message : " Could not delete User Id=" +id
        })
    })

}