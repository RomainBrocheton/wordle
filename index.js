const functions = require('./functions');
const fs = require('fs');
const config = require('./package.json');

console.log("Welcome on the Wordle CLI App !");
console.log("Version " + config.version);

// Loading words
const rawdata = fs.readFileSync('./words.json');
const words = JSON.parse(rawdata).words;

// Choosing word
const word = functions.choose_word(words);
console.log("⬛⬛⬛⬛⬛");

let guess = 0;
let results = "";

// Playing
var askWishes = function() {
    guess++;

    functions.readline.question("(" + guess + "/5) What's your guess ? ", answer => {
        data = functions.printResult(answer, word, results);
        found = data.found;
        results = data.results;

        if(found || guess == 5){
            console.log("------------------------------------------");
            if(found)
                console.log("Congratulations, you found the word !");
            else
                console.log("Sorry ! You did not find the word in time ! The word was " + word);
            
            console.log(results);

            functions.readline.close();
        }
        else
            askWishes();
    });
}

askWishes();