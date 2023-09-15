$(async () => 
{
  var $line = $("#line1");
  const data = "Budi izvrstan u onom što vidiš!--$voliš!?ZAISKRI. ";  
  let index = 0; 

  const intervalId = setInterval(() => 
  {
    const char = data[index++]; 

    if (char == '?')
    {
      $line.css({ 'animation': 'none' }); 
      $line = $("#line2"); 
      $line.css({ 'animation': 'blinkCursor 1.5s infinite' });  
      
    } else if (char == '$') 
    {
      $line.text("Budi izvrstan u onom što ");
    }
     else if (char != '-') 
    {
      $line.append(char); 
    }
    if (index == data.length) clearInterval(intervalId);  
                                                          
  }, 200); 
});