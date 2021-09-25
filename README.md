
### new Function
```js
var sum = new Function('func', 'func((a, b) => console.log(a + b))');
sum((cb) => cb(12, 3))
```

### &sect; [jsonp](https://zhuanlan.zhihu.com/p/22600501?refer=study-fe)
        
``` js
<script>
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
</script>
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

# &sect; 用原生JavaScript实现事件代理

``` js
function delegate(element, targetSelector, type, handler) {
  element.addEventListener(type, function(event) {
    var event = event || window.event;
    var targets = Array.prototype.slice.call(element.querySelectorAll(targetSelector));
    var target = event.target || event.srcElement;;
    if (targets.indexOf(target) != -1) {
      return handler.apply(target, arguments);
    }
  }, false);
}
```
----

# &sect; 用正则匹配,替换目标字符串

``` js
function icdSearchProcess(srchStr, icdMap) { // srchStr为处理的字符串，icdMap为替换规则的JSON数据格式
  var reg1 = /(\[就诊\.诊断\.标准化后的诊断名称\])\s+?(包含|不包含)\s+?([\u4E00-\u9FFF\w,]+)/g;
  var reg2 = /(\[就诊\.诊断\.标准化后的疾病编码（ICD10）\])\s+?(包含|不包含)\s+?([\w,]+)/g;

  var regReplaceFunc = function (match, m1, m2, m3) { // 替换函数，m1，m2，m3 分别为对应匹配到的字符串                         
    var array = m3.split(",");
    var mm3 = "";
    for (var i = 0; i < array.length; ++i) {
      if (icdMap[array[i]] && icdMap[array[i]] !== "") {
        mm3 = mm3 + "," + icdMap[array[i]];
      }
    }

    if (mm3 !== "") {
      mm3 = mm3.substr(1);
      if (m1 === "[就诊.诊断.标准化后的诊断名称]") {
        return "[就诊.诊断.标准化后的疾病编码（ICD10）]" + " " + m2 + " " + mm3;
      } else {
        return m1 + " " + m2 + " " + mm3;
      }
    } else {
      return match;
    }
  };
  var retVal = srchStr.replace(reg2, regReplaceFunc);
  return retVal.replace(reg1, regReplaceFunc);
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
----

# &sect; arguments 转化为数组

### 使用Array的slice方法

``` js
Array.prototype.slice.call(arguments);
```
----
# ⊙ JavaScript 判断是否为数组
```js
function isArray(value){
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value); 
  } else {
    return Object.prototype.toString.call(value) === '[object Array]'; 
  }
}
```

记住“visibility:hidden”和“display：none”之间的不同，“visibility:hidden”将元素设置为不可见，但是同样在布局上占领一定空间（例如，它会被渲染成为空盒子），但是“display:none”的元素是将节点从整个render tree中移除，所以不是布局中的一部分 

## this都是指向实例化对象
