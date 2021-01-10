import { ProcessData } from "../Store/BusinessLogic/BusinessLogic"
import { AvailableTypesOfMessage } from "./MessageTypes"

export default class CommunicationFactory {
  static Init = false

  static HandleIncomingSuccessMessage(message) {
    const { type, msg, user, bid } = message
    if (this.Init) {
      switch (type) {
        case "message":
          ProcessData.getAllProducts(msg)
          break

        case AvailableTypesOfMessage.clientMessages.activeProducts.getAllPendingProducts:
          break
        case "test":
          const payload = { msg, bid }
          ProcessData.test(payload)

        default:
          console.log("Nista se nije desilo")
          break
      }
    }
  }

  /**
   * This function handle all ERROR messages from server through TCP protocol
   */
  static HandleIncomingErrorMessages() {
    console.log("sjebalo se nesto ")
  }

  /**
   * This function handle all CLOSE messages from server through TCP protocol
   */
  static HandleIncomingCloseMessage() {
    console.log("zatvorena konencija za sada")
  }

  static set setCommunication(data) {
    this.Init = data
  }
}
