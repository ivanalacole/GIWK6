//You are given coins of different denominations and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need to make up that amount. If that 
// amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays 
// and logical operators.  Do not have anyone give you the answer or solve this problem for you.


let changeCoins = function (coins, amount) {
    const table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;

    for (let coin of coins) {
        for (let i = 0; i < table.length; i++) {
            if (coins <= i) {
                let idx = i - coin;
                let potentialAmount = table[idx] + 1;
                table[i] = Math.min(potentialAmount, table[i]);
            }
        }
    }
    return table[table.length - 1] === Infinity ? -1 : table[table.length - 1]
}