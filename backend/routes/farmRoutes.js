const express = require("express");
const {
  createFarm,
  getAllFarms,
  getFarmById,
  updateFarm,
  deleteFarm,
} = require("../controllers/farmController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Route to create a new farm (protected route)
router.post("/", authMiddleware, createFarm);

// Route to get all farms
router.get("/", getAllFarms);

// Route to get a specific farm by ID
router.get("/:id", getFarmById);

// Route to update a specific farm (protected route)
router.put("/:id", authMiddleware, updateFarm);

// Route to delete a specific farm (protected route)
router.delete("/:id", authMiddleware, deleteFarm);

module.exports = router;
