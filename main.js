
var box = document.getElementsByClassName('main')[0];
var login = document.getElementsByClassName('loginform')[0];
var signup = document.getElementsByClassName('signupform')[0];


    // Moves to left
    document.getElementsByClassName('signupBtn')[0].onclick = function () {
        console.log("nr1");
        box.classList.add('moveLeft');
        login.classList.add('fadeOut');
        signup.classList.add('fadeIn');
    }

    // Moves to right
    document.getElementsByClassName('loginBtn')[0].onclick = function () {

        console.log("nr2");
        box.classList.remove('moveLeft');
        login.classList.remove('fadeOut');
        signup.classList.remove('fadeIn');
    }


