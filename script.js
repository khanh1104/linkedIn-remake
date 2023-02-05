var search = document.querySelector('#search');
var userNav = document.querySelector('#user_nav');
var userDropdown = document.querySelector('#userDropdown');
function searchboxOutlineOn() {
	search.style.outline = 'auto';
}
function searchboxOutlineOff() {
	search.style.outline = 'none';
}
function userDropdownShow() {
	userDropdown.style.display = 'block';
}
search.addEventListener('focusin', searchboxOutlineOn);
search.addEventListener('focusout', searchboxOutlineOff);
userNav.addEventListener('click', userDropdownShow);