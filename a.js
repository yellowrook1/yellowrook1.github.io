fetch("https://www.chess.com/callback/messages/list/inbox"
).then(response => response.json())
  .then(data => console.log(data));
