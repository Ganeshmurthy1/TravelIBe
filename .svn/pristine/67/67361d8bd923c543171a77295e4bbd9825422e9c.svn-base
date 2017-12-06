
function checkValid(textbox) {
	var name = $(textbox).val();
	if (name == '') {
		textbox.setCustomValidity('Enter the vaild destination city');
	} else {
		textbox.setCustomValidity('');
	}
}

function incrementValue()
{
var value = parseInt(document.getElementById('number').value, 10);
value = isNaN(value) ? 0 : value;
if(value<9){
value++;
    document.getElementById('number').value = value;
}
}
function decrementValue()
{
var value = parseInt(document.getElementById('number').value, 9);
value = isNaN(value) ? 0 : value;
if(value>1){
value--;
    document.getElementById('number').value = value;
}

}
$(function(){

$('input[name="$A*D"]').keyup(function(){

var adultValue = $('input[name="$A*D"]').val();
if(adultValue >=9)
{
 $('input[name="$A*D"]').val(9);
 $('input[name="$K*D"]').val('');
 $('input[name="$K*D"]').attr('disabled','disabled');  
}
else
{
 $('input[name="$K*D"]').removeAttr('disabled'); 
}
});
$('input[name="$K*D"]').keyup(function(){
var adultValue = parseInt($('input[name="$A*D"]').val());
var kidValue = parseInt($('input[name="$K*D"]').val()); 
if(isNaN(kidValue))
{
 kidValue =0;
}
var total = adultValue + kidValue;

if(total >=9)
{
 $('input[name="$K*D"]').val(9-adultValue);
}
else
{
 $('input[name="$K*D"]').removeAttr('disabled');
 $('input[name="$I*T"]').val(9-total);
}
   
});

});
