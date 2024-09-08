var username = document.getElementById('username');
var password = document.getElementById('password');
var clickme = document.getElementById('clickme');

var data_username = 'SiyasetciTosbik';
var data_password = 'oxlov';
var threats = 0;

clickme.addEventListener('click', ()=>{
    if(threats == 2){
        username.disabled = 'true';
        password.disabled = 'true';
        clickme.disabled = 'true';
        alert("Access Denied!")
    }
    if(username.value == data_username && password.value == data_password){
        window.location.href='user_page.html';
    }
    else{
        threats +=1;
        clickme.style.animationName = 'wrong_login';
    }
});
