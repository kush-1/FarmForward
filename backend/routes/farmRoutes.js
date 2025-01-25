import express from 'express';

import { createFarm, deleteFarm, getFarms, updateFarm } from '../controllers/farmController.js';

const router = express.Router();

router.get("/", getFarms);

router.post("/", createFarm);

router.put("/:id", updateFarm);

router.delete("/:id", deleteFarm);

export default router;
