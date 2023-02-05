import { createServer } from "http";
import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/getRequest", (req: Request, res: Response) => {
    console.log("hello");
    res.send("<h1>server is running</h1>");
  });

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    console.log("ready");
  });
});
