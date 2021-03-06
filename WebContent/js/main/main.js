/**
 * @author LD
 */
var MENU = [ {
    title : '主菜单',
    submenus : [ {
        title : '主页',
        url : 'index.html'
    }, {
        title : '登录',
        url : 'login.html'
    }, {
        title : '主菜单3',
        url : '345.htm'
    } ]
}, {
    title : '次菜单',
    submenus : [ {
        title : '次菜单1',
        url : '次123.htm'
    }, {
        title : '次菜单2',
        url : '次234.htm'
    }, {
        title : '次菜单3',
        url : '次345.htm'
    } ]
}, {
    title : '次菜单',
    submenus : [ {
        title : '次菜单1',
        url : '次123.htm'
    }, {
        title : '次菜单2',
        url : '次234.htm'
    }, {
        title : '次菜单3',
        url : '次345.htm'
    } ]
} ];

/**
 * init menu to menu-panel
 */
function initMenu() {
    $('#menu-panel').accordion({
        fit : true
    });
    for ( var i = 0; i < MENU.length; i++) {
        var title = MENU[i].title;
        var submenus = $('<UL>').addClass('submenus-panel');
        for ( var j = 0; j < MENU[i].submenus.length; j++) {
            var menu = MENU[i].submenus[j];
            $('<LI>').addClass('submenu-item-panel').appendTo(submenus).html(menu.title).data('menu', menu);
        }
        $('#menu-panel').accordion('add', {
            title : title,
            selected : false,
            content : submenus,
        });
    }
    $('.submenu-item-panel').click(function() {
        $('.submenu-item-panel').removeClass('selected');
        $(this).addClass('selected');
        var menu = $(this).data('menu');
        if (menu.url) {
            addTab(menu.title, menu.url);
        }
        ;
    });
}

/**
 * init Tabs
 */
function initTabs() {
    $('#content-panel').tabs({
        fit : true,
        tabHeight : 25,
        border : false,
    });
}

/**
 * add page to content-panel
 * 
 * @param title
 * @param url
 * @param closable
 */
function addTab(title, url, closable) {
    closable = !closable ? true : closable;
    var tab = $('#content-panel');
    if (tab.tabs('exists', title)) {
        tab.tabs('select', title);
    } else {
        var content = $('<IFRAME>').attr({
            frameborder : 0,
            src : url,
        });
        tab.tabs('add', {
            title : title,
            closable : closable,
            content : content,
        });
    }
    ;
}

$(function() {
    initMenu();
    initTabs();
});
