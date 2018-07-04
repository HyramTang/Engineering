# FRONT-END Engineering Article

## Front-end Engineering
- [谁能介绍下web前端工程化？](https://www.zhihu.com/question/24558375)

- [前端工程--张云龙](https://github.com/fouber/blog/labels/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B)

- [项目目录结构规范](https://segmentfault.com/a/1190000002471120)

## JavaScript Module
- [Javascript模块化编程（一）：模块的写法](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)

- [Javascript模块化编程（二）：AMD规范](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)

- [Javascript模块化编程（三）：require.js的用法](http://www.ruanyifeng.com/blog/2012/11/require_js.html)

- [RequireJS和AMD规范](http://javascript.ruanyifeng.com/tool/requirejs.html)

- [CommonJS规范](http://javascript.ruanyifeng.com/nodejs/module.html)

- [JavaScript 模块化七日谈](https://huangxuan.me/js-module-7day/#/)

## Closure
- [闭包--MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

- [学习Javascript闭包（Closure）](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

- [闭包--廖雪峰](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143449934543461c9d5dfeeb848f5b72bd012e1113d15000)

``` Javascript
var oneClosure= (function($/*被引用模块的内部变量*/){
    
    var BOOT={
        start:function(){
            MODULE1.init();
        }
    }

    var MODULE1={
        init:function(){
            //do something...
        },
        initHTML:function(){
            //do something...
        }
    }

    var MODULE2={
        count:function(){
            MODULE1.initHTML();
        }
    }

    var MODULE3={
        sum:function(){
            MODULE2.count();
        },
        refresh:function(){
            //do something...
        }
    }

    //Public method
    return {
        init:function(){
            this.MODULE1.init();
        },
        refresh:function(){
            this.MODULE.refresh();
        }
    }

    //Page load
    $(function(){
        BOOT.start();
    });

})(jQuery/*引用的模块*/);

oneClosure.refresh();//OK
oneClosure.MODULE1.init();//Failed
```

## Code Guid
- [前端编码规范：HTML/CSS/JS --AlloyTeam](http://imweb.github.io/CodeGuide/)

- [编码规范集合](https://github.com/ecomfe/spec)

- [Airbnb Javascript Style Guid](https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md)