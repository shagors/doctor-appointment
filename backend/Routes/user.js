import { authenticate, restrict } from "../auth/verifyToken.js";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getAllUser);
router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser);

export default router;
