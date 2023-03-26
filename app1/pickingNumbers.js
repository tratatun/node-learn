


function pickingNumbers(a) {
    // Write your code here
    let first = 0, last = 1, arr = [...a].sort((a, b) => a - b), res = [];
    for(let i = 1; i <= arr.length; i++) {
        const sub = arr.slice(first, last);
        if(Math.max(...sub) - Math.min(...sub) <= 1 && sub.length > res.length) {
            res = sub;
        } else {
            first = i;
        }
        last = i + 1;
    }

    return res.length;
}

const ar = '4 6 5 3 3 1'.split(' ').map(el => + el);

console.log(pickingNumbers(ar));