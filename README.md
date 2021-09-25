

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
