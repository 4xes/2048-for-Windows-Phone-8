
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent();
    },
    receivedEvent: function () {
       
        new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
    }
};
