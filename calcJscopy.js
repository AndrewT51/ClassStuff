'strict mode';

$(document).ready(function(){
  var equationArray = [];
	var total = 0;
	var nextOperand;
	var numAsString = 0;
	var displayNeedsToBeCleared = true;
	$('#display').text(total);
	var $display = $('#display');
	var alreadyHasDecimalDot = false;

function numberHandler(nextNumber){
	 	numAsString = (displayNeedsToBeCleared) ? '' + nextNumber : numAsString + '' + nextNumber;
	 	// if(numAsString.length > 7){ numAsString = numAsString.substring(0,7);}
	 
	 	nextOperand = parseFloat(numAsString);
		$display.text(numAsString);
		// console.log(equationArray);
		displayNeedsToBeCleared = false;	
	}
	

	$('.number').click(function(){
		if ($(this).data('id') !== '.' || alreadyHasDecimalDot === false){
			if ($(this).data('id') === '.'){
				alreadyHasDecimalDot =true;
				displayNeedsToBeCleared = false;
			}
			numberHandler($(this).data('id'));
					}
	});

	$('.operator').click(function(){
		var theOperator = $(this).data('id');
	
		console.log('This is the operator ' + equationArray);
		// equationArray[1] = theOperator;
		if (nextOperand) {
			equationArray.push(nextOperand);
			console.log('next operand' + equationArray);

		}
		nextOperand = 0;
		// console.log(nextOperand);
		// console.log(equationArray);

		if (equationArray.length > 0){

			if(equationArray.length === 1){
				equationArray.push(theOperator);
				console.log('length 1');
			}	
			if(equationArray.length === 2){
				console.log('length 2');
				equationArray.pop();
				// console.log(equationArray);
				equationArray.push(theOperator);	
				// console.log(equationArray);
				console.log('The operator again ' + equationArray[1]);
			
			}

			if (equationArray.length === 3 || theOperator === 'percent' || theOperator === 'negate'){
				
			
				switch (equationArray[1]){

					case 'add':	
					console.log('length 3');
					console.log(equationArray);	
					console.log('The operator: ' + theOperator);

					equationArray[0]= equationArray[0] + equationArray[2];
					console.log(equationArray.length);
					// if (equationArray.length > 2){
					// 	equationArray.pop();
					// }
					equationArray.pop();
					console.log(equationArray.length);
					// console.log('in switch case add');
					

					break;

					case 'minus':	
					console.log('length 3');
					console.log(equationArray);	
					equationArray[0]= equationArray[0] - equationArray[2];
					equationArray.pop(2);
					// console.log('in switch case - minus');	
			
					break;

					case 'multiply':
					equationArray[0]= equationArray[0] * equationArray[2];
					equationArray.pop();
					// console.log('in switch case - multiply');			
					break;

					case 'divide':	
					equationArray[0] = equationArray[0] / equationArray[2];
					equationArray.pop();
					// console.log('in switch case - divide');			
					break;

					case 'percent':	
					equationArray[0]= equationArray[0] / 100;
					numAsString=0;
					total = 0;
					equationArray.pop();
					// console.log('in switch case - percent');					
					break;

					case 'negate':
					equationArray[0]= equationArray[0] * -1;
					numAsString=0;
					total = 0;
					equationArray.pop();
					// console.log('in switch case - negate');				
					break;

					case 'equals':
					$('#display').text(equationArray[0]);
					// console.log('EQUALS');
					equationArray = [];
					numAsString=0;
					total = 0;
					break;

				}
			}
			console.log(equationArray);
		
			$display.text(equationArray[0]);
		
		
		numAsString=0;

		displayNeedsToBeCleared = true;
		alreadyHasDecimalDot = false;
		}

	});

	$('#AC').click(function(){
		displayNeedsToBeCleared = true;
	 	numAsString=0;
		total = 0;
		$display.text(0);
		numberDisplayed = 0;
	 	stringBackToNumber = 0;
 		total = 0;
 		alreadyHasDecimalDot = false;
 		equationArray = [];

	});
	
});