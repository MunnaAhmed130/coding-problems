// const start = (num) => {
//     let x = 0;
//     let y = 1;
//     let z;
//     let count = 2;
//     while (num >= x) {
//         z = x + y;
//         x = y;
//         y = z;
//         // console.log(y);
//     }
//     return x;
// };

// console.log(start(108));
// start(100);
const fib = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
};

const fib2 = (pos) => {
    if (pos === 0) return pos;
    const seq = [0, 1];
    for (let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);
    }
    return seq[pos];
};

// console.log(fib(15));
// console.log(fib2(15));
const time = (fn, val) => {
    const start = Date.now();
    console.log(fn(val));
    const duration = Date.now() - start;
    // return duration;
    console.log(duration);
};

console.log("fib", time(fib, 15));
console.log("fib2", time(fib2, 15));
