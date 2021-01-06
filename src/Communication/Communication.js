import { w3cwebsocket as W3CWebSocket } from "websocket";
import CommunicationFactory from './CommunicationFactory';
import { Config } from './Config';

export default class Communication {

    /**
     * Instantiator of websocket
     * @default null  
     */
    static client;

    /**
     * Communication Init function
     */
    static Initialize() {


        /**
         * @class W3CWebSocket extended and Initialized WebSocket class
         */
        this.client = new W3CWebSocket(`${Config.WebSocket.regularProtocol}${Config.WebSocket.baseURL}`);


        /**
         * Recive Initial message
         */
        this.client.onopen = () => {
            console.log('WebSocket Client Connected');
            new CommunicationFactory(true);
        }
        
          
        /**
         * @param message Regular message from server
         */
        this.client.onmessage = (message) => {
            let messageData = JSON.parse(message.data);
            CommunicationFactory.HandleIncomingSuccessMessage(messageData.type);
        }

        
        /**
         * @param message Error message from server
         */
        this.client.onerror = (message) => {
            let errorMessage = JSON.parse(message.data);
            console.log("nesto nije ok ovde");
            CommunicationFactory.HandleIncomingErrorMessages(errorMessage.type);
        }


        /**
         * @param message Connection close message
         */
        this.client.onclose = (message) => {
            let closeMessage = JSON.parse(message.data);
            CommunicationFactory.HandleIncomingCloseMessage(closeMessage.type);
        }

    }


    /**
     * Send method to send data to server
     * @param messageData Message data object
     */
    static Send(messageData) {
        this.client.send(messageData);
    }


}