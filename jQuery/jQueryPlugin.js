(function ($) {
    //插件名称
    var pluginName = 'RequisitionForm';
    //插件jQuery.data属性名称
    var dataName = 'form';

    //实例默认属性
    var Plugin = function (el, options) {
        //配置默认参数
        this.options = $.extend({}, $.fn[pluginName].defaults, options);

        this.$el = $(el);
        this.$elP = this.$el.parent();
        this.init();
    };

    //实例方法函数实现
    Plugin.prototype = {
        init: function () {
            var that = this;
            Utiliity.getAjax(that, Utiliity.url.query, null, that.query, 'application/html');
            this.registerEvent();
        },
        registerEvent: function () {
        },
        query: function () {
        }
    };

    //工具类
    var Utiliity = {
        url: {
            query: '/demo/query',
            add: '/demo/add',
        },
        getAjax: function (that, url, data, callback, contentType) {
            dataObj.requestURI(url, function (data) {
                //成功后回調函數
                callback.call(that, data);
            }, null, data, 'GET', contentType || 'application/json', true);
        }
    };

    //插件入口
    $.fn[pluginName] = function (option) {
        var _result;
        var _args = arguments;
        this.each(function () {
            var $this = $(this);
            var id = $this.attr('id');
            var data = $this.data(dataName);
            if (!data && typeof option === 'string') {//如插件初始化之前調用拋出錯誤
                throw new Error(pluginName + ' is uninitialized.');
            } else if (data && typeof option === 'object') {//如插件已經初始化再次初始化拋出錯誤
                throw new Error(pluginName + ' is initialized.');
            } else if (!data && (typeof option === 'object' || typeof option === 'undefined')) {//初始化
                var options = typeof option == 'object' && option;
                var data_api_options = $this.data();
                //options = $.extend(options, data_api_options);
                _result = $this.data(dataName, (data = new Plugin(this, options)));
            } else if (data && typeof option === 'string') {
                if (data[option]) {
                    _result = data[option].apply(data, Array.prototype.slice.call(_args, 1));
                } else {//如果插件不存在此方法拋出錯誤
                    throw new Error('Method ' + option + ' does not exist on jQuery.' + pluginName);
                }
            }
        });
        return typeof _result === 'undefined' ? this : _result;
    }

    //插件默认值(外部可修改)
    $.fn[pluginName].defaults = {
        A: 'A1',
        B: 'B2',
        C: {
            C1: 'C1',
            C2: 'C2'
        }
    };

    $(function () {
        //插件调用
        $('.RequisitionForm').RequisitionForm();
    });

})(jQuery);