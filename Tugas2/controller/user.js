//import model users dari folder model
const User = require('../model/user');
const Division = require('../model/division');

const getAllUser = async (req, res, next)=>{
  try {
    const allUsers = await User.findAll({
      include: {
        model: Division,
        attributes: ['name'],
      },
      raw: true
    });

    const modifiedUsers = allUsers.map(u => ({
      id: u.id,
      fullName: u.fullName,
      angkatan: u.angkatan,
      divisionId: u.divisionId,
      divisionName: u['division.name']
      // divisionName: u.division.name
    }));
    
    res.status(200).json({
      status: "Success",
      message: "Succesfully fetch all user data",
      users: modifiedUsers
    })
  } catch (error) {
    console.log(error.message);
  }
}

const getUserById = async (req,res,next)=>{
  try {
    //const userId = req.params.userId;
    
    //ambil :userId dari req.params
    const {userId} = req.params; //tipe string

    //select user sesuai user id yang diharapkan
    
    const user = await User.findOne({
      where : {
        id: userId
      },
      include: {
        model: Division,
        attributes: ['name'],
      },
      raw: true
    })
    if(user === null){
      res.status(400).json({
        status: "Error",
        message: `User with id ${userId} is not existed!`
      })
    }

    res.status(200).json({
      status:"Success",
      message: "Succesfully fetch user data",
      user:{
        id: user.id, 
        fullName: user.fullName, 
        angkatan: user.angkatan, 
        divisionId: user.divisionId,
        divisionName: user['division.name']
      }
    })
  } catch (error) {
    
  }
}
  
const addUser = async (req,res,next)=>{
  try {
    const {
        fullName, nim, angkatan, email, password, division
      } =  req.body;
    const user_division = await Division.findOne({
      where:{
        name: division
      }
    })

    if(user_division == undefined){
      res.status(400).json({
        status: "Error",
        message: `${user_division} not exist`
      });
    }

    const currentUser = await User.create({
      fullName,
      nim,
      angkatan,
      email,
      password,
      divisionId : user_division.id
    })

    res.status(201).json({
      status: "Success",
      message: "Succesfully Add User"
    })
  } catch (error) {
    
  }
}

const deleteUserById = async (req,res,next)=>{
  try {
    const {userId} = req.params;

    //mencari index user dari array model user
    const targetedUser = await User.findOne({
      where:{
        id: userId,
      }
    })

    //user tidak ketemu
    if(targetedUser === null){
      res.status(400).json({
        status: "Error",
        message: `User with id ${userId} is not existed`
      })
    }

    //hapus array pada [targetedIndex] sebanyak 1 buah element
    User.destroy({
      where:{
        id: userId
      }
    });

    res.status(200).json({
      status: "Success",
      message: "Successfully delete user"
    })
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { getAllUser, getUserById, addUser, deleteUserById }