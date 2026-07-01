import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";
import { ClientMessage, ServerMessage } from "./protocol.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const PORT = process.env.PORT ?? 3000;

app.use(express.static(path.join(import.meta.dirname, "public")));

app.get("/{*path}", (_req, res) => {
  res.sendFile(path.join(import.meta.dirname, "public", "index.html"));
});

io.on("connection", (socket: Socket) => {
  console.log("client connected:", socket.id);

  socket.on("message", (msg: ClientMessage) => {
    switch (msg.type) {
      case "ping": {
        const reply: ServerMessage = { type: "pong", payload: msg.payload };
        socket.emit("message", reply);
        break;
      }
    }
  });

  socket.on("disconnect", () => {
    console.log("client disconnected:", socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
