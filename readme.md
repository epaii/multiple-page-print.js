
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