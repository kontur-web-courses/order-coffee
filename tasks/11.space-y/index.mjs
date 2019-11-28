import * as path from "path";
import fs from "fs";
import express from "express";
import https from "https";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const rootDir = process.cwd();
const port = 3000;
const app = express();

app.get("/", (_, res) => {
  res.send(":)");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
