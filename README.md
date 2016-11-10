# 收集

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

