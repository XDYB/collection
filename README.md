# 收集
# [Wiki] (https://github.com/ygxqqx/collection/wiki)

# [jsonp] (https://zhuanlan.zhihu.com/p/22600501?refer=study-fe)

    * jsonp原理
        
```
        <script>
            function showData(ret){
                console.log(ret);
            }
        </script>
        <script src="http://api.jirengu.com/weather.php?callback=showData"></script>
```
---

# [闭包] (https://zhuanlan.zhihu.com/p/22486908?refer=study-fe)

    * 「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包。
    
```
      var local = "变量";
      function foo() {
         console.log();
      }


```
---

# 用原生JavaScript实现事件代理

```
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

# 用正则匹配,替换目标字符串
```
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
# for...in 遍历的方式带来的情况

### The reason is that one construct:
```
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
```
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
```
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

