/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/const quotes = [{quote: "What would you do if you weren't afraid?",
  source: 'Valve',
  citation: 'wikipedia',
  year: 2016,
  }, {quote: "Move Fast and Break Things",
    source: 'Mark Zuckerburg',
    citation: 'coolquotes',
    year: 2019,
    }, {quote: "Step by Step Ferociously",
      source: 'Jeff Bezos',
      citation: 'amazon',
      year: 2018,
      },{quote: "Here's To The Crazy Ones",
        source: 'Steve Jobs',
        citation: 'twitter',
        year: 2020,
        },{quote: "Work Super Hard",
          source: 'Elon Musk',
          citation: 'youtube',
          year: 2011,
          }];



/***
 * `getRandomQuote` function
***/function getRandomQuote (quotes) {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  var randomNumberGenerator = Math.floor(Math.random() * quotes.length);
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  var randomQuote = quotes[randomNumberGenerator];
  // 3. Return the variable storing the random quote object
  console.log(randomQuote);
  return randomQuote;
}



/***
 * `printQuote` function
***/function printQuote () {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  var idk = getRandomQuote();
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  var initHTML = <p class="quote">quote text</p>
  <p class="source">quote source

    <span class="citation">quote citation</span>
    <span class="year">quote year</span> </p>

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
  if (quotes.citation) {
    <span></span>
  } else {

  }
  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  if (quotes.year) {
    <span></span>
  } else {

  }
  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);