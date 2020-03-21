import app from "./app";
import connectDb from "./database";

async function main() {
  connectDb();
  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}

main();
