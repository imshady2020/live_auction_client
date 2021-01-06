import store from './../Store/Store';
import { AvailableTypesOfMessage } from './MessageTypes';

export default class CommunicationMessageFactory {

    static Initialized = false;

    constructor(props){
        this.Initialized = props;
    }

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
        }else{
            this.HandleIncomingErrorMessages();  
        }
        
    }
    
    static HandleIncomingErrorMessages() {
        console.log("sjebalo se nesto ");
    }

    static HandleIncomingCloseMessage() {
        console.log("zatvorena konencija za sada");
    }

}