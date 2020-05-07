 function validate()
			{
            var username = document.getElementById("username").value;
            var imepriimek = document.getElementById("imepriimek").value;
			var password = document.getElementById("password").value;
			var password2 = document.getElementById("password2").value;
			
                if(username == undefined || username == '')
				
				{
                    Swal.fire({
						title: 'Napaka!',
						text: 'Uporabniško ime je prazno',
						type: 'error',
                        confirmButtonText: 'Nazaj'
                        
					  })
              
                }
                else if(imepriimek == undefined || imepriimek == '')
                {
                    Swal.fire({
                        title: 'Napaka!',
                        text: 'Vnesite svoje ime in priimek',
                        type: 'error',
                        confirmButtonText: 'Nazaj'
                        
                      })
                }

                else if(username == 'jan')
				{
                    Swal.fire({
						title: 'Napaka!',
						text: 'Uporabnik s tem imenom že obstaja',
						type: 'error',
                        confirmButtonText: 'Nazaj'
                        
					  })

                }
                
			   else if( password == password2)
				{
                    
                    Swal.fire({
                       
                        type: 'success',
                        title: 'Uspešno!',
						text: 'Registracija je uspešna',
                        showConfirmButton: false,
                        html:
                        '<a href="prijava.html"><button class="swal2-confirm swal2-styled"> Prijava</button></a> ',                
                        
                      })
                }
                else
                {
                    
                    Swal.fire({
                        
						title: 'Napaka!',
						text: 'Gesli nista enaki',
						type: 'error',
                        confirmButtonText: 'Nazaj'
                     
					  })
                }
                document.getElementById('password').value = '';
                document.getElementById('password2').value = '';
			
			


			
			}