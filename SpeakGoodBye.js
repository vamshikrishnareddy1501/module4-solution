(function(window) {
    var byeSpeaker = new Object();
    byeSpeaker.speak = function speak(name) {
        console.log("Good Bye " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
