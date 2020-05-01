

(function() {
    var names = ["vamshi krishna", "rohith", "Taylor", "Bhuvneshwar", "K L Rahul", "Dhoni", "Dale Steyn", "SRH", "Brain Laura", "Jimmy Anderson"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
