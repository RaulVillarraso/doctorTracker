const router = require("express").Router();

const {
  getAllSeasons,
  getSeason,
  createSeason,
  updateSeason,
  deleteSeason,
  checkWatched,
} = require("../controller/season.controller");

router.get("/", getAllSeasons);
router.get("/:id", getSeason);
router.post("/", createSeason);
router.put("/check/:id/:ep", checkWatched);
router.put("/:id", updateSeason);
router.delete("/:id", deleteSeason);

module.exports = router;