(function (){
  var names = ["Yaakov", "John", "Joseph", "Shiva", "Paul", "Franklin", "Pradeep", "Roshan", "Jim", "Lashmi", "Jasmine"];
  for (var name in names) {
    var firstLetter = names[name].charAt(0);    
    if (firstLetter.toLowerCase() == 'j') {
      byeSpeaker.speak(names[name]);
    } else {
      helloSpeaker.speak(names[name]);
    }
  }
})();
