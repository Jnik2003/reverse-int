module.exports = function reverse (n) {
    const res = Math.abs(n) + '';
    return +res.split('').reverse().join('');
}
