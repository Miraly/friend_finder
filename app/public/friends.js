$(document).ready(function() {
     var newFriend;
 $('.submit').click(function(event){
 	event.preventDefault();
 	
 	var avg = [
 		$('#q1').val(),
 		$('#q2').val(),
 		$('#q3').val(),
 		$('#q4').val(),
 		$('#q5').val(),
 		$('#q6').val(),
 		$('#q7').val(),
 		$('#q8').val(),
 		$('#q9').val(),
 		$('#q10').val()];
 		
 		console.log(avg);

	 newFriend = {
    		name: $('#name').val().trim(),
    		photo: $('#photo').val().trim(),
    	   	avg: avg
	    };
	  
	
	 console.log(newFriend);
	 $.post("/new_friend", newFriend).done(function(data) {});
 });
  
});