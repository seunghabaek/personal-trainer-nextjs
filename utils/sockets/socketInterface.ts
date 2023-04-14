// sending & broadcasting events
export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}
// receiving events
export interface ClientToServerEvents {
  hello: () => void;
}
// inter-server communication
export interface InterServerEvents {
  ping: () => void;
}
// socket.data type
export interface SocketData {
  name: string;
  age: number;
}
