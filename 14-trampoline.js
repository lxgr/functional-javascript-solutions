function trampoline(fn, num) {
  // You probably want to implement a trampoline!
  var i;
  for (i = 0; i < num; i++) {
    fn();
  }
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(operation, num)
}

