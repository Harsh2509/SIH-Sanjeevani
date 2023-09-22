let counter = 0;
let cards = [
    {
        'name' : 'lion',
        'img' : './photos/lion.png'
    },
    {
        'name' : 'monkey',
        'img' : './photos/monkey.png'
    },
    {
        'name' : 'dog',
        'img' : './photos/dog.png'
    },
    {
        'name' : 'camel',
        'img' : './photos/camel.png'
    },
    {
        'name' : 'snake',
        'img' : './photos/snake.png'
    },
    {
        'name' : 'elephant',
        'img' : './photos/elephant.png'
    },
];

const parentElement = document.querySelector('#card-section');
const doublecard = cards.concat(cards);
const shuffle = Array.from(doublecard).sort(() => 0.5 - Math.random());

let Clickingcount = 0;
let firstCard = "";
let secondCard = "";

const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((currentElem) => {
        currentElem.classList.add('card_match');
    })
};

const resetGame = () => {
    firstCard = "";
    secondCard = "";
    Clickingcount = 0;
    
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((currentElem) => {
        currentElem.classList.remove('card_selected');
    })
};


parentElement.addEventListener('click', () => {
    let currentCard = event.target;

    if(currentCard.id === "card-section")
        return false;

    Clickingcount++;

    if(Clickingcount < 3)
    {
        if(Clickingcount === 1)
        {
            counter++;
            firstCard = currentCard.parentNode.dataset.name;
            currentCard.parentNode.classList.add('card_selected');
        }
        else
        {
            counter++;
            secondCard = currentCard.parentNode.dataset.name;
            currentCard.parentNode.classList.add('card_selected');

        }

        if(firstCard !== "" && secondCard !== "")
        {
            if(firstCard === secondCard)
            {
                setTimeout(() => {
                    card_matches();
                    resetGame();
                }, 1000);
                
            }
            else
            {
                setTimeout(() => {
                    resetGame();
                }, 1000);
            }
        }
    }
})
console.log(counter);

for(let i = 0 ; i < shuffle.length ; i++)
{
    const child = document.createElement('div');
    child.classList.add('card');
    child.dataset.name = shuffle[i].name;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card');

    const back_div = document.createElement('div');
    back_div.classList.add('back-card');

    back_div.style.backgroundImage = `url(${shuffle[i].img})`;


    parentElement.appendChild(child);

    child.appendChild(front_div);
    child.appendChild(back_div);
}