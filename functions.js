function choose_word(words){
    const word_raw = words[Math.floor(Math.random()*words.length)];
    return word_raw.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const printResult = function(answer, excepted, results){
    let result = "";
    let found = false;

    if(answer == excepted)
        found = true;
    
    if(answer.length != 5)
        console.log("TIP : Words are 5 characters long");

    for(let i = 0; i < answer.length; i++){
        if(answer.charAt(i) == excepted.charAt(i)){
            result = result + "🟩";
        }
        else if(excepted.includes(answer.charAt(i)))
            result = result + "🟨";
        else
            result = result + "⬛";
    }

    console.log(result);
    results = results + "\n" + result;
    return {found: found, results: results};
}

exports.choose_word = choose_word;
exports.readline = readline;
exports.printResult = printResult;