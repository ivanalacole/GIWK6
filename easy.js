arr = [10, 14, 25, 89];

function avg(arr) {
    let sum = 0;

    // Iterate the elements of the array
    arr.forEach(function (item) {
        sum += item;
    });

    // Returning the average of the numbers
    return sum / arr.length;
}

console.log(avg(arr));
