/**
 * @author LD
 */
var ActionForm = function() {
    this.toJson = function(ids) {
        if (!(ids instanceof Array)) {
            console.log('Parameter must be an array!');
            return null;
        }
        try {
            var json = {};
            for (var i = 0; i < ids.length; i++) {
                var obj = $('#' + ids[i]);
                var key = obj.attr('name');
                var val = obj.val();
                json[key] = val == '' || isNaN(val) ? val : parseInt(val);
            }
            return json;
        } catch (e) {
            console.log('String convert to json failed!');
            return null;
        }
    };
};

/**
 * show message
 */
var Message = function(msg, title) {
    this.ICONS = {
        ERROR : 'error',
        QUESTION : 'question',
        INFO : 'info',
        WARNING : 'warning'
    };

    this.msg = msg == undefined ? '确定当前操作?' : msg;
    this.title = title == undefined ? '提示消息' : title;

    this.show = function(timeout) {
        timeout = (timeout != undefined && !isNaN(timeout)) ? timeout : 3000;
        $.messager.show({
            title : this.title,
            msg : this.msg,
            timeout : timeout,
            style : {
                top : document.body.scrollTop + document.documentElement.scrollTop,
            }
        });
    };

    this.alert = function(icon) {
        icon = icon == undefined ? this.ICON.INFO : icon;
        $.messager.alert(this.title, this.msg, icon);
    };

    this.confirm = function(callback, param) {
        $.messager.confirm(this.title, this.msg, function(r) {
            if (r && callback && typeof (callback) === 'function') {
                callback(param);
            }
        });
    };
};