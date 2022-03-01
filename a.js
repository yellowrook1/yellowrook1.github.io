fetch("https://www.chess.com/callback/messages/list/inbox").then(response => response.json())
  .then(data => {console.log(data);
  for (var i = 0; i < data.length; i++){  fetch("https://www.chess.com/callback/messages/show/"+data[i].user.username).then(response => response.json())
  .then(data => {for (var i = 0; i < data.length; i++){console.log("Time: " + data[i].createDate + " From: " + data[i].from_user.username + " To: " + data[i].to_user.username + " Message: " + data[i].message)}})
  }
})
