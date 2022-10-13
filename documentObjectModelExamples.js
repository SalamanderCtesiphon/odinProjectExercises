// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const numberOne = document.createElement('p');
numberOne.classList.add('numberOne');
numberOne.textContent = "Hey, I'm red!";
numberOne.style.color = 'red';

const numberTwo = document.createElement('h3');
numberTwo.classList.add('numberTwo');
numberTwo.textContent = "I'm a blue h3!";
numberTwo.style.color = 'blue';


container.appendChild(content);
container.appendChild(numberOne);
container.appendChild(numberTwo);
