// Initialize Supabase client
const supabaseUrl = 'https://qkkpvngxzqzystwzkfsj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFra3B2bmd4enF6eXN0d3prZnNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4NDI3MTgsImV4cCI6MjAwNzQxODcxOH0.HFmHIYy9x5CxhX2gC6kTpO7zPV5rqV28T9yOneWq1CE';
const database = supabase.createClient(supabaseUrl, supabaseKey);

console.log(database);

full_name =  document.getElementById("name");
age =  document.getElementById("age");
phone =  document.getElementById("phone");
address =  document.getElementById("address");
occupation =  document.getElementById("occupation");
nationality =  document.getElementById("nationality");
country =  document.getElementById("country");
email =  document.getElementById("email");

async function insertUser() {
	try {
	  const { error } = await database
		.from('users')
		.insert({
		  full_name: full_name.value,
		  age: age.value,
		  telephone: phone.value,
		  address: address.value,
		  occupation: occupation.value,
		  nationality: nationality.value,
		  country: country.value,
		  email: email.value,
		});
  
	  if (error) {
		console.error('Error inserting user:', error.message);
	  } else {
		console.log('User inserted successfully');
	  }
  
	  return error;
	} catch (err) {
	  console.error('An error occurred:', err);
	  return err;
	}
  }
  
  // Call the async function to insert the user
  
  




$(function() {

	'use strict';

	// Form

	var contactForm = function() {

		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					email: {
						required: true,
						email: true
					},
			
					phone: "required",
					age: "required",
					address: "required",
					occupation: "required",
					nationality: "required",
					country: "required",

				},
				messages: {
					name: "Please enter your name",
					email: "Please enter a valid email address",
					phone: "Please enter telephone number",
					age: "Please enter your age",
					address: "Please enter address",
					occupation: "Please enter your occupation",
					nationality: "Please enter your nationality",
					country: "Please enter your country name",
					
				},

				/* submit via ajax */
				submitHandler: async function(form,e) {	
					e.preventDefault();	
					var $submit = $('.submitting'),
						waitText = 'Submitting...';

						$submit.css('display', 'block').text(waitText);
						var error = await insertUser();

						console.log(error)

						if(error){
							$('#form-message-warning').html("Something went wrong. Please try again.");
							$('#form-message-warning').fadeIn();
							$submit.css('display', 'none');
						}else{
							$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeOut();

		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);	
						}
					

				// 		$.ajax({   	
				//       type: "POST",
				//       url: "php/send-email.php",
				//       data: $(form).serialize(),

				//       beforeSend: function() { 
				//       	$submit.css('display', 'block').text(waitText);
				//       },
				//       success: function(msg) {
		        //        if (msg == 'OK') {
		        //        	$('#form-message-warning').hide();
				//             setTimeout(function(){
		        //        		$('#contactForm').fadeOut();
		        //        	}, 1000);
				//             setTimeout(function(){
				//                $('#form-message-success').fadeIn();   
		        //        	}, 1400);
			               
			    //         } else {
			    //            $('#form-message-warning').html(msg);
				//             $('#form-message-warning').fadeIn();
				//             $submit.css('display', 'none');
			    //         }
				//       },
				//       error: function() {
				//       	$('#form-message-warning').html("Something went wrong. Please try again.");
				//          $('#form-message-warning').fadeIn();
				//          $submit.css('display', 'none');
				//       }
			    //   });    		
		  		}
				
			} );
		}
	};
	contactForm();

});