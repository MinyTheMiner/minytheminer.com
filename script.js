const Input = document.getElementById('inputs');
const Div = document.getElementById('divs');

window.onload = () => {
	Div.innerHTML = localStorage.getItem('memos');
	Input.value = localStorage.getItem('input');
};

function save() {
	if(Input.value !== '') {
	Div.innerHTML = Div.innerHTML + '<br>' + '<p style="overflow-wrap: break-word; width: 100%; height: fit;">' + Input.value + '</p>';
	localStorage.setItem('memos', Div.innerHTML);
	localStorage.setItem('input', '');
	Input.value = '';
}};

function deletes() {
	if (confirm('are you sure?') === true) {
	localStorage.setItem('memos', '');
	Div.innerHTML = '';
}};