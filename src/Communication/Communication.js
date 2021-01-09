import { w3cwebsocket as W3CWebSocket } from "websocket"
import CommunicationFactory from "./CommunicationFactory"
import { Config } from "./Config"
import io from "socket.io-client"

const ENDPOINT = "http://localhost:5000/" // dev endpoint
export default class Communication {
  static client

  static Initialize() {
    this.client = io(ENDPOINT)

    this.client.on("connected", () => {
      console.log("Websocket Client Connected")
      console.log(new CommunicationFactory(true))
    })

    this.client.on("message", (message) => {
      const incomingMessage = JSON.parse(message)
      CommunicationFactory.HandleIncomingSuccessMessage(incomingMessage.type)
    })
  }

  static Send(messageData) {
    this.client.emit("new_message", messageData)
  }
  static Disconnect() {
    this.client.disconnect()
  }
}
