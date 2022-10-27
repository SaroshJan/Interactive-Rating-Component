let container = document.querySelector('.container');
let btnSubmit = document.querySelector('.submit-btn');
let numberContainer = document.querySelector('.number-container');

let ratingNumber;
numberContainer.addEventListener('click', (e) => {
    ratingNumber = e.target.value;
});

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (!ratingNumber) {
        alert('Plaese select a number!');
        return;
    }

    container.innerHTML = '';

    let figureElement = document.createElement('figure');
    figureElement.className = 'figure-js';

    let figureImg = document.createElement('img');
    figureImg.className = 'img-js';
    figureImg.src = '/images/illustration-thank-you.svg';
    figureImg.alt = 'thank you';

    let caption = document.createElement('figcaption');
    caption.className = 'caption-js';
    let captionText = document.createTextNode(`You selected ${ratingNumber} out of 5`);
    caption.appendChild(captionText);

    figureElement.appendChild(figureImg);
    figureElement.appendChild(caption);

    let noteContainer = document.createElement('article');
    noteContainer.className = 'note-container';

    let noteHeading = document.createElement('h1');
    noteHeading.className = 'note-heading';
    let headingText = document.createTextNode('Thank you!');
    noteHeading.appendChild(headingText);

    let notePara = document.createElement('p');
    notePara.className = 'note-para';
    let paraText = document.createTextNode(`We appreciate you taking the time to give a rating.If you ever need more support,don't hesitate to get in touch!`);
    notePara.appendChild(paraText);

    noteContainer.append(...[noteHeading, notePara]);

    container.append(...[figureElement, noteContainer]);

    btnSubmit.blur();
});