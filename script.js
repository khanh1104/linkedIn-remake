var search = document.querySelector('#search');
var userNav = document.querySelector('#user_nav');
var userDropdown = document.querySelector('#userDropdown');
var closeButton = document.querySelector('#close_button');
var searchSuggestions = document.querySelector('#search_suggestions');
var workDropdown = document.querySelector('#workDropdown_container');
var workNav = document.querySelector('#work_nav');
var body = document.querySelector('body');
var workDropdownCloseButton = document.querySelector('#close_button2');
var pageBody = document.querySelector('#body');
function searchboxOutlineOn() {
	search.style.outline = 'auto';
}
function searchboxOutlineOff() {
	search.style.outline = 'none';
}
function userDropdownShow() {
	userDropdown.style.display = 'block';
}
function searchSuggestionsHide() {
	searchSuggestions.style.display = 'none';
}
function workDropdownShow() {
	workDropdown.style.display = 'block';
	body.style.overflow = 'hidden';
}
function workDropdownHide() {
	workDropdown.style.display = 'none';
	body.style.overflow = 'auto';
}
search.addEventListener('focusin', searchboxOutlineOn);
search.addEventListener('focusout', searchboxOutlineOff);
userNav.addEventListener('click', userDropdownShow);
closeButton.addEventListener('click', searchSuggestionsHide);
workNav.addEventListener('click', workDropdownShow);
workDropdownCloseButton.addEventListener('click', workDropdownHide);
=======
search.addEventListener('focusin', searchboxOutlineOn);
search.addEventListener('focusout', searchboxOutlineOff);
userNav.addEventListener('click', userDropdownShow);
