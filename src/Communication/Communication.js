import { w3cwebsocket as W3CWebSocket } from "websocket";
import CommunicationMessageFactory from './CommunicationMessageFactory';
// import Event from './../EventSystem/Event';
//import { Configuration } from './Config';

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

        // Event.On("jako", () => {
        //     console.log("radi");
        //   });

        this.client = new W3CWebSocket('ws://127.0.0.1:8000');

        /**
         * Recive Initial message
         */
        this.client.onopen = () => {
            console.log('WebSocket Client Connected');
            new CommunicationMessageFactory(true);
        };
          
        /**
         * @param message Regular message from server
         */
        this.client.onmessage = (message) => {
            let messageData = JSON.parse(message.data);
            CommunicationMessageFactory.HandleCommunicationSuccessMessage(messageData.type);
        }
        
        /**
         * @param message Error message from server
         */
        this.client.onerror = (message) => {
            let errorMessage = JSON.parse(message.data);
            CommunicationMessageFactory.HandleCommunicationErrorMessages(errorMessage.type);
        }

        /**
         * @param message Connection close message
         */
        this.client.onclose = (message) => {
            console.log(message);
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