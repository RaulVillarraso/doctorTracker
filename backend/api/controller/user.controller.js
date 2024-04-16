const User = require('./../models/user.model');
const ObjectId = require('mongodb').ObjectId;

const getAllUsers = async (req, res) => {
  try {
    const result = await User.find()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

const getUser = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id)
    const result = await User.findById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

const createUser = async (req, res) => {
  try {
    const result = await User.create(req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

const updateUser = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id)
    const result = await User.findByIdAndUpdate(id, req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteUser = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id)
    const result = await User.findByIdAndDelete(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}