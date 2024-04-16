const Season = require('./../models/season.model');
const ObjectId = require('mongodb').ObjectId;

const getAllSeasons = async (req, res) => {
  try {
    const result = await Season.find()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

const getSeason = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id)
    const result = await Season.findById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

const createSeason = async (req, res) => {
  try {
    const result = await Season.create(req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

const updateSeason = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id)
    const result = await Season.findByIdAndUpdate(id, req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteSeason = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id)
    const result = await Season.findByIdAndDelete(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
}

const checkWatched = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id)
    const seasons = await Season.findById(id)
    const check = seasons.episodes.map(e => parseInt(e.name.slice(0, 2)) == parseInt(req.params.ep) ? {"name": e.name, "watched": !e.watched} : e)

    const result = await Season.findOneAndUpdate(id, {"episodes": check})
    res.status(200).json(result)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getAllSeasons,
  getSeason,
  createSeason,
  updateSeason,
  deleteSeason,
  checkWatched,
}