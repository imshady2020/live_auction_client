import store from "../Store/Store"
import { AvailableTypesOfMessage } from "./MessageTypes"

export default class CommunicationFactory {
  static Initialized = false

  constructor(props) {
    console.log(props)
    this.Initialized = props
  }

  static HandleIncomingSuccessMessage(messageType) {
    console.log(messageType, this.Initialized)
    if (this.Initialized) {
      switch (messageType) {
        case AvailableTypesOfMessage.adminMessages.addNewActiveProduct:
          //neki kod na osnovu ovoga
          break

        case AvailableTypesOfMessage.clientMessages.activeProducts.getAllPendingProducts:
          store.dispatch({ type: "GET_ALL_PRODUCTS" })
          break

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
}
