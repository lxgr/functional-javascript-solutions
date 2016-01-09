module.exports = function arrayMap(arr, fn) {
    return arr.reduce((acc, curr) => acc.concat([fn(curr)]), []);
}
