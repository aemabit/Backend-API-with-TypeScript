import { Schema, model, Document } from "mongoose";

const StarWarsJokesSchema = new Schema({
  img_url: {
    type: String
  },
  name: {
    type: String
  },
  side: {
    type: String
  },
  value: {
    type: String
  }
});

interface STWData extends Document {
  img_url: string;
  name: string;
  side: string;
  value: string;
}

export default model<STWData>("StarWarsJokes", StarWarsJokesSchema);
