var SpeechRecognition = window.webkitSpeechRecognition;

var recongintion = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recongintion.start();
}

recongintion.onresult  = function run (event) {
    console.log(event);

var Content = event.results[0][0].transcript;

document.getElementById("textbox").innerHTML= Content;
console.log(Content);
speak();
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}

