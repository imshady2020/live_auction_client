/**
 * @author Marko Taskovic
 */

/**
 * @class - Custom Event system class
 */
class Event {
    
    /**
     * @property - all registered events at the moment
     */
    registry = {};

    /**
     * On method fires when we emit some event
     * @param event         - event name
     * @param callback      - callback for event
     */
    static On(event, callback) {
        if(!this.registry[event]){
            this.registry[event] = []; 
        } 
        this.registry[event].push(callback);
    }

    /**
     * Once method call event once and after execution remove that event from @param registry
     * @param event        - event name
     * @param callback     - callback for event
     */
    static Once(event, callback) {
        if(!this.registry[event]){
            this.registry[event] = [];
        }
        this.registry[event].push(function(message) {
            callback(message);
            this.Off(event, callback);
        });
    }

    /**
     * Off method remove event form @param registry
     * @param event       - event name
     * @param callback    - callback for event
     */
    static Off(event, callback) {
        if(this.registry[event]) {
            this.registry[event].splice(this.registry[event].indexOf(callback), 1);
            if(!this.registry[event].length){
                delete this.registry[event];
            } 
        }
    }

    /**
     * Emit method fire provided event with optional message parameter
     * @param event       - event name
     * @param message     - event message, allowed all types of data.
     */
    static Emit(event, message) {
        if(this.registry[event] !== undefined) {
            this.registry[event].forEach(callback => {
                callback(message);
            });
        }
    }

    /**
     * getListeners return all active events in that moment
     * @param event       - event name 
     */
    static getListeners(event) {
        return this.registry[event] ? this.registry[event] : null;
    }

}

export default Event;