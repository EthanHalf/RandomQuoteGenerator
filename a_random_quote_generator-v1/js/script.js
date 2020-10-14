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
          console.log(quotes);


/***
 * `getRandomQuote` function
***/function getRandomQuote () {
  console.log(quotes);
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
getRandomQuote("this is the quotes parameter logs out");


/***
 * `printQuote` function
***/function printQuote () {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  
  let quoteObject = getRandomQuote();
  
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  let html = `
    <p class ="quote"> ${quoteObject['quote']}</p>
    <p class ="source"> ${quoteObject['source']}`;
  // if statements to concatenate <span> element to html if quote object contains citation, year and/or tags
  if (quoteObject['citation']) {
      html += `<span class="citation"> ${quoteObject['citation']}</span>`;
  } if (quoteObject['year']) {
      html += `<span class ="year"> ${quoteObject['year']}</span>`;
  } if (quoteObject['tags']) {
      html += `<span class="tags"> <br> Tags: ${quoteObject['tags'].join(", ")} </span>`
  }
  html += '</p>';
  // returns full html string in quote-box id
  document.getElementById('quote-box').innerHTML = html;
  // creates a random RGB color and changes background to that color
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let randomRGB = `rgb(${red}, ${blue}, ${green})`;
  document.body.style.backgroundColor = randomRGB;
  }

// automatically calls printQuote() every 5 seconds
printQuote();

setInterval(printQuote, 5000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);