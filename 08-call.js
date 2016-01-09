function duckCount() {
    return Array.prototype.slice.call(arguments).filter(obj => Object.prototype.hasOwnProperty.call(obj, "quack")).length
    /*items = Array.prototype.slice.call(arguments)
    return (function duckCountInt(items) {
        console.log(items);
        if(items.length == 0) { return 0; }
        if(Object.prototype.hasOwnProperty.call(items[0], "quack")) { return 1 + duckCountInt(items.slice(1)); }
        else { return duckCountInt(items.slice(1)); }
    })(Array.prototype.slice.call(arguments)); */
}

module.exports = duckCount
