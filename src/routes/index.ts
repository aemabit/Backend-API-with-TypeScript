import { Router } from "express";
const router = Router();

import {
  createCharacter,
  getDataCharacter,
  getRandomCharacter,
  getJokeById,
  deleteJoke,
  updateJoke
} from "../controllers/character.controller";

import multer from "../libs/multer";

router
  .route("/jokes")
  .get(getDataCharacter)
  .post(multer.single("image"), createCharacter);

router.route("/randomjoke").get(getRandomCharacter);

router
  .route("/jokes/:id")
  .get(getJokeById)
  .delete(deleteJoke)
  .put(updateJoke);

export default router;
