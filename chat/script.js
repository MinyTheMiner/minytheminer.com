const cmInput = document.getElementById('cm-input');
const cmButton = document.getElementById('cm-button');
const waitLoad = document.getElementById('wait-load');
const cmDeleteButton = document.getElementById('cm-delete-button');
const chats = document.getElementById('chats');
const cmHash = document.getElementById('cm-hash');

var username = 'anonymous';
var sections = 1;

let chatNumber;
let locations = '';
let leftarrow

const quotes = [
'chalk',
'graphic',
'lecture',
'absent',
'outlet',
'angle',
'heir',
'syndrome',
'adviser',
'morsel',
'side',
'awful',
'cafe',
'wild',
'marriage',
'twin',
'baby',
'seed',
'tongue',
'difference',
'wind',
'radiation',
'definition',
'suggest',
'overall',
'widen',
'champion',
'drive',
'if',
'estimate',
'haunt',
'native',
'attraction',
'wrong',
'sacrifice',
'lose',
'kick',
'quote',
'beat',
'roar',
'reverse',
'meal',
'pain',
'execution',
'beautiful',
'matrix',
'cooperation',
'return',
'gradient',
'quality',
];

window.onload = () => {
    const max = Math.ceil(51);
    const min = Math.floor(1);
    document.title = 'Chat - ' + quotes[Math.floor(Math.random() * (max - min + 1)) + min];
    chats.innerHTML = localStorage.getItem("chat");
    cmInput.value = localStorage.getItem("chatinput");
    chatNumber = localStorage.getItem("chatn");
    section.innerHTML = localStorage.getItem("sections");
};

cmDeleteButton.addEventListener("click", () => {
    if (localStorage.getItem("chat") !== null){
    if (confirm('Are you sure you are going to delete this?') == true) {
        chats.innerHTML = '';
        chatNumber = 0;
        section.innerHTML = '';
        localStorage.setItem("chatn", chatNumber);
        localStorage.removeItem("chat");
        localStorage.removeItem("sections");
    } else {
        return;
    }
}});

cmButton.addEventListener('click', async () => {
    addNewMessage();
});

document.addEventListener('keydown', (e) => {
    console.log(e.key);
});

cmHash.addEventListener('click', async () => {
    window.location.hash = prompt('Where?(only number please.)');
});

function addNewMessage() {
    if (cmInput.value !== '') {
    chatNumber++;
    const timestamp = new Date().toLocaleTimeString();
    if (cmInput.value.startsWith("--")) {
        chats.innerHTML = chats.innerHTML + '<p id="' + chatNumber + '">' + chatNumber + ' ' + username + ' ' + timestamp + '</p> <p>' + cmInput.value + '</p>';
        section.innerHTML = section.innerHTML + '<br> <p><a href="#' + chatNumber + '";">section: ' + chatNumber + '</a></p>';
        localStorage.setItem("sections", section.innerHTML);
    }else {
        if (cmInput.value.startsWith("<<")) {
            leftarrow = cmInput.value;
            leftarrow = leftarrow.replace(/<</g, "");
            console.log(leftarrow);
            chats.innerHTML = chats.innerHTML + '<p id="' + chatNumber + '">' + chatNumber + ' ' + username + ' ' + timestamp + '</p> <p><a href="#' + leftarrow + '">' + cmInput.value + '</a></p>';
        }else {
            chats.innerHTML = chats.innerHTML + '<p id="' + chatNumber + '">' + chatNumber + ' ' + username + ' ' + timestamp + '</p> <p>' + cmInput.value + '</p>';
        }
    }
    //cm.innerHTML = `${cm.innerHTML} \n <span style="color: rgb(25, 25, 25);">${chatNumber}</span> ${username} ${timestamp} \n ${cmInput.value}`;
    localStorage.setItem("chatn", chatNumber);
    localStorage.setItem("chat", chats.innerHTML);
    localStorage.setItem('chatinput', '');
    cmInput.value = '';

}};

function changeSection(event) {
    window.location.hash = event;
};

