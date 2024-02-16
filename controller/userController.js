const userModel = require('../model/user')

async function findAll(req, res) {
    try {
      const users = await userModel.find();
      res.status(200).json({ users: users });
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
  }

  async function findByID(req, res) {
    console.log(req.params.id)
    try {
      const user = await userModel.findById(req.params.id );
      
      if (user) {
        res.status(200).json({ user: user });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error retrieving user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async function createUser(req,res){

    try {
      const user = await userModel.create(req.body);
      res.status(200).json({ user: user , msg: " user created" }); 
    } catch (error) {
      res.status(404).json({ error:error});
      
    }
  }

  async function updateUser(req,res){
    try {
      const id = req.params.id;
      console.log(id)
      const updatedUser= await userModel.findOneAndUpdate(id);
      res.status(200).json({ user: updatedUser , msg: " user updated" }); 

    } catch (error) {
      res.status(404).json({ error:error});
    }
  }

  async function deleteUser(req,res){
    try {
      const id = req.params.id;
      console.log(id)
      const deletedUser= await userModel.findOneAndDelete(id);
      res.status(200).json({ user: deletedUser , msg: " user deleted" }); 
      
    } catch (error) {
      res.status(404).json({ error:error});

    }
  }
  
  
  module.exports = {
    findAll,findByID,createUser,updateUser,deleteUser
  };
