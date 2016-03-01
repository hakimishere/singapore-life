var whoseTurn = "Red";
var round = 1;
var roll;
var players = [["Red", "#FF0000"],["Blue","#0000FF"]];
var currentRedMoney = 1000;
var currentRedPosition = 1;
var previousRedPosition;
var currentBlueMoney = 1000;
var currentBluePosition = 1;
var previousBluePosition;
// var colorNow = "#FF0000";

$('#die').on('click', gamePlay);

function gamePlay() {
	rolldie();
	moveToken();
	switchPlayer();
	checkEndGame();
}

function rolldie() {
    roll = Math.ceil(Math.random() * 5);
    $('#die').attr("src", "images/d"+roll+".gif");
    console.log("Current player rolled "+roll);
};

function switchPlayer() {
	if(round%2===0) {
		whoseTurn = players[0][0];
		// colorNow = players[0][1];

	}
	else {
		whoseTurn = players[1][0];
		// colorNow = players[1][1];
	}
	round++
	$('#playerturn').html("It is "+whoseTurn+"'s turn. Round: "+round+".");//document.getElementById('playerturn').innerHTML="It is Player "+whoseTurn+"'s turn."
};

function moveToken() {
	console.log("moveToken activated")
	if (whoseTurn === "Red") {
		// console.log("Previous Red position is "+previousRedPosition);
  //   	previousRedPosition = currentRedPosition;
  //   	console.log("Current Red position is "+currentRedPosition);
  //   	console.log("New Previous Red position is "+previousRedPosition);
  //   	currentRedPosition += roll;
		// console.log("Current Red Positon is "+currentRedPosition)
		if(currentRedPosition<30) {
			console.log("Previous Red position is "+previousRedPosition);
	    	previousRedPosition = currentRedPosition;
	    	console.log("Current Red position is "+currentRedPosition);
	    	console.log("New Previous Red position is "+previousRedPosition);
	    	currentRedPosition += roll;
			console.log("Current Red Positon is "+currentRedPosition)
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
			console.log("Final Red Position is "+currentRedPosition);
		}
		else if(currentRedPosition===30) {
			console.log("Final Red Position is unchanged at "+currentRedPosition);
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
			console.log("Previous Blue position is "+previousBluePosition);
    		previousBluePosition = currentBluePosition;
    		console.log("Current Blue Positon is "+currentBluePosition)
			console.log("New Previous Red position is "+previousBluePosition);
			currentBluePosition += roll;
			console.log("Current Blue Positon is "+currentBluePosition)
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
			console.log("Final Blue Position is "+currentBluePosition);
		}
		else if(currentBluePosition===30) {
			console.log("Final Blue Position is unchanged at "+currentRedPosition);
		}
	}
}

function checkEndGame() {
	if(currentRedPosition === 30 && currentBluePosition === 30) {
		if (currentRedMoney>currentBlueMoney) {
			$('#winner').css("color", "red").text("Blue Player Wins!");
		}
		else {
			$('#winner').css("color", "blue").text("Blue Player Wins!");
		}
	}
}
