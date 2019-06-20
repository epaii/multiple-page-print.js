;(function () {


    var page_print = {};

    var iframe;
    this.onload = function () {


        try {
            iframe = document.createElement('<iframe frameborder="no"  style="width: 0px; height: 0px; "></iframe>');
        } catch (e) {
            iframe = document.createElement('iframe');
            iframe.style.width = "0px";
            iframe.style.height = "0px";

        }

        this.document.body.appendChild(iframe);

        iframe.onload = function () {

            iframe.contentWindow.print();
            //iframe.contentWindow.document.execCommand("print", false, null);
            if (_callback) _callback(index);
            index++;
            setTimeout(function () {
                printurl();
            }, _time)

        };
    };

    var index = 0;
    var _callback = null;
    var _befor_callback = null;
    var _finish_callback = null;
    var _pages = [];
    var _time = 1000;


    function printurl() {

        if (_pages[index]) {

            iframe.src = _pages[index];
        } else {
            if (_finish_callback)
                _finish_callback();
        }

    }

    page_print.wait = function (time) {
        _time = time - 0;
        return page_print;
    };


    page_print.start = function (pages, callback, befor_callback) {

        _pages = pages;
        _callback = callback;
        index = 0;
        _befor_callback = befor_callback;
        printurl();
        return page_print;
    };

    page_print.finish = function (finish_callback) {
        _finish_callback = finish_callback;
        return page_print;
    };


    if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
        module.exports = page_print;
    } else if (typeof define === 'function' && define.amd) {

        define(function () {
            return page_print;
        });

    } else {
        this.multiple_page_print = page_print;
    }
}).call(window);