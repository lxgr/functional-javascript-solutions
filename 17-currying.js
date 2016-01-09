function curryN(fn, n, arglist) {
    if (n == undefined) { n = fn.length };
    var arglist = arglist || [];
    if (n === 0) return fn.apply(null, arglist);
    return function(firstarg) {
        return curryN(fn, n-1, arglist.concat(firstarg));
    }
}

module.exports = curryN
