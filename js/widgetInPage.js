
console.log("testtt")

$(document).ready(function() {
	var active = false;

	function insertWidget() {
		//get location to insert
		var iconImg = chrome.extension.getURL('images/logo_icon.png');
		var buttonRow = $("._39bj");
		var ourButton = $("<li></li>").html(
			"<a class=\"snippetParseButton\" role=\"button\" href=\"#\" style=\"background-image:url(\'" +iconImg+ "\')\"></a>"
		);
		
	    buttonRow.prepend(ourButton);
	    console.log("button added");

		$(".snippetParseButton").on("click",function(){
	    	console.log("pressed button");
	    	beginWidget();
	  	});
	}

	function beginWidget() {
		if(active){
			active = false;
			console.log("deactivate");
			$(".widgetMenu").remove();
		}
		else{
			active = true;
			console.log("activate");
			var textBox = $("._1mf._1mj");
			$("._5irm._1_73").before(
				`<div class="widgetMenu">
					<form class="widgetMenuForm">
						<label class="radio-inline"><input type="radio" name="optradio" id="latex" checked>Latex</label>
						<label class="radio-inline"><input type="radio" name="optradio" id="js">Javascript</label>
						<label class="radio-inline"><input type="radio" name="optradio" id="py">Python</label>
						<label class="radio-inline"><input type="radio" name="optradio" id="cpp">C++</label>
						<label class="radio-inline"><input type="radio" name="optradio" id="raw">Raw Text</label>
					</form>
				</div>`
			)
			var selected = 'latex'
			$('.widgetMenuForm').append("<a class=\"widgetMenuPreview\" role=\"button\" href=\"#\">Preview ON/OFF</a>")
			$(".widgetMenuPreview").on("click",function(){
	    		console.log("toggled preview");
	    		//togglePreview();
	  		});

			$('.widgetMenuForm').change(function(){
            	selected = $("input[name='optradio']:checked").attr('id');
            	if(selected=='latex'){
            		$(".widgetMenuPreview").show();
            	}else{
            		$(".widgetMenuPreview").hide();
            	}
            	console.log(selected);
            	//changeInput(selected);
    		});
			console.log("prepended");
			//call preview-code
			//initialize()
		}
	}

  	insertWidget();
	
	$(window).resize(function() {
  		if(!$(".snippetParseButton")[0]){
  			insertWidget()
  		}
	});
});