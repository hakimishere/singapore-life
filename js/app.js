var whoseTurn = "X";
var whichTurn = 1;
var players = [["Red", "#FF0000"],["Blue","#0000FF"]];
var colorNow = "#87CEFA";

$('#die').on('click', rolldie);

function rolldie() {
    var x = Math.ceil(Math.random() * 5);
    $('#die').attr("src", "images/d"+x+".gif");
};