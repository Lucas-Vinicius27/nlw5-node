import express from "express";
import { createServer } from "http";
import path from "path";
import { Server, Socket } from "socket.io";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req, res) => res.render("html/client.html"));

const http = createServer(app);
const io = new Server(http);

io.on("connect", (socket: Socket) => console.log("Connected", socket));

app.use(express.json());

app.use(routes);

export { http, io };
