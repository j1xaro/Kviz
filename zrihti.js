
var a =1;
		  function zrihti()
      {
			 
				let params = new URLSearchParams(location.search);
                var predmet =params.get('p');
                  
                
      

			if(predmet == 'zgo')
      {
        
        if(a== 6)
        {
          window.location.href ="rezultati.html";
        }
        if(a==1)
        {
        document.getElementById("demo").innerHTML = ('Kdo je odkril Ameriko? ' + '&nbsp Vprašanje ' + a + '/5');
        document.getElementById("ena").innerHTML = ('Krištof Kolumb');
        document.getElementById("dva").innerHTML = ('Amerigo Vespucci');
        document.getElementById("tri").innerHTML = ('James Cook');
        document.getElementById("stiri").innerHTML = ('Marco Polo');
        }
        if(a ==2)
        {
          document.getElementById("demo").innerHTML = ('Po kom je imenovana Amerika? ' + '&nbsp Vprašanje ' + a + '/5');
        document.getElementById("ena").innerHTML = ('Krištof Kolumb');
        document.getElementById("dva").innerHTML = ('Amerigo Vespucci');
        document.getElementById("tri").innerHTML = ('James Cook');
        document.getElementById("stiri").innerHTML = ('Marco Polo');
        }
        else if(a==3)
        {
          document.getElementById("demo").innerHTML = ('Kdaj se je končala 2 sv. vojna ' + '&nbsp Vprašanje ' + a + '/5');
        document.getElementById("ena").innerHTML = ('1923');
        document.getElementById("dva").innerHTML = ('1940');
        document.getElementById("tri").innerHTML = ('1945');
        document.getElementById("stiri").innerHTML = ('1029');
         }
         else if(a==4)
        {
          document.getElementById("demo").innerHTML = ('Kdaj se je začena 2 sv. vojna ' + '&nbsp Vprašanje ' + a + '/5');
        document.getElementById("ena").innerHTML = ('1923');
        document.getElementById("dva").innerHTML = ('1939');
        document.getElementById("tri").innerHTML = ('1945');
        document.getElementById("stiri").innerHTML = ('1029');
         }
         else if(a==5)
        {
          document.getElementById("demo").innerHTML = ('Kdo je bil prvi predcednik Amerike ' + '&nbsp Vprašanje ' + a + '/5');
        document.getElementById("ena").innerHTML = ('James Madison');
        document.getElementById("dva").innerHTML = ('George Washington');
        document.getElementById("tri").innerHTML = ('	James Buchanan');
        document.getElementById("stiri").innerHTML = ('John Adams');
         }
        

      }
      else if(predmet=='mat')
      {
        document.getElementById("demo").innerHTML = ('Koliko je 15-3*4 ' + '&nbsp Vprašanje ' + a + '/10');
        document.getElementById("ena").innerHTML = ('48');
        document.getElementById("dva").innerHTML = ('3');
        document.getElementById("tri").innerHTML = ('-3');
        document.getElementById("stiri").innerHTML = ('22');

      }
      else if(predmet=='slo')
      {
        document.getElementById("demo").innerHTML = ('Kdo je napisal Abecednik ' + '&nbsp Vprašanje ' + a + '/10');
        document.getElementById("ena").innerHTML = ('Janez Menart');
        document.getElementById("dva").innerHTML = ('Primož Trubar');
        document.getElementById("tri").innerHTML = ('France Prešern');
        document.getElementById("stiri").innerHTML = ('Aleš Novak');
       
      }
      else if(predmet == 'geo')
      {
        document.getElementById("demo").innerHTML = ('Kdo je napisal Abecednik ' + '&nbsp Vprašanje ' + a + '/10');
        document.getElementById("ena").innerHTML = ('Janez Menart');
        document.getElementById("dva").innerHTML = ('Primož Trubar');
        document.getElementById("tri").innerHTML = ('France Prešern');
        document.getElementById("stiri").innerHTML = ('Aleš Novak');
      }
      
      }

      function ena()
      {
        a++;
       
        zrihti();
        
      }
      function dva()
      {
        a++;
        zrihti();
      }
      function tri()
      {
        a++;
        zrihti();
      }
      function stiri()
      {
        a++;
        zrihti();
      }
     
      