window.onload = () => 
{
    if (localStorage.hasOwnProperty('token')) 
    {
        $("#nastavni_plan_hidden").show(); 

        $("#login_btn").hide().next().show();

        $("#span_show_username").text(localStorage.getItem('username')).css("color", "rgb(50, 187, 233)"); 
    }

    $("#logout_btn").click(() =>  
    {
        localStorage.clear(); 

        location.replace("index.html");
    });
}