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
  e = e.toString().split("}")[e.toString().split("}").length-2];
  console.log(e);
  e = 'for (var ' + escape(n) + ' = 0; ' + escape(n) +' < ' + fpi + '; ' + escape(n) + '++){' + e + '}';
  var index = 0;
  var _a = function () {
    if (index < (t*fpi) + fpi) {
      eval(e);
      window.requestAnimationFrame(_a);
      index ++;
    } else {
      
    }
  };
  _a();
};
