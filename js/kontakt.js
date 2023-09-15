var modal = document.getElementById("contact-modal"); 
var btn = document.getElementById("open-contact-modal"); 
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {  
  modal.style.display = "block"; 
}
span.onclick = function() { 
  modal.style.display = "none";
}