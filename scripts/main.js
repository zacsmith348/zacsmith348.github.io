var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cola-can.jpg') {
      myImage.setAttribute ('src','images/Pepsi-Can.png');
    } else {
      myImage.setAttribute ('src','images/cola-can.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Coca cola is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Coca cola is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}