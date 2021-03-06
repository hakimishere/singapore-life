$(document).ready(function () {

var whoseTurn = "Red";
var round = 1;
var roll;
var players = [["Red", "#FF0000"],["Blue","#0000FF"]];
var redMoney = 10000;
var currentRedPosition = 1;
var previousRedPosition;
var blueMoney = 10000;
var currentBluePosition = 1;
// var colorNow = "#FF0000";

$('#die').on('click', gamePlay);
// $('#rewind').on('click', location.reload());


function gamePlay() {
	rolldie()
	moveToken();
	eventSwitch();
	retirement();
	switchPlayer();
	checkEndGame();
}
//Sequence of play.

function rolldie() {
    roll = Math.ceil(Math.random() * 5); //Generates number between 1 and 5
    $('#die').attr("src", "images/d"+roll+".gif");
    // console.log("Current player rolled "+roll);
};

function moveToken() {
	// console.log("moveToken activated")
	if (whoseTurn === "Red") {
		if(currentRedPosition<30) {
			// console.log("Previous Red position is "+previousRedPosition);
	    	previousRedPosition = currentRedPosition;
	    	// console.log("Current Red position is "+currentRedPosition);
	    	// console.log("New Previous Red position is "+previousRedPosition);
	    	currentRedPosition += roll;
			// console.log("Current Red Positon is "+currentRedPosition)
			if (currentRedPosition>30) {
				currentRedPosition = 30;
			}
			$('#red').attr("id", "");
			$("#R"+currentRedPosition).attr("id", "red");
			}
		else if(currentRedPosition>30) {
			$('#red').attr("id", "");
			$("#R30").attr("id", "red");
			currentRedPosition = 30;
			// console.log("Final Red Position is "+currentRedPosition);
		}
		else if(currentRedPosition===30) {
			previousRedPosition = currentRedPosition;
			// console.log(previousRedPosition);
			// console.log("Final Red Position is unchanged at "+currentRedPosition);
		}
	}
	else if (whoseTurn === "Blue") {
		// console.log("Previous Blue position is "+previousBluePosition);
  //   	previousBluePosition = currentBluePosition;
  //   	console.log("Current Blue Positon is "+currentBluePosition)
		// console.log("New Previous Red position is "+previousBluePosition);
		// currentBluePosition += roll;
		// console.log("Current Blue Positon is "+currentBluePosition)
		if(currentBluePosition<30) {
			// console.log("Previous Blue position is "+previousBluePosition);
    		previousBluePosition = currentBluePosition;
    		// console.log("Current Blue Positon is "+currentBluePosition)
			// console.log("New Previous Red position is "+previousBluePosition);
			currentBluePosition += roll;
			// console.log("Current Blue Positon is "+currentBluePosition)
			if (currentBluePosition>30) {
				currentBluePosition = 30;
			}
			$('#blue').attr("id", "");
			$("#B"+currentBluePosition).attr("id", "blue");
		}
		else if(currentBluePosition>30) {
			$('#blue').attr("id", "");
			$('#B30').attr("id", "blue");
			currentBluePosition = 30;
			// console.log("Final Blue Position is "+currentBluePosition);
		}
		else if(currentBluePosition===30) {
			previousBluePosition = currentBluePosition;
			// console.log(previousBluePosition);
			// console.log("Final Blue Position is unchanged at "+currentBluePosition);
		}
	}
}

function eventSwitch() {
	if (whoseTurn === "Red") {
	switch(currentRedPosition) {
		case 1:
			console.log("Start");
			break;
		case 2:
			redMoney -= 5000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/birth.gif")
			break;
		case 3:
			redMoney += 4000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/holiday.gif")
			break;
		case 4:
			redMoney += 8000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/immunisation.gif")
			break;
		case 5:
			redMoney += 2000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/medal.gif")
			break;
		case 6:
			redMoney += 3000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/psle.gif")
			break;
		case 7:
			redMoney -= 2000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/injury.gif")
			break;
		case 8:
			redMoney += 10000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/parttime.gif")
			break;
		case 9:
			redMoney += 2000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/prefect.gif")
			break;
		case 10:
			redMoney += 5000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/champion.gif")
			break;
		case 11:
			redMoney += 10000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/ns.jpg")
			break;
		case 12:
			redMoney += 7500;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/ord.gif")
			break;
		case 13:
			redMoney += 5000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/firstkiss.gif")
			break;
		case 14:
			redMoney -= 10000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/heartbreak.gif")
			break;
		case 15:
			redMoney += 12000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/graduated.gif")
			break;
		case 16:
			redMoney -= 15000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/unemployment.gif")
			break;
		case 17:
			redMoney += 20000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/firstjob.gif")
			break;
		case 18:
			redMoney -= 14000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/marriage.gif")
			break;
		case 19:
			redMoney += 25000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/manager.gif")
			break;
		case 20:
			redMoney += 18000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/parent.gif")
			break;
		case 21:
			redMoney -= 25000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/crisis.gif")
			break;
		case 22:
			redMoney -= 11000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/upgrade.gif")
			break;
		case 23:
			redMoney += 50000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/business.gif")
			break;
		case 24:
			redMoney -= 35000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/bankrupt.gif")
			break;
		case 25:
			redMoney -= 45000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/cheating.gif")
			break;
		case 26:
			redMoney += 20000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/grandma.gif")
			break;
		case 27:
			redMoney += 100000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/sellbusiness.gif")
			break;
		case 28:
			redMoney -= 75000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/germany.jpg")
			break;
		case 29:
			redMoney += 161000;
			$('#red_score').text("$ "+redMoney);
			// console.log(redMoney);
			$('#gif').attr("src", "images/cpf.gif")
			break;
		case 30:
			// $('#gif').attr("src", "images/retirement.gif")		
			// redRetireRound = round;
			// console.log(redRetireRound);
			break;
		default:
			console.log("default");
		}
	}
	if (whoseTurn === "Blue") {
	switch(currentBluePosition) {
		case 1:
			console.log("Start");
			break;
		case 2:
			blueMoney -= 5000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/birth.gif")
			break;
		case 3:
			blueMoney += 4000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/holiday.gif")
			break;
		case 4:
			blueMoney += 8000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/immunisation.gif")
			break;
		case 5:
			blueMoney += 2000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/medal.gif")
			break;
		case 6:
			blueMoney += 3000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/psle.gif")
			break;
		case 7:
			blueMoney -= 2000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/injury.gif")
			break;
		case 8:
			blueMoney += 10000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/parttime.gif")
			break;
		case 9:
			blueMoney += 2000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/prefect.gif")
			break;
		case 10:
			blueMoney += 5000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/champion.gif")
			break;
		case 11:
			blueMoney += 10000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/ns.jpg")
			break;
		case 12:
			blueMoney += 7500;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/ord.gif")
			break;
		case 13:
			blueMoney += 5000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/firstkiss.gif")
			break;
		case 14:
			blueMoney -= 10000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/heartbreak.gif")
			break;
		case 15:
			blueMoney += 12000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/graduated.gif")
			break;
		case 16:
			blueMoney -= 15000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/unemployment.gif")
			break;
		case 17:
			blueMoney += 20000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/firstjob.gif")
			break;
		case 18:
			blueMoney -= 14000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/marriage.gif")
			break;
		case 19:
			blueMoney += 25000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/manager.gif")
			break;
		case 20:
			blueMoney += 18000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/parent.gif")
			break;
		case 21:
			blueMoney -= 25000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/crisis.gif")
			break;
		case 22:
			blueMoney -= 11000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/upgrade.gif")
			break;
		case 23:
			blueMoney += 50000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/business.gif")
			break;
		case 24:
			blueMoney -= 35000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/bankrupt.gif")
			break;
		case 25:
			blueMoney -= 45000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/cheating.gif")
			break;
		case 26:
			blueMoney += 20000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/grandma.gif")
			break;
		case 27:
			blueMoney += 100000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/sellbusiness.gif")
			break;
		case 28:
			blueMoney -= 75000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/germany.jpg")
			break;
		case 29:
			blueMoney += 161000;
			$('#blue_score').text("$ "+blueMoney);
			// console.log(blueMoney);
			$('#gif').attr("src", "images/cpf.gif")
			break;
		case 30:
			// $('#gif').attr("src", "images/retirement.gif")
			// blueRetireRound = round;
			// console.log(blueRetireRound);
			break;
		default:
			console.log("default");
		}
	}
}

function retirement() {
	if(whoseTurn==="Red" && currentRedPosition>=30 && currentBluePosition<30 && previousRedPosition===30) {
			switch(roll) {
				case 1:
					console.log("Case 1 Red Executed")
					redMoney -= 20000;
					$('#red_score').text("$ "+redMoney);
					console.log(redMoney);
					$('#winner').text("MBS");
					$('#gif').attr("src", "images/badgrandpa.gif")
					break;
				case 2:
					console.log("Case 2 Red Executed")
					redMoney += 35000;
					$('#red_score').text("$ "+redMoney);
					console.log(redMoney);
					$('#winner').text("Won TOTO");
					$('#gif').attr("src", "images/yeah.gif")
					break;
				case 3:
					console.log("Case 3 Red Executed")
					redMoney -= 25000;
					$('#red_score').text("$ "+redMoney);
					console.log(redMoney);
					$('#winner').text("Aiyoh, why you get another timeshare?");
					$('#gif').attr("src", "images/jialat.jpg")
					break;
				case 4:
					console.log("Case 4 Red Executed")
					$('#winner').text("Think retirement is all excitement?");
					$('#gif').attr("src", "images/retirement.gif")
					break;
				case 5:
					// console.log("Case 4 Blue Executed")
					$('#winner').text("More chilling...");
					$('#gif').attr("src", "images/lazing.gif")
					break;
			}
	}
	else if(whoseTurn==="Blue" && currentBluePosition>=30 && currentRedPosition<30 && previousBluePosition===30) {
			switch(roll) {
				case 1:
					// console.log("Case 1 Blue Executed")
					blueMoney -= 20000;
					$('#blue_score').text("$ "+blueMoney);
					$('#winner').text("MBS");
					$('#gif').attr("src", "images/badgrandpa.gif")
					break;
				case 2:
					// console.log("Case 2 Blue Executed")
					blueMoney += 35000;
					$('#blue_score').text("$ "+blueMoney);
					$('#winner').text("Win TOTO");
					$('#gif').attr("src", "images/yeah.gif")
					break;
				case 3:
					// console.log("Case 3 Blue Executed")
					blueMoney -= 25000;
					$('#blue_score').text("$ "+blueMoney);
					$('#winner').text("Aiyoh, why you get another timeshare?");
					$('#gif').attr("src", "images/jialat.jpg")
					break;
				case 4:
					// console.log("Case 4 Blue Executed")
					$('#winner').text("Think retirement is all excitement?");
					$('#gif').attr("src", "images/retirement.gif")
					break;
				case 5:
					// console.log("Case 4 Blue Executed")
					$('#winner').text("More chilling...");
					$('#gif').attr("src", "images/lazing.gif")
					break;
			}
	}
}

function switchPlayer() {
	if(round%2===0) {
		whoseTurn = players[0][0];
		// colorNow = players[0][1];
		$('#playerturn').html("It is <span id='playercolor'>"+whoseTurn+"</span>'s turn. Round: "+round+".");
		$('#playercolor').css("color", "red");
	}
	else {
		whoseTurn = players[1][0];
		// colorNow = players[1][1];
		$('#playerturn').html("It is <span id='playercolor'>"+whoseTurn+"</span>'s turn. Round: "+round+".");
		$('#playercolor').css("color", "blue");
	}
	round++
	// $('#playerturn').html("It is <span class='redcolor bluecolor'>"+whoseTurn+"</span>'s turn. Round: "+round+".");//document.getElementById('playerturn').innerHTML="It is Player "+whoseTurn+"'s turn."
};

function checkEndGame() {
	if(currentRedPosition === 30 && currentBluePosition === 30) {
		if (redMoney>blueMoney) {
			$('#winner').css("color", "red").text("Red Wins!");
			$('#winner').fadeOut(3000).fadeIn(3000).fadeOut(3000).fadeIn(3000);
			$('#gif').attr("src", "images/winred.gif");
			$('#die').off('click', gamePlay);
		}
		else if (redMoney<blueMoney) {
			$('#winner').css("color", "blue").text("Blue Wins!");
			$('#winner').fadeOut(3000).fadeIn(3000).fadeOut(3000).fadeIn(3000);
			$('#gif').attr("src", "images/winblue.gif");
			$('#die').off('click', gamePlay);
		}
		else {
			$('#winner').css("color", "gold").text("Everybody's A Winner!");
			$('#winner').fadeOut(3000).fadeIn(3000).fadeOut(3000).fadeIn(3000);
			$('#gif').attr("src", "images/wineveryone.gif");
			$('#die').off('click', gamePlay);
		}
	}
}

});