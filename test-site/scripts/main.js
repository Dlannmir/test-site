let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/WpuNYT6.gif') {
      myImage.setAttribute('src','images/WpuNYT62.jpg');
    } else {
      myImage.setAttribute('src','images/WpuNYT6.gif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Sad Moments, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Sad Moments, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}