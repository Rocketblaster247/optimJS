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
var loop = function (f, n, t, fpi) {
  var jbnNow = Date.now();
  var e = f.toString().split("function () {")[1];
  console.log(e);
  e = e.toString().split("}")[e.toString().split("}").length];
  console.log(e);
  var _a = function () {
    
  };
  _a();
};
