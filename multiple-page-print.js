;(function () {


    var page_print = {};

    var iframe;
    this.onload = function () {


        try {
            iframe = document.createElement('<iframe frameborder="no"  style="width: 1px; height: 1px; "></iframe>');
        } catch (e) {
            iframe = document.createElement('iframe');
            iframe.style.width = "1px";
            iframe.style.height = "1px";

        }

        this.document.body.appendChild(iframe);

        iframe.onload = function () {

            iframe.contentWindow.document.execCommand("print", false, null);
            _callback(index);
            index++;
            printurl();
        };
    };

    var index = 0;
    var _callback = null;
    var _pages = [];


    function printurl() {

        if (_pages[index]) {
            alert(_pages[index]);
            iframe.src = _pages[index];
        }

    }


    page_print.start = function (pages, callback) {

        _pages = pages;
        _callback = callback;
        index = 0;
        printurl();
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