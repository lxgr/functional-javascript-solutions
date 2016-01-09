function myreduce(arr, fn, initial, pos) {
    if (typeof(pos) === "undefined") { pos = 0; }
    if (typeof(initial) === "undefined") {
        return myreduce(arr, fn, arr[0], 1);
    }
    if (pos === arr.length) { return initial; }
    return myreduce(arr, fn, fn(initial, arr[pos], pos, arr), pos+1);
}

//console.log(myreduce([1,2,3], (a, b) => a+b));

module.exports = myreduce
