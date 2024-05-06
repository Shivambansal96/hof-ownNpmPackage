

    // Sum all elements in the array
    function sum() {
        return this.reduce((acc, curr) => acc + curr, 0);
        
    }

    // Remove duplicate elements
    function unique() {
        return Array.from(new Set(this));
    }

    // Get maximum value
    function max() {
        return Math.max(...this);
    }

    // Get minimum value
    function min() {
        return Math.min(...this);
    }

    // Replace all occurrences of a value
    function replaceAll(oldValue, newValue) {
        return this.map(item => item === oldValue ? newValue : item);
    }

    // Reverse the array
    function reverseArray() {
        return this.reverse();
    }

    // Find all occurrences of a value
    function findAll(value) {
        return this.filter(item => item === value);
    }

    // Map each element to a power of n
    function power(n) {
        return this.map(item => Math.pow(item, n));
    }

    // Get average of elements
    function average() {
        return this.sum() / this.length;
    }

    function product(array) {
        return array.reduce((acc, val) => acc * val, 1);
    }

module.exports = {

    average,
    power,
    findAll,
    reverseArray,
    replaceAll,
    min,
    max,
    sum,
    unique,
    product
}


console.log(
    average,
    power,
    findAll,
    reverseArray,
    replaceAll,
    min,
    max,
    sum,
    unique,
    product
)