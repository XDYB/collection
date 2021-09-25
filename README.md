

### &sect; [jsonp](https://zhuanlan.zhihu.com/p/22600501?refer=study-fe)
        
``` js
var url = 'http://api.ygxqqx.com/weather.php?callback=__onGetData__';
window.__onGetData__ = function(ret) {
  console.log(ret);
}
function jsonp(url) {
  var script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
  document.head.removeChild(script);
}
jsonp(url);
```
---

# &sect; [闭包](https://zhuanlan.zhihu.com/p/22486908?refer=study-fe)

> 「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包。

> [闭包的优点] 保存作用域，隔离环境
    
``` js
var local = "变量";
function foo() {
  console.log(local);
}
```
---


# &sect; for...in 遍历的方式带来的情况

### The reason is that one construct:

``` js
var a = []; // Create a new empty array.
a[5] = 5;   // Perfectly legal JavaScript that resizes the array.

for (var i = 0; i < a.length; i++) {
  // Iterate over numeric indexes from 0 to 5, as everyone expects.
  console.log(a[i]);
}

/* Will display:
   undefined
   undefined
   undefined
   undefined
   5
*/
```

### can sometimes be totally different from the other:

``` js
var a = [];
a[5] = 5;
for (var x in a) {
  // Shows only the explicitly set index of "5", and ignores 0-4
  console.log(x);
}

/* Will display:
   5
*/
```

### Also consider that JavaScript libraries might do things like this, which will affect any array you create:

``` js
// Somewhere deep in your JavaScript library...
Array.prototype.foo = 1;

// Now you have no idea what the below code will do.
var a = [1, 2, 3, 4, 5];
for (var x in a){
  // Now foo is a part of EVERY array and 
  // will show up here as a value of 'x'.
  console.log(x);
}

/* Will display:
   0
   1
   2
   3
   4
   foo
*/
```

