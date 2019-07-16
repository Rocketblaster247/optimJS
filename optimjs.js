var runProgram = function (array) {
  var index = 0;
  var _a = function () {
    if (index < array.length - 1) {
      array[index]();
      index ++;
      window.requestAnimationFrame(_a);
    }
  };
  _a();
};
var loop = function (f, i) {
  var e = i;
  var _a = function () {
    if (i != 0) {
      f(e - i);
      i --;
      window.requestAnimationFrame(_a);
    }
  };
  _a();
};
