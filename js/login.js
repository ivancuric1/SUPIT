window.onload = () => 
{
  $('#message_login').hide(); 

  document.querySelector("#login_button").addEventListener("click", (e) => 
  {  
      e.preventDefault();          

         fetch("https://www.fulek.com/data/api/user/login", 
      {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
        
          body: JSON.stringify( 
            {
              username: document.querySelector("#login_EMAIL").value,
              password: document.querySelector("#login_EMAIL_PASS").value,
          }),
      })
      .then((response) => response.json()) 
      .then((podaci) => 
      {       
          if (podaci.isSuccess) 
          {              
              localStorage.setItem('token', podaci.data.token);
              localStorage.setItem('username', podaci.data.username);         
              $('#message_login')
                  .text("Vaša prijava je uspješna! Preusmjeravanje na pocetnu stranicu...").show().delay(300).hide(3000);          
              setTimeout(() => 
              {
                  location.replace("index.html");
              }, 3000);
          } else 
          {             
              $('#message_login').text(podaci.errorMessages[0]).show().delay(300).hide(3000); 
          }
      })
      .catch((err) => 
      {
          console.log(error);
      });
  });
};