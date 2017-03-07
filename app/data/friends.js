$(document).ready(function() {
    console.log( "ready!" );
 var newFriend;
 $('.submit').click(function(event){
 	event.preventDefault();
 	var total = 0;
 	var avg = [$('#q1').val().trim(), $('#q2').val().trim(), $('#q3').val().trim(), $('#q4').val().trim(), $('#q5').val().trim(), $('#q6').val().trim(), $('#q7').val().trim(), $('#q8').val().trim(), $('#q9').val().trim(), $('#q10').val().trim(),];
 		avg.forEach(function(element) {
         total += element;
	});

	 newFriend = {
    		name: $('#name').val().trim(),
    		photo: $('#photo').val().trim(),
    	   	avg: avg;
	    },
	  
	
	 console.log(newFriend);
	 $.post("/new_friend", newFriend).done(function(data) {

		});
 }); 
  
});