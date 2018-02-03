
console.log("testtt")

$(document).ready(function() {
	var active = false;

	function insertWidget() {
		//get location to insert
		var buttonRow = $("._39bj");
		var ourButton = $("<li>").html("<a class=\"snippetParseButton\" role=\"button\" href=\"#\"></a>");
	    buttonRow.prepend(ourButton);
	    console.log("button added");
	}

	function beginWidget() {
		if(active){
			active = false;
			console.log("deactivate");
			$(".dropup").remove();
		}
		else{
			active = true;
			console.log("activate");
			var textBox = $("._1mf._1mj");
			$("._5irm._1_73").before(
				`<div class="widgetMenu">
					<form>
						<label class="radio-inline"><input type="radio" name="optradio">Latex</label>
						<label class="radio-inline"><input type="radio" name="optradio">Javascript</label>
						<label class="radio-inline"><input type="radio" name="optradio">Python</label>
					</form>
				</div>`
			)
  			//$(".dropdown-toggle").dropdown("toggle");
			console.log("prepended");
		}
	}

  	insertWidget();
	

	$(".snippetParseButton").on("click",function(){
    	console.log("pressed button");
    	beginWidget();
  	});
});