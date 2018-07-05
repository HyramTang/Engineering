var closure= (function($/*被引用模块的内部变量*/){

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

closure.refresh();//OK
closure.MODULE1.init();//Failed