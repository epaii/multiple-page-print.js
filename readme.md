
download it

```javascript
    https://epaii.github.io/multiple-page-print.js/multiple-page-print.js
```


usege

```html
<body>
<button onclick="start()">start</button>

<script>


    function start(){
        multiple_page_print.start(["a.html", "b.html"], function (index) {
            alert(index);
        })
    }


</script>

</body>
```


打印时间间隔设置

```javascript
    multiple_page_print.wait(2000).start(["a.html", "b.html"], function (index) {
                                               alert(index);
                                           })
```