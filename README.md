## BACKEND API WITH TYPESCRIPT

## Description
API build with Node, Express, MongoDB Atlas and TypeScript

## Using this project

* Create a file with the name database.ts inside the folder ```src```
```
import mongoose from "mongoose";
const MONGO_SRV = "CRENDENTIAL_FROM_MONGO_DB_ATLAS";

async function connectDb() {
  await mongoose.connect(MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("DB Connected");
}

export default connectDb;
```

  
## Setup

* `git clone` this repo
* `cd` into it.
* `yarn`

## To make it run

* `yarn run dev` 
  