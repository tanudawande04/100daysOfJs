//find the fibonacci series using recursion

const fibonacci = (n) => {
    if (n < 0) {
        return "Fibonacci is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);

}

console.log(fibonacci(6)); // Output: 8

// print fibonachi seres up to n
const fibonacciSeries = (n) => {
    let series = [];
    for (let i = 0; i < n; i++) {
        series.push(fibonacci(i));
    }
    return series;
}
console.log(fibonacciSeries(6)); // Output: [0, 1, 1, 2, 3, 5]






//using recursion to print fibonacci series
const fibonacciSeriesRecursion = (n, series = []) => {
    if (n < 0) {
        return "Fibonacci is not defined for negative numbers";
    }
    if (series.length === n) {
        return series;
    }
    const nextValue = series.length < 2 ? series.length : series[series.length - 1] + series[series.length - 2];
    series.push(nextValue);
    return fibonacciSeriesRecursion(n, series);
}
console.log(fibonacciSeriesRecursion(6)); // Output: [0, 1, 1, 2, 3, 5]