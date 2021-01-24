import { Router } from "express";

import libraryController from "../controllers/LibraryController";
import Library from "../models/LibraryModel";

const LibraryController = new libraryController(Library);

const router = Router();

router.post("/obras", (req, res) => LibraryController.create(req, res));
router.get("/obras", (req, res) => LibraryController.list(req, res));
router.put("/obras/:id", (req, res) => LibraryController.update(req, res));
router.delete("/obras/:id", (req, res) => LibraryController.remove(req, res));

export default router;
