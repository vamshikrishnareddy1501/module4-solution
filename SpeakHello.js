(function(window) {
    var helloSpeaker = new Object();
    helloSpeaker.speak = function(name) {
        console.log("Hello  " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
