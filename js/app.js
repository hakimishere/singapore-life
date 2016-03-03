function Game(Player) {
    var playerRed = new Player("Red", 10000, "R");
    var playerBlue = new Player("Blue", 10000, "B");
    var currentPlayer = playerRed;
    var previousPlayer;
    var round = 1;
    var roll;

    var rolldie = function () {
        roll = Math.ceil(Math.random() * 5); //Generates number between 1 and 5
        $('#die').attr("src", "images/d"+roll+".gif"); //Selects the right numbered die gif
    };

    var moveToken = function (player) {
        if(player.currentPosition<30) {
            player.previousPosition = player.currentPosition;
            player.currentPosition += roll;
            if(player.currentPosition>30) {
              player.currentPosition = 30;
            }
            $('#'+player.color).attr("id", ""); //Removes token at previous position
            $("#"+player.tag+player.currentPosition).attr("id", player.color); //Moves token to current position
        }
        else if(player.currentPosition>30) {
            $('#'+player).attr("id", ""); //Removes token at previous position
            $("#"+player.tag+player.currentPosition).attr("id", player.color); //Moves token to current position
            player.currentPosition = 30; //Resets current position to 30 so that retirement can run
        }
        else if(player.currentPosition===30) {
            player.previousPosition = player.currentPosition; //Sets previous position to 30. One round has passed since retirement.
      }
    };

    var eventSwitch = function (player) { //Events that will activate if either player lands on a space.
        switch(player.currentPosition) {
            case 1:
                console.log("Start");
                break;
            case 2: //When a player lands on space 2...
                player.money -= 5000; //Alters a player's money balance.
                $('#'+player.color+'_score').text("$ "+player.money); //Replaces the money figure on the scoreboard for player landing on space.
                $('#gif').attr("src", "images/birth.gif"); //Produces the respective gif for the space within the 'movie screen'
                break;
            case 3:
                player.money += 4000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/holiday.gif");
                break;
            case 4:
                player.money += 8000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/immunisation.gif");
                break;
            case 5:
                player.money += 2000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/medal.gif");
                break;
            case 6:
                player.money += 3000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/psle.gif");
                break;
            case 7:
                player.money -= 2000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/injury.gif");
                break;
            case 8:
                player.money += 10000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/parttime.gif");
                break;
            case 9:
                player.money += 2000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/prefect.gif");
                break;
            case 10:
                player.money += 5000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/champion.gif");
                break;
            case 11:
                player.money += 10000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/ns.jpg");
                break;
            case 12:
                player.money += 7500;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/ord.gif");
                break;
            case 13:
                player.money += 5000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/firstkiss.gif");
                break;
            case 14:
                player.money -= 10000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/heartbreak.gif");
                break;
            case 15:
                player.money += 12000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/graduated.gif");
                break;
            case 16:
                player.money -= 15000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/unemployment.gif");
                break;
            case 17:
                player.money += 20000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/firstjob.gif");
                break;
            case 18:
                player.money -= 14000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/marriage.gif");
                break;
            case 19:
                player.money += 25000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/manager.gif");
                break;
            case 20:
                player.money += 18000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/hdb.gif");
                break;
            case 21:
                player.money -= 25000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/crisis.gif");
                break;
            case 22:
                player.money -= 11000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/upgrade.gif");
                break;
            case 23:
                player.money += 50000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/business.gif");
                break;
            case 24:
                player.money -= 35000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/bankrupt.gif");
                break;
            case 25:
                player.money -= 45000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/cheating.gif");
                break;
            case 26:
                player.money += 20000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/parent.gif");
                break;
            case 27:
                player.money += 100000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/sellbusiness.gif");
                break;
            case 28:
                player.money -= 75000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/germany.jpg");
                break;
            case 29:
                player.money += 161000;
                $('#'+player.color+'_score').text("$ "+player.money);
                $('#gif').attr("src", "images/cpf.gif");
                break;
            case 30:
                $('#gif').attr("src", "images/retirement.gif");
                break;
            default:

            }
          };

    var retirement = function (player1, player2) { //Events activated when the first player to retire takes her turn.
        if(player1.currentPosition>=30 && player2.currentPosition<30 && player1.previousPosition===30) {
            switch(roll) {
                case 1:
                  player1.money -= 20000;
                  $('#'+player1.color+'_score').text("$ "+player1.money);
                  $('#winner').text("MBS");
                  $('#gif').attr("src", "images/badgrandpa.gif");
                  break;
                case 2:
                  player1.money += 35000;
                  $('#'+player1.color+'_score').text("$ "+player1.money);
                  $('#winner').text("Won TOTO");
                  $('#gif').attr("src", "images/yeah.gif");
                  break;
                case 3:
                  player1.money -= 25000;
                  $('#'+player1.color+'_score').text("$ "+player1.money);
                  $('#winner').text("Aiyoh, why you get another timeshare?");
                  $('#gif').attr("src", "images/jialat.jpg");
                  break;
                case 4:
                  $('#winner').text("Think retirement is all excitement?");
                  $('#gif').attr("src", "images/retirement.gif");
                  break;
                case 5:
                  $('#winner').text("More chilling...");
                  $('#gif').attr("src", "images/lazing.gif");
                  break;  
        }
      }
    };

    var switchPlayer = function (player) { //Switches player each round.
      if (round%2===0) { //Blue takes turn on even rounds
          currentPlayer = playerRed; //When Blue's turn is over, switch playerRed to currentPlayer.
          previousPlayer = playerBlue;
      }
      else { //Blue takes turn on odd rounds
          currentPlayer = playerBlue; //When Blue's turn is over, switch playerBlue to currentPlayer.
          previousPlayer = playerRed;
      }
      round++;
      $('#playerturn').html("It is <span id='playercolor'>"+currentPlayer.color+"</span>'s turn. Round: "+round+"."); //
      $('#playercolor').css("color", currentPlayer.color);
    };

    var checkEndGame = function(player1, player2) {
        if(player1.currentPosition === 30 && player2.currentPosition === 30) { //When both players have retired i.e. landed on Retirement space...
            if (player1.money>player2.money) { //When playerRed has more money than playerBlue at end.
              $('#winner').css("color", player1.color).text(player1.color+" Wins!");
              $('#winner').fadeOut(3000).fadeIn(3000).fadeOut(3000).fadeIn(3000);
              $('#gif').attr("src", "images/winred.gif");
              $('#die').off('click', this.play);
            }
            else if (player1.money<player2.money) { //When playerBlue has more money than playerRed at end.
              $('#winner').css("color", player2.color).text(player2.color+" Wins!");
              $('#winner').fadeOut(3000).fadeIn(3000).fadeOut(3000).fadeIn(3000);
              $('#gif').attr("src", "images/winblue.gif"); //Plays blue celebration gif within 'movie screen'
              $('#die').off('click', this.play);
            }
            else {
              $('#winner').css("color", "gold").text("Everybody's A Winner!"); //When both players have the same amount of money in the end.
              $('#winner').fadeOut(3000).fadeIn(3000).fadeOut(3000).fadeIn(3000);
              $('#gif').attr("src", "images/wineveryone.gif");
              $('#die').off('click', this.play);
            }
        }
    };

    this.clickEventListener = function () { //Function calling functions in the correct sequence of play.
        $('#die').on('click', function () {
          rolldie();
          moveToken(currentPlayer);
          eventSwitch(currentPlayer);
          retirement(currentPlayer, previousPlayer);
          checkEndGame(playerRed, playerBlue);
          switchPlayer(currentPlayer);
       });
    };

    this.play = function () {
      this.clickEventListener();
      };
    };

function Player (color, money, tag) {
  this.color = color;
  this.tag = tag;
  this.money = money;
  this.currentPosition = 1;
  this.previousPosition = 0;
  };

var game = new Game(Player);
game.play();

$('#rewind').on('click', function(){
  location.reload();
});