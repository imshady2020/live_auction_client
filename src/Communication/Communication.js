//import { w3cwebsocket as W3CWebSocket } from "websocket"
import CommunicationFactory from "./CommunicationFactory";
import { SocketActions } from './WebSocketAction';
import { Config } from "./Config";
import io from "socket.io-client";

const ENDPOINT = `${Config.WebSocket.regularProtocol}${Config.WebSocket.baseURL}`;

export default class Communication {
  static client;

  static Initialize() {
    this.client = io(ENDPOINT);

    this.client.on(SocketActions.connected, () => {
      console.log("User connected");
      CommunicationFactory.setCommunication = true;
    })

    this.client.on(SocketActions.message, (message) => {
      const incomingMessage = JSON.parse(message);
      CommunicationFactory.HandleIncomingSuccessMessage(incomingMessage.type);
    })
  }

  static Send(messageData) {
    this.client.emit(SocketActions.new_message, messageData);
  }

  static Disconnect() {
    this.client.disconnect();
  }
}
