// All client→server and server→client messages go here.
// Use the MsgType discriminant to switch on message type.

export type MsgType =
  | "ping"
  | "pong";

// Client → Server
export interface PingMsg {
  type: "ping";
  payload: string;
}

// Server → Client
export interface PongMsg {
  type: "pong";
  payload: string;
}

export type ClientMessage = PingMsg;
export type ServerMessage = PongMsg;
