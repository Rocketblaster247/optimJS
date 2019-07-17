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
  b = b || 30;
  var now = Date.now();
  var index = 0;
  var _a = function () {
    for (var i = 0; i < (b); i ++) {
      f((index*b)+i);
    }
    if (((index*b)+i) < (a*b)) {
      index ++;
      window.requestAnimationFrame(_a);
    } else {
      var s = Date.now() - now;
      var fps = Math.floor((a*b)/(s/1000));
      console.log("OptimJS: Loaded " + (a*b) + " frames in " + Math.floor(s/1000) + " seconds (" + fps + "fps)");
      return;
    }
  };
  _a();
  
};
