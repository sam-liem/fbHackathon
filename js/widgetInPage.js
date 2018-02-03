
console.log("testtt")

function insertWidget() {
	//get location to insert
	var buttonRow = document.getElementsByClassName("_39bj");
	var ourButton = document.createElement("li");
	ourButton.innerHTML = "<a class=\".sparseParseButton\" role=\"button\" href=\"#\"></a>";
    buttonRow[0].appendChild(ourButton);
    console.log(buttonRow.length);
    //Appending to DOM 
}

$(document).ready(function() {
	insertWidget();
});