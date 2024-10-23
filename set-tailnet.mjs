import fetch from 'node-fetch';

const { tcd, token } = {
  tcd: 'awesomename.ts.net',  // Change this to your desired name / token
  token: 'awesomename.ts.net/...'
};

fetch("https://login.tailscale.com/admin/api/tcd", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-GB,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-csrf-token": "SET_TOKEN_HERE",
    "cookie": "SET_COOKIE_HERE",
    "Referer": "https://login.tailscale.com/admin/dns",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": `{"tcd":"${tcd}","token":"${token}"}`,
  "method": "POST"
}).then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
