const quotes = [{
    quote: '"Knowing dosent get the job done."',
    writer: '-king kong'
}, {
    quote: '"All our dreams can come true, if we have the courage to pursue them."',
    writer: '-Walt Disney'
}, {
    quote: '"Success isnt overnight. It"s when everyday you get a little better than the day before. It all adds up."',
    writer: '-Dwayne Jhonson'
}, {
    quote: '"Energy and persistence conquer all things."',
    writer: '-Benjamin Franklin'
}, {
    quote: '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."',
    writer: '-Thomas Edison'
}, {
    quote: '"Victory has a thousand fathers, but defeat is an orphan."',
    writer: '-John F kennedy'
}, {
    quote: '"Strive not to be a success, but rather to be of value."',
    writer: '-Albert Einstein'
}, {
    quote: '"When something is important enough, you do it even if the odds are not in your favor."',
    writer: '-Elon Musk'
},]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote; 

    writer.innerHTML = quotes[random].writer;
})