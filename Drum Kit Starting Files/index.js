document.addEventListener("keydown", function (event) {
    allKeysSpecified(event.key);
}
)

var len = (document.querySelectorAll(".drum").length);

for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        document.querySelector("."+this.innerHTML).classList.add("white");
        allKeysSpecified(this.innerHTML);
        buttonAnimation(this.innerHTML);
    }
    )
}

function buttonAnimation(buttonInnerHtml){
    var activeButton = document.querySelector("."+ buttonInnerHtml);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
        activeButton.classList.remove("white");
    },150);
}

function allKeysSpecified(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var kickbass = new Audio("sounds/snare.mp3");
            kickbass.play();
            break;
        case "d":
            var snare = new Audio("sounds/tom-1.mp3");
            snare.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "k":
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.play();
            break;
        case "l":
            var tom3 = new Audio("sounds/tom-4.mp3");
            tom3.play();
            break;
        default:
            alert("Hey,key is not there");
    }
}




