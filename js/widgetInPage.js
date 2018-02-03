
console.log("testtt")

$(document).ready(function() {
	var active = false;

	function insertWidget() {
		//get location to insert
		var buttonRow = document.getElementsByClassName("_39bj");
		var ourButton = document.createElement("li");
		ourButton.innerHTML = "<a class=\"snippetParseButton\" role=\"button\" href=\"#\"></a>";
	    buttonRow[0].appendChild(ourButton);
	    console.log(buttonRow.length);
	    //Appending to DOM 
	}

	function beginWidget() {
		if(active){
			active = false;
			console.log("deactivate");
			var mainArea = $("_5irm _1_73");
			mainArea.r
		}
		else{
			active = true;
			console.log("activate");
			var textBox = $("_1mf _1mj");
			$("_5irm _1_73").innerHTML =
				`<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle" id="menu1" type="button" data-toggle="dropdown">Dropdown Example
					<span class="caret"></span></button>
					<ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
					  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
					  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
					  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
					  <li role="presentation" class="divider"></li>
					  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li>    
					</ul>
				</div>`
			console.log("prepended");
		}
	}

	insertWidget();

	$(".snippetParseButton").on("click",function(){
    	console.log("pressed button");
    	beginWidget();
  	});
});