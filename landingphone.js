const login = document.getElementById('login');
const register = document.getElementById('register');
const rightCont = document.getElementById('right-cont');
const leftCont = document.getElementById('left-cont');
const closes = document.getElementById('close-btn');
const loginCont = document.getElementById('login-cont');
const RegisterCont = document.getElementById('create-cont');


login.addEventListener('click', openL);
register.addEventListener('click', openC);
closes.addEventListener('click', close);

function close(){
    leftCont.style.animation = 'moveright 0.5s ease forwards';
    rightCont.style.animation = 'slideOutRight 0.5s ease';
    setTimeout(function() {
        rightCont.style.display = 'none';

    }, 501);

}

function openL(){
    
    console.log('opened')
    rightCont.style.display = 'flex'
    rightCont.style.animation = 'slideInRight 0.5s ease'
    leftCont.style.animation = 'moveleft 0.5s ease forwards'
    loginCont.style.display = 'flex'; 
    RegisterCont.style.display = 'none';

}

function openC(){
    
    rightCont.style.display = 'flex'
    rightCont.style.animation = 'slideInRight 0.5s ease'
    blankCont.style.animation = 'movelefts 0.5s ease';
    leftCont.style.animation = 'moveleft 0.5s ease forwards'
    blankCont.style.display = 'flex';
    loginCont.style.display = 'none';
    RegisterCont.style.display = 'flex';

}
