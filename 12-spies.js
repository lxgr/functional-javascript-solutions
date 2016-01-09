function Spy(target, method) {
    var thespy = { count: 0 };
    var old = target[method];
    function wrapper() {
        thespy.count++;
        old.apply(old, arguments);
    }
    target[method] = wrapper;
    return thespy;
}

module.exports = Spy
