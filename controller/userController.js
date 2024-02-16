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
  
  
  module.exports = {
    findAll,findByID
  };
