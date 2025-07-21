const fetch = require('node-fetch');

async function fetchGoogleHomepage() {
  try {
    const response = await fetch('https://www.google.com');
    const body = await response.text();
    console.log(body);
  } catch (error) {
    console.error('Error fetching Google homepage:', error);
  }
}

fetchGoogleHomepage();
