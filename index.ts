import $ = require('jquery');
import mymodule = require('./mymodule.ts');

$(function () {
  console.log('hello, world. this is index.js');
  mymodule.test();

  var test2: string = mymodule.test2();
  console.log(test2);
});