import { messageHandler } from "@/utils/sockets/messageHandler";
import { Server } from "socket.io";

// sending & broadcasting events
interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}
// receiving events
interface ClientToServerEvents {
  hello: () => void;
}
// inter-server communication
interface InterServerEvents {
  ping: () => void;
}
// socket.data type
interface SocketData {
  name: string;
  age: number;
}

export default function SocketHandler(req: any, res: any) {
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >(res.socket.server);
  res.socket.server.io = io;

  const onConnection = (socket) => {
    messageHandler(io, socket);
  };

  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
}
