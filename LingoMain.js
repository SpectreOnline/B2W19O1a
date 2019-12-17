var InputLetters = [
    "",
    "",
    "",
    "",
    ""
]


var randomselector = Math.floor(Math.random() * words.length);
var attempts = 0;
var loops = 0;
var gridpos = 0;
var gridcontainer = document.getElementById('gridcontainer');
var id = attempts + "-" + loops;

Answer = Array.from(words[randomselector]);

startlingo();

function startlingo() {


    for (var a = 0; a < Answer.length; a++) {
        console.log(Answer[a]);
    }
    //document.getElementById("0-1").innerHTML = Answer[0];
    console.log(gridcontainer);
    //gridcontainer.children[0].innerHTML = Answer[0];
}



function CheckAns(Input) {
    Input = Input.toLowerCase();
    for (var i = 0; i < Input.length; i++) {
        InputLetters[i] = Input;
        console.log(Input.charAt(i));
        InputLetters[i] = Input.charAt(i);
    }

    for (var loops = 0; loops < Input.length; loops++) {
        //var id = attempts + "-" + o;
        var writeletter = document.getElementById(id);
        writeletter.innerHTML = InputLetters[loops];
        if (Answer.includes(InputLetters[loops])) {
            //var id = attempts + "-" + o;
            var checkedletter = document.getElementById(id)
            checkedletter.style.backgroundColor = "Yellow";
        } else if (InputLetters[loops] == Answer[loops]) {
            //var id = attempts + "-" + o;
            var checkedletter = document.getElementById(id)
            checkedletter.style.backgroundColor = "Green";
        }
    }
    attempts++;
}

//attempts + "-" + letter