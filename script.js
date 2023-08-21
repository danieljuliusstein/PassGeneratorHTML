const copy = document.querySelector("#copy-button");
const generate = document.querySelector(".generate-button");
const button = document.querySelector('#button'); 
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let symbols = "!@#$%^&*()_+[]{}?><";
let numbers = "1234567890";

function copy_func() {
  event.preventDefault();
  var copyText = document.getElementById("pass");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
}

function generate_func() {
  event.preventDefault();
  let password = "";
  var text = document.getElementById('pass');
  var numInput = document.getElementById("number").value;
  
  for (let i = 0; i < numInput; i++) {
    if (document.getElementById('accept').checked) {
      password += lowercase[Math.floor(Math.random() * lowercase.length)];
    }
  }
  for (let i = 0; i < numInput; i++) {
    if (document.getElementById('accept1').checked) {
      password += uppercase[Math.floor(Math.random() * uppercase.length)];
    }
  }  
  for (let i = 0; i < numInput; i++) {
    if (document.getElementById('accept2').checked) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    }
  }  
  for (let i = 0; i < numInput; i++) {
    if (document.getElementById('accept3').checked) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }
  }  
  let newPassword = ""; 
  
  for (let i = 0; i < numInput; i++) {
    newPassword += password[Math.floor(Math.random() * password.length)];  
  }
  text.value = newPassword; 
  console.log(text.value);
}
