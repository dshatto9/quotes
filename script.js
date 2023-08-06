// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service 
    of others."`,
    person: ` Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people
    or things."`,
    person: ` Albert Einstein`
}, {
    quote: `"At his best, man is the noblest of all animals; seperated from law
    and justice he is the worst"`,
    person: ` Aristotle`
}, {
    quote: `"Be yourself; everyone else is already taken."`,
    person: ` Oscar Wilde`
}, {
    quote: `"I hate myself and I want to die."`,
    person: ` Kurt Cobain`
}, {
    quote: `"If you're going through hell, keep going."`,
    person: ` Winston Churchill`
}, {
    quote: `"You never fail until you stop trying."`,
    person: ` Albert Einstein`
}, {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: ` Lao Tzu`
}, {
    quote: `"Our lives begin to end the day we become silent about things
    that matter."`,
    person: ` Martin Luther King, Jr.`
}, {
    quote: `"Remember that not getting what you want is sometimes a wonderful
    stroke of luck."`,
    person: ` Dalai Lama`
}];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})