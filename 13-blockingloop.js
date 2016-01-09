function repeat(op, num) {
    if (num <= 0) return;
    op();
    setImmediate(repeat, op, num-1);
}

module.exports = repeat
