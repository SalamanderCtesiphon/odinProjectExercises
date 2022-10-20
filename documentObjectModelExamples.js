// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = "Hey, I'm red!";
paragraph.style.color = 'red';

container.appendChild(paragraph);


const blueHeader = document.createElement('h3');
blueHeader.classList.add('blueHeader');
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = 'blue';

container.appendChild(blueHeader);

const banner = document.createElement('div');
banner.classList.add('banner');
banner.style.backgroundColor = 'pink';
banner.style.border = '2px solid black';

const subHeader = document.createElement('h1');
subHeader.classList.add('subHeader');
subHeader.textContent = "I'm a div!";
banner.appendChild(subHeader);

const bannerParagraph = document.createElement('p');
bannerParagraph.classList.add('bannerParagraph');
bannerParagraph.textContent = "ME TOO!";
banner.appendChild(bannerParagraph);





container.appendChild(banner);