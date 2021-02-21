window.onload = function () {

}

/*
onload = event attribute
load = event type
function () {} = eventHandler or eventListener
 */

//1.Inline event
/*
<div onclick="hmm"></div>
<script>
    function hum() { ... };
 */

//2.Default event
/*
Example : form submit event
 */

//3.Standard event
let btn = document.getElementById("btn");
btn.addEventListener("click",function () {
    btn.innerHTML += "wow";
});