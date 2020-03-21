import { Request, Response } from "express";
import path from "path";
import fs from "fs-extra";
import StarWarsJokes from "../models/Character";
import connectDb from "../database";

connectDb();

export async function getDataCharacter(
  req: Request,
  res: Response
): Promise<Response> {
  const jokes = await StarWarsJokes.find();
  return res.json({
    message: "Find all Character",
    jokes
  });
}

export async function getJokeById(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const jokeById = await StarWarsJokes.findById(id);
  return res.json({
    message: "Joke by ID",
    jokeById
  });
}

export async function getRandomCharacter(
  req: Request,
  res: Response
): Promise<Response> {
  const randomJoke = await StarWarsJokes.aggregate([{ $sample: { size: 1 } }]);
  return res.json({
    message: "Random Joke",
    randomJoke
  });
}

export async function createCharacter(
  req: Request,
  res: Response
): Promise<Response> {
  const { name, side, value } = req.body;
  const { path } = req.file;
  const newCharacter = {
    name: name,
    side: side,
    value: value,
    img_url: path
  };
  const joke = new StarWarsJokes(newCharacter);
  await joke.save();
  return res.json({
    message: "Joke Created",
    joke
  });
}

export async function deleteJoke(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const deleteJokeById = await StarWarsJokes.findByIdAndRemove(id);
  if (deleteJokeById) {
    await fs.unlink(path.resolve(deleteJokeById.img_url));
  }
  return res.json({
    message: "Joke Deleted",
    deleteJokeById
  });
}

export async function updateJoke(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const { name, side, value } = req.body;
  const updated = await StarWarsJokes.findByIdAndUpdate(
    id,
    {
      name,
      value,
      side
    },
    { new: true }
  );
  return res.json({
    message: "Joke Updated",
    updated
  });
}
