function getRandomArbitary(min, max) {
	return Math.random() * (max - min) + min;
}

repeat.onclick = function() {
	location.reload()
};

var x = Math.round(getRandomArbitary(2,9));
var y = Math.round(getRandomArbitary(2,9));

document.getElementById("x").innerHTML = x;
document.getElementById("y").innerHTML = y;

if ('webkitSpeechRecognition' in window) {
	var recognition = new webkitSpeechRecognition();
	recognition.onresult = (event) => {
		for (let i = 0; i < event.results.length; i++) {
			let result = event.results[i];
			let resultAlternative = result[0];

			document.getElementById("answer").innerHTML = resultAlternative.transcript;
			document.getElementById("answer-block").style.display="flex";

			if (resultAlternative.transcript == x * y) {
				document.getElementById("correct").style.display="block";
				document.getElementById("incorrect").style.display="none";
			} else {
				document.getElementById("correct-answer").innerHTML = x * y;
				document.getElementById("correct").style.display="none";
				document.getElementById("incorrect").style.display="block";
			}
		}
	}

	recognition.lang = 'ru-RU';
	recognition.start();
}