function changeSections() {
    locations = window.location.hash;
    console.log(locations)
    locations = locations.replace(/#/g, "");
    console.log(locations);

};

/*cmInput.addEventListener('keydown', (e) => {
        console.log(e.key);
       if (!e.shiftKey && e.key === 'Enter') {
        console.log(cmInput.value.startsWith("--"));
            addNewMessage();
        }
});*/

/*
const cmInput = document.getElementById('cm-input');
const cmButton = document.getElementById('cm-button');
const waitLoad = document.getElementById('wait-load');
const cmDeleteButton = document.getElementById('cm-delete-button');
const chats = document.getElementById('chats');
const cmHash = document.getElementById('cm-hash');

var username = 'anonymous';
var sections = 1;

let chatNumber;
let locations = '';
let leftarrow

const quotes = [
'chalk',
'graphic',
'lecture',
'absent',
'outlet',
'angle',
'heir',
'syndrome',
'adviser',
'morsel',
'side',
'awful',
'cafe',
'wild',
'marriage',
'twin',
'baby',
'seed',
'tongue',
'difference',
'wind',
'radiation',
'definition',
'suggest',
'overall',
'widen',
'champion',
'drive',
'if',
'estimate',
'haunt',
'native',
'attraction',
'wrong',
'sacrifice',
'lose',
'kick',
'quote',
'beat',
'roar',
'reverse',
'meal',
'pain',
'execution',
'beautiful',
'matrix',
'cooperation',
'return',
'gradient',
'quality',
];

window.onload = () => {
    const max = Math.ceil(51);
    const min = Math.floor(1);
    document.title = 'Chat - ' + quotes[Math.floor(Math.random() * (max - min + 1)) + min];
    chats.innerHTML = localStorage.getItem("chat");
    cmInput.value = localStorage.getItem("chatinput");
    chatNumber = localStorage.getItem("chatn");
    section.innerHTML = localStorage.getItem("sections");
};

cmDeleteButton.addEventListener("click", () => {
    if (localStorage.getItem("chat") !== null){
    if (confirm('Are you sure you are going to delete this?') == true) {
        chats.innerHTML = '';
        chatNumber = 0;
        section.innerHTML = '';
        localStorage.setItem("chatn", chatNumber);
        localStorage.removeItem("chat");
        localStorage.removeItem("sections");
    } else {
        return;
    }
}});

cmButton.addEventListener('click', async () => {
    addNewMessage();
});

document.addEventListener('keydown', (e) => {
    console.log(e.key);
});

cmHash.addEventListener('click', async () => {
    window.location.hash = prompt('Where?(only number please.)');
});

//prompt
function addNewMessage() {
    if (cmInput.value !== '') {
    chatNumber++;
    const timestamp = new Date().toLocaleTimeString();
    if (cmInput.value.startsWith("--")) {
        chats.innerHTML = chats.innerHTML + '<p id="' + chatNumber + '">' + chatNumber + ' ' + username + ' ' + timestamp + '</p> <p id="z' + chatNumber + '">' + cmInput.value + '</p>';//<button onclick="navigator.clipboard.writeText(z' + chatNumber + ');">Copy</button>';
        section.innerHTML = section.innerHTML + '<br> <a href="#' + chatNumber + '";">section: ' + chatNumber + '</a>';
        localStorage.setItem("sections", section.innerHTML);
    }else {
        if (cmInput.value.startsWith("<<")) {
            leftarrow = cmInput.value;
            leftarrow = leftarrow.replace(/<</g, "");
            console.log(leftarrow);
            chats.innerHTML = chats.innerHTML + '<p id="' + chatNumber + '">' + chatNumber + ' ' + username + ' ' + timestamp + '</p> <a id="z' + chatNumber + '" href="#' + leftarrow + '">' + cmInput.value + '</a>';//<button onclick="navigator.clipboard.writeText(z' + chatNumber + ');">Copy</button>';
        }else {
            chats.innerHTML = chats.innerHTML + '<p id="' + chatNumber + '">' + chatNumber + ' ' + username + ' ' + timestamp + '</p> <p id="z' + chatNumber + '">' + cmInput.value + '</p>';//<button onclick="navigator.clipboard.writeText(z' + chatNumber + '.value); alert("made it")">Copy</button>';
            }
        }
    }
    //cm.innerHTML = `${cm.innerHTML} \n <span style="color: rgb(25, 25, 25);">${chatNumber}</span> ${username} ${timestamp} \n ${cmInput.value}`;
    localStorage.setItem("chatn", chatNumber);
    localStorage.setItem("chat", chats.innerHTML);
    localStorage.setItem('chatinput', '');
    cmInput.value = '';

};

function changeSection(event) {
    window.location.hash = event;
};

function changeSections() {
    locations = window.location.hash;
    console.log(locations)
    locations = locations.replace(/#/g, "");
    console.log(locations);

};

cmInput.addEventListener('keydown', (e) => {
        console.log(e.key);
       if (!e.shiftKey && e.key === 'Enter') {
        console.log(cmInput.value.startsWith("--"));
            addNewMessage();
        }
});
*/