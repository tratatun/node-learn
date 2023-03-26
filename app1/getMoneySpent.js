function getMoneySpent(keyboards, drives, b) {
    let maxPrice = -1;
    let currPrice = 0;
    for(let i = 0; i<keyboards.length; i++) {
        for(let j = 0; j < drives.length; j++) {
            currPrice = keyboards[i] + drives[j];
            if(currPrice<b && currPrice>maxPrice) {
                maxPrice = currPrice;
            }else if (currPrice === b){
                return b;
            }
        }
    }
    return maxPrice;
}


const keyboards = '40 50 60'.split(' ').map(el => + el);
const drives = '5 8 12'.split(' ').map(el => + el);
const b = 60;

console.log(getMoneySpent(keyboards, drives, b));