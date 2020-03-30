console.log('hello world');

const myButton = document.getElementById ('myButton');

name.style.color = 'salmon';

name.textContent = "Click Me!";

myButton.addEventListerer('click', logOut);

function logOut(){
    myButton.addEventListener('click', changeName);
    myButton.addEventListener('click', function(){});
}
