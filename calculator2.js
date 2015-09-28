$(document).ready(init);

function init(){
var numArr =[];
console.log(numArr);
var total = 0;
var partialSum ='';
var operator = '';
var onDisplayNum = '';
var lastDigitPressed='';
var decimalDotAlreadyUsed = false;
var $display = $('#display');
var theCalc = '';
var changeOperator = false;
var hasNumberToProcess = false;
var zeroAllowed =false;

// var doNegate = false;

$display.text(0);


$('.number').click(function(){
	lastDigitPressed = $(this).data('id');

	if (lastDigitPressed !== '.' && lastDigitPressed !== 0 && onDisplayNum.length < 8){

		onDisplayNum = onDisplayNum + lastDigitPressed;
		$display.text(onDisplayNum);
		zeroAllowed=true;
	}if (lastDigitPressed === '.'){
		onDisplayNum = decimalDotAlreadyUsed ? onDisplayNum : onDisplayNum + '.';
		if (onDisplayNum === '.'){
			onDisplayNum = '0.'
		}
		decimalDotAlreadyUsed = true;
		$display.text(onDisplayNum);
		zeroAllowed=true;
	}if (lastDigitPressed === 0 && zeroAllowed){
		onDisplayNum = onDisplayNum + lastDigitPressed;
		$display.text(onDisplayNum);
	}
	changeOperator =true;
	hasNumberToProcess =true;
	console.log(numArr)
})

$('.otherOperator').click(function(){
	if (hasNumberToProcess){
		otherOperator = $(this).data('id');
		if (otherOperator === 'negate'){
			console.log(numArr)
			onDisplayNum = parseFloat($display.text()) * -1;
		}else {
			onDisplayNum = parseFloat($display.text()) / 100;
		}
		$display.text(onDisplayNum);
	}

})

$('.operator').click(function(){
	zeroAllowed = false;
		operator = $(this).data('id')

		if (changeOperator && numArr.length < 2){
			numArr.push(parseFloat(onDisplayNum));

			changeOperator=false;

			if (theCalc && numArr.length===2){
				console.log('in the calc : ', numArr)
				total = theCalc(numArr[0],numArr[1]);
				numArr.pop();
				numArr[0] = total;
				if (Math.floor($display.text()) == $display.text()){

				}
				$display.text(total.toFixed(2).toString().replace(/([0-9]+(\.[1-9]+)?)(\.?0+$)/,"$1"));

			}
			theCalc='';
			decimalDotAlreadyUsed =false;
			onDisplayNum = '';
			num1 ='';
		}

			switch (operator){

				case 'add':
					theCalc = function(num1,num2){
					 return num1 + num2; 
					}
					console.log('num 1: ' , num1);
				break;
				case 'minus':
					theCalc= function(num1,num2){
					 return num1 - num2; 
					}
				break;
				case 'divide':
					theCalc= function(num1,num2){
					 return num1 / num2; 
					}
				break;
				case 'multiply':
					theCalc= function(num1,num2){
					 return num1 * num2; 
					}
				break;

				case 'equals':
					$display.text(total.toFixed(2).toString().replace(/([0-9]+(\.[1-9]+)?)(\.?0+$)/,"$1"));

				// console.log('total:', total);
				break;

		}
		hasNumberToProcess=false;

})


	$('#AC').click(function(){
		numArr=[];
		console.log('Entered AC: ' + numArr);
		total = 0;
		partialSum ='';
		operator = '';
		onDisplayNum = '';
		lastDigitPressed='';
		decimalDotAlreadyUsed = false;
		$display = $('#display');
		theCalc = '';
		changeOperator = false;
		num1=0;
		$display.text(0);
		zeroAllowed = false;
 		
	});
}
