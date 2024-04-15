const Season = require('./../models/season.model');

const getAllSeasons = async (req, res) => {
  try {
    const result = await Season.find()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getSeason = async (req, res) => {
  try {
    const result = await Season.findById(req.params.id)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

const createSeason = async (req, res) => {
  try {
    const result = await Season.create(req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateSeason = async (req, res) => {
  try {
    const result = await Season.findByIdAndUpdate(req.params.body, req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteSeason = async (req, res) => {
  try {
    const result = await Season.findByIdAndDelete(req.params.id)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getAllSeasons,
  getSeason,
  createSeason,
  updateSeason,
  deleteSeason,
}