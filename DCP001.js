// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const listOfNumbers = [10, 15, 2, 7];
const sum = 17;
// console.log(k);

const shortMatchSum = (list, k) => {
    for (const i of list) {
        list.forEach((num) => {
            if (num != i) {
                if (i + num == k) {
                    console.log(`${num} + ${i} = ${k} (true)`);
                    list.splice(list.indexOf(i), 1);
                }
            }
        });
    }
};

const mediumMatchSum = (list, k) => {
    for (let i = 0; i < list.length - 1; i++) {
        // console.log(list.length);
        list.forEach((num) => {
            // console.log(num);
            if (num != list[i]) {
                if (list[i] + num == k) {
                    console.log(`${num} + ${list[i]} = ${k} (true)`);
                    console.log(true);
                    list.splice(i, 1);
                }
            }
            /* -------------------------------------------- */
            // num != list[i] &&
            //     list[i] + num === k &&
            //     (console.log(`${num} + ${listOfNumbers[i]} = ${k} (true)`),
            //     console.log(true),
            //     list.splice(i, 1));
            /* -------------------------------------------- */
            // num != list[i]
            //     ? list[i] + num === k &&
            //       (console.log(`${num} + ${listOfNumbers[i]} = ${k} (true)`),
            //       console.log(true),
            //       list.splice(i, 1))
            //     : console.log(false);
            /* -------------------------------------------- */
            //  const sum = listOfNumbers[i] + num;
            // console.log(`${num} + ${listOfNumbers[i]} = ${sum} `);
        });
    }
    // console.log(listOfNumbers[i]);
};

// const listOfNumbers = [10, 15, 2, 7];

const matchSum = (list, k) => {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        for (let j = 0; j < list.length; j++) {
            if (list[j] != list[i]) {
                if (list[i] + list[j] == k) {
                    console.log(`${list[i]} + ${list[j]} = ${k} (true)`);
                    list.splice(i, 1);
                }
            }
        }
    }
    // console.log(listOfNumbers[i]);
};

matchSum(listOfNumbers, sum);

// listOfNumbers.forEach((num) => console.log(num));
// listOfNumbers.map((num) => console.log(num));
