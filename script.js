// Element alias definition
var search = document.querySelector('#search');
var userNav = document.querySelector('#user_nav');
var userDropdown = document.querySelector('#userDropdown');
var closeButton = document.querySelector('#close_button');
var searchSuggestions = document.querySelector('#search_suggestions');
// Function definitions
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
// Event listener
search.addEventListener('focusin', searchboxOutlineOn);
search.addEventListener('focusout', searchboxOutlineOff);
userNav.addEventListener('click', userDropdownShow);
closeButton.addEventListener('click', searchSuggestionsHide);