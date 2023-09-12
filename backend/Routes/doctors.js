import { authenticate, restrict } from "../auth/verifyToken.js";
import {
  deleteDoctor,
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
} from "../controllers/doctorController.js";
import express from "express";
import reviewRouter from "./review.js";

const router = express.Router();

// nested route
router.use("/:doctorId/reviews", reviewRouter);

router.get("/", getAllDoctors);
router.get("/:id", getSingleDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);

export default router;
