

function validate()
			{
        
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
				if ((username == "jan") && (password == "jan"))
				{
					
					 window.location.href ="kviz.html";
			

				}
				else
				{
					Swal.fire({
						title: 'Napaka!',
						text: 'Napačno uporabniško ime ali geslo',
						type: 'error',
						confirmButtonText: 'Nazaj'
					  })
					  document.getElementById('username').value = '';
					  document.getElementById('password').value = '';
				}


			
			}