const ruleset = [
    { limit: 100 },
    { number: 3, word: "Fizz" },
    { number: 5, word: "Buzz" },
    { number: 10, word: "Bizz" },
];

// console.log(ruleset[1].number);

const fizzBuzz = (ruleset) => {
    for (let i = 1; i <= ruleset[0].limit; i++) {
        let output = "";

        for (let j = 1; j < ruleset.length; j++) {
            if (i % ruleset[j].number === 0) {
                output += ruleset[j].word;
            }
        }

        if (output == "") {
            output = i;
        }
        console.log(output);
    }
};

fizzBuzz(ruleset);
