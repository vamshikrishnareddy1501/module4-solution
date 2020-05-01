/*
Solution of assignment 4:
Expected output:
Hello Praharsha
Good Bye Johnson
Good Bye Jerome Taylor
Good Bye Jason Roy
Hello Virat Kohli
Hello Mahesh Babu
Hello Dale Steyn
Hello SRH
Hello Brain Laura
Good Bye Jimmy Anderson
*/

(function() {
    var names = ["vamshi krishna", "Rohith", "K L Rahul", "Dhoni", "Virat Kohli", "Prabhas", "Dale Steyn", "SRH", "Brain Laura", "Jimmy Anderson"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
