const express = require("express");
const router = express.Router();

const History = require("../models/HistorySchema");
const shortestPath = require("../logic/dijkstra");
const { auth } = require("../middleware/auth");

router.post("/route", auth, async (req, res) => {
  try {
    const { source, destination } = req.body;

    if (!source || !destination) {
      return res.status(400).json({
        msg: "Please enter source and destination",
      });
    }

    const result = shortestPath(source, destination);

    if (result.success) {
      await History.create({
        userId: req.user.id,

        source,

        destination,

        path: result.path,

        totalDistance: result.totalDistance,

        interchanges: result.interchanges,
      });
    }

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
});

router.get("/history", auth, async (req, res) => {
  try {
    const history = await History.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    return res.status(200).json(history);
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
});

module.exports = router;
