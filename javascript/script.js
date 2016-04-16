
$(document).ready(function(){

		$(".box2").hide();

	$(".button").click(function(){
		$(".opbackground").show();
	});
	
$(" .opbackground"). on('click',function(){
	$(".wrapper").hide();
	 });


$(".wrapper").click(function(){
		$(".box2").show();
	 });

$(".button2").click(function(){
		$(".box2").show();
	 });
	
});
