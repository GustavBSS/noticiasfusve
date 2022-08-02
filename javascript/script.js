//Proteção
<script>
if (document.addEventListener) {
	document.addEventListener("contextmenu", function(e) {
		e.preventDefault();
		return false;
	});
} else { //Proteção para versões antigas do IE
    document.attachEvent("oncontextmenu", funtion(e) {
		e = e || window.event;
		e.returnValue = false;
	return false;
	});
}
</script>