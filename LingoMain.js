var InputLetters = [
    "",
    "",
    "",
    "",
    ""
]


var randomselector = Math.floor(Math.random() * words.length);
var attempts = 0;
var loops = 1;
var gridpos = 0;
var gridcontainer = document.getElementById('gridcontainer');
var winPoints = 0;
var id = attempts + "-" + loops;
var firstletter = document.getElementById('0-1');


Answer = Array.from(words[randomselector]);

startlingo();

function startlingo() {
    for (var a = 0; a < Answer.length; a++) {
        console.log(Answer[a]);
    }
    firstletter.innerHTML = Answer[0];
    firstletter.style.backgroundColor = 'Green';

}



function CheckAns(Input) {
    Input = Input.toLowerCase();
    for (var i = 0; i < Input.length; i++) {
        InputLetters[i] = Input;
        console.log(Input.charAt(i));
        InputLetters[i] = Input.charAt(i);
    }

    for (var loops = 1; loops <= Input.length; loops++) {
        id = attempts + "-" + loops;
        console.log(id);
        var writeletter = document.getElementById(id);
        writeletter.innerHTML = InputLetters[loops - 1];
        if (Answer.includes(InputLetters[loops - 1])) {
            var checkedletter = document.getElementById(id)
            checkedletter.style.backgroundColor = "Yellow";
        }
        if (InputLetters[loops - 1] === Answer[loops - 1]) {
            var checkedletter = document.getElementById(id)
            checkedletter.style.backgroundColor = "Green";
            winPoints++;
        }
        if (winPoints == 5) {
            alert("U heeft het woord geraden");
        }
    }
    winPoints = 0;
    attempts++;
    if (attempts == 5) {
        var InputField = document.getElementById('InputField');
        InputField.style.display = 'none';
        var StartButton = document.getElementById('StartButton');
        StartButton.style.display = "none";
        alert("U heeft verloren");
    }

}
