import { authenticate, restrict } from "../auth/verifyToken.js";
import {
  deleteDoctor,
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
} from "../controllers/doctorController.js";
import express from "express";

const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getAllDoctors);
router.get("/:id", authenticate, restrict(["doctor"]), getSingleDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);

export default router;
