let letters = "abcdefghijklmnopqrstuvwxyz";

let allKeys = Array.from(letters);

let lettersContainer = document.querySelector(".the-letters");

allKeys.forEach(e => {

    let letter = document.createElement("button");

    letter.innerHTML = e.toUpperCase();

    letter.className = "letter-box";

    lettersContainer.appendChild(letter);

})

const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let randomKayNumber = Math.trunc((Math.random() * (Object.keys(words).length)));

let randomKayName = Object.keys(words)[randomKayNumber];

let randomValues = Object.values(words)[randomKayNumber];

let randomValueNumber = Math.trunc(Math.random() * (randomValues.length));

let randomValueName = randomValues[randomValueNumber];

document.querySelector("p span").innerHTML = randomKayName;

let guessLetters = document.querySelector(".guess-letters");

let chosenWord = Array.from(randomValueName.toLowerCase());

let correct = 0;

chosenWord.forEach((ele) => {

    let spans = document.createElement("span");

    if (ele === " ") {

        spans.className = "space";
        correct++;

    } else {

        spans.className = "guess-spans";

    }

    guessLetters.appendChild(spans);

})

let guessSpans = document.querySelectorAll(".guess-letters span");

let buttons = document.querySelectorAll(".letter-box");

let wrongTry = 0;

let theDraw = document.querySelector(".the-draw")

buttons.forEach((letter) => {

    letter.addEventListener("click", (ele) => {

    let check = false;

    ele.target.classList.add("clicked");

    clicked = ele.target.innerHTML.toLowerCase();

        chosenWord.forEach((wordLetter, WordIndex) => {

            if (clicked === wordLetter) {
                check = true;
                correct++
                document.getElementById("success").play();
                guessSpans.forEach((spans, spansIndex) => {

                    if (spansIndex === WordIndex) {

                        spans.innerHTML = clicked.toUpperCase();

                        spans.style.borderBottomColor = "#32CD32";
                    }

                })

            }

        })

        if (check !== true) {

            wrongTry++;
            theDraw.classList.add(`wrong-${wrongTry}`);
            document.getElementById("fail").play();
        }
        if (wrongTry === 8) {

            document.querySelectorAll(".the-letters button").forEach((ele) => {
                ele.style.pointerEvents = "none"
            });

            gameOver();
        }
        if (correct === chosenWord.length) {

            document.querySelectorAll(".the-letters button").forEach((ele) => {
                ele.style.pointerEvents = "none"
            });

            gameWin();

        }
    })
})

function gameOver() {
    let over = document.createElement("div");

    over.innerHTML = `Game Over, The Word Is ${randomValueName}`;

    over.className = "popup";

    document.body.appendChild(over);
}

function gameWin() {
    let win = document.createElement("div");

    win.innerHTML = `Congratulation, You Found The Word And Saved The Man`;

    win.className = "popup";

    document.body.appendChild(win);
}











