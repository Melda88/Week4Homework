$(document).ready(function() {

	shields = ['assets/images/brath.png','assets/images/lanister.png','assets/images/stark.png','assets/images/targ.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newshields();
	newGame();

	function newshields () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		//console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imageshield = $('<img>');
			imageshield.attr('data-num', numbers[i]);
			imageshield.attr('src', shields[i]);
			imageshield.attr('alt', 'shields');
			imageshield.addClass('shieldImage')
			$('#shields').append(imageshield);
		}
	}
//new game here ----
	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randomIntFromInterval(19,120);

		$('.value').text(numberToGuess);


		$('.shieldImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);

		    if (counter == numberToGuess){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      //console.log(wins)
		      $('#shields').empty();
		      newshields();
		      newGame();
		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        //console.log(losses)
		        $('#shields').empty();
		        newshields();
		        newGame();
		    }
		});
	}

});