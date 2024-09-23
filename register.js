document.querySelector('.main').addEventListener('submit', function(event) {
event.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('pwd').value.trim();
const phone = document.getElementById('phno').value.trim();
const age = document.getElementById('age').value.trim();
const address = document.getElementById('address').value.trim();
const gender = document.querySelector('input[name="gender"]:checked');
if (!name || !email || !password || !phone || !age || !address || !gender) {
alert('Please fill out all fields.');
return;
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
alert('Please enter a valid email address.');
return;
}
alert('Form submitted successfully!');

});



function printer(num) {
// Write your code below this line
let result = '';
let prevDigit = num;
do{
console.log(num)
prevDigit--;
result+=prevDigit;
}while(prevDigit>0);
console.log(result)
}
