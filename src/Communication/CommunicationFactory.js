import store from '../Store/Store';
import { AvailableTypesOfMessage } from './MessageTypes';

export default class CommunicationFactory {


    /**
     * @param Initialized     - this allow or not allow communication with server through TCP protocol
     */
    static Initialized = false;


    /**
     * Initialize status of Communication Factory
     * @param props           - the deciding parameter for communication
     */
    constructor(props){
        this.Initialized = props;
    }


    /**
     * This function handle all SUCCESSFUL messages from server through TCP protocol
     * @param messageType     - Type of recived message 
     */
    static HandleIncomingSuccessMessage(messageType) {
        if(this.Initialized){
            switch(messageType){
                case AvailableTypesOfMessage.adminMessages.addNewActiveProduct:
                    break;

                case AvailableTypesOfMessage.clientMessages.activeProducts.getAllPendingProducts:
                    store.dispatch({type:"GET_ALL_PRODUCTS"});
                    break;
            
                default: 
                    console.log("Nista se nije desilo");
                        break;
                    
            }
        }
    }
    

    /**
     * This function handle all ERROR messages from server through TCP protocol
     */
    static HandleIncomingErrorMessages() {
        console.log("sjebalo se nesto ");
    }


    /**
     * This function handle all CLOSE messages from server through TCP protocol
     */
    static HandleIncomingCloseMessage() {
        console.log("zatvorena konencija za sada");
    }
    

}