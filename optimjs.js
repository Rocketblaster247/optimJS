var optimLog = false;
var runProgram = function (array) {
  var index = 0;
  var _a = function () {
    if (index < array.length - 1) {
      eval(array[index]);
      index ++;
      window.requestAnimationFrame(_a);
    }
  };
  _a();
};
var loop = function (f, i) {
  var jbnNow = Date.now();
  var e = i;
  var _a = function () {
    if (i != 0) {
      f(e - i);
      i --;
      window.requestAnimationFrame(_a);
    } else {
      console.log(Date.now()-jbnNow);
    }
  };
  _a();
};
