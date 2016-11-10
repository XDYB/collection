# 收集
# [Wiki] (https://github.com/ygxqqx/collection/wiki)

* [jsonp] (https://zhuanlan.zhihu.com/p/22600501?refer=study-fe)

    * jsonp原理
        
```
        <script>
            function showData(ret){
                console.log(ret);
            }
        </script>
        <script src="http://api.jirengu.com/weather.php?callback=showData"></script>
```

* [闭包] (https://zhuanlan.zhihu.com/p/22486908?refer=study-fe)

    * 「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包。
    
```
      var local = "变量";
      function foo() {
         console.log();
      }

```

* 用原生JavaScript实现事件代理

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
