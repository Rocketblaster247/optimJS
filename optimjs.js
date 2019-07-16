var optimLog = false;
var runProgram = function (array) {
  var index = 0;
  var _a = function () {
    if (index < array.length) {
      eval(array[index]);
      index ++;
      window.requestAnimationFrame(_a);
    }
  };
  _a();
};
//loop(
//  f = function to loop,
//  n = name of the number to increment,
//  t = times the number should increment,
//  fpi = frames per iteration
//);
var loop = function (f, a, b) {
  var jbnNow = Date.now();
  var index = 0;
  var _a = function () {
    for (var i = 0; i < (b || 30); i ++) {
      if (index < a) {
        f((index*b)+i);
        index ++;
        window.requestAnimationFrame(_a);
      }
    }
  };
  _a();
  var s = Date.now() - jbnNow;
  var fps = Math.floor((a*b)/Math.floor(s/1000));
  console.log("OptimJS: Loaded function in " + jbnNow + "ms (" + fps + "fps)");
};
