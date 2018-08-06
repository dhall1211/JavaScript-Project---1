// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [ 
{ 

	quote: "Only Thing We Have to Fear Is Fear Itself.",
	source: 'Franklin Delano Roosevelt',
	citation: '-Inaugural Address',
	year: 1932

}, 
{

	quote: "Age wrinkles the body. Quitting wrinkles the soul",
	source: 'General Douglas MacArthur' 
	
},
 {

 	quote: "A fool thinks himself to be wise, but a wise man knows himself to be a fool",
 	source: 'William Shakespeare',
 	citation: 'As You Like It, Act 5, Scene 1, Page 2'

},
{
	quote: "Trust, but verify",
	source: 'Ronald Reagan'

},
{

	quote: "We cannot help everyone, but everyone can help someone",
	source: 'Ronald Reagan'

}
];

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote () {
	var i = Math.floor(Math.random() * quotes.length);
	return quotes[i];

}


// Create the printQuote funtion and name it printQuote
function printQuote () {

let quotes = getRandomQuote();
let htmlQuote = "";

 			
 			htmlQuote += '<p class="quote">' + quotes.quote + '</p>';
 			htmlQuote += '<p class="source">' + quotes.source;
	

		 if (quotes.hasOwnProperty ('citation')){
				htmlQuote  += '<span class="citation">' + quotes.citation +'</span>';

		} if (quotes.hasOwnProperty ('year')){
			htmlQuote += '<span class="year">' +quotes.year + '</span>';

		} htmlQuote += '</p>';

		document.getElementById('quote-box').innerHTML = htmlQuote;


}
			





printQuote();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);