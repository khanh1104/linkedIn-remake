var search = document.querySelector('#search');
function searchboxOutlineOn() {
	search.style.outline = 'auto';
}
function searchboxOutlineOff() {
	search.style.outline = 'none';
}
search.addEventListener("focusin", searchboxOutlineOn)
search.addEventListener("focusout", searchboxOutlineOff)