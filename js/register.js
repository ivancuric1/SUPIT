window.onload = () => 
{
  $('#message_register').hide(); 

  document.querySelector("#register_button").addEventListener("click", (e) => 
  {
      e.preventDefault();             
                
      const username = document.querySelector("#register_EMAIL").value; 
      const password = document.querySelector("#register_EMAIL_PASS").value;

      fetch("https://www.fulek.com/data/api/user/register", 
      {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              username: username,
              password: password,
          }),
      })
      .then((response) => response.json())
      .then((podaci) => 
      {
          if (podaci.isSuccess) 
          {
              $('#message_register').text("Vaša registracija je uspješna! Preusmjeravanje na login stranicu...").show().delay(300).hide(3000);
              setTimeout(() => 
              {
                  window.location.replace("login.html"); 
              }, 3000);
          } else 
          {
              console.log(podaci.errorMessages[0]);
              $('#message_register').text(podaci.errorMessages[0]).show().delay(300).hide(3000);
          }
      })
      .catch((err) => 
      {
          console.log(err);
      });
  });
};