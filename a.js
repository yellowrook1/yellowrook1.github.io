fetch("https://www.chess.com/callback/messages/list/inbox", {
  "headers": {
    "accept": "application/json, text/plain, */*",
  },
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then(response => response.json())
  .then(data => console.log(data));
