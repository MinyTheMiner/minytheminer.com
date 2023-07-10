const Input = document.getElementById('inputs');
const Div = document.getElementById('divs');

window.onload = () => {
	Div.innerHTML = localStorage.getItem('htmls');
	Input.value = localStorage.getItem('input');
};

Input.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key !== 'aa') {
	Div.innerHTML = Input.value;
	localStorage.setItem('htmls', Div.innerHTML);
	localStorage.setItem('input', Input.value);
}});
