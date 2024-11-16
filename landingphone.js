
console.log('mobile')
const login = document.getElementById('login');
const register = document.getElementById('register');
const rightCont = document.getElementById('right-cont');
const leftCont = document.getElementById('left-cont');
const closes = document.getElementById('close-btn');
const loginCont = document.getElementById('login-cont');
const RegisterCont = document.getElementById('create-cont');
const logo = document.getElementById('logo');
const logreg = document.getElementById('log-reg');
const createBtn = document.getElementById('btn-create');
const loginBtn = document.getElementById('btn-login');
const backbtn = document.getElementById('btn-back');

login.addEventListener('click', openL);
register.addEventListener('click', openC);
closes.addEventListener('click', close);
createBtn.addEventListener('click', createAcc);
backbtn.addEventListener('click', goBack);
loginBtn.addEventListener('click', logins);

function close(){
    logreg.style.animation = 'moveright 0.5s ease forwards'
    rightCont.style.animation = 'slideOutRight 0.5s ease';
    logo.style.animation = 'logos 0.5s ease forwards'

    setTimeout(function() {
        rightCont.style.display = 'none';

    }, 500);

}

function openL(){
    
    console.log('opened')
    rightCont.style.display = 'flex'
    rightCont.style.animation = 'slideInRight 0.5s ease'
    logo.style.animation = 'logo 0.5s ease forwards'
    logreg.style.animation = 'moveleft 0.5s ease forwards'
    loginCont.style.display = 'flex'; 
    RegisterCont.style.display = 'none';

}

function openC(){
    
    rightCont.style.display = 'flex'
    rightCont.style.animation = 'slideInRight 0.5s ease'
    logo.style.animation = 'logo 0.5s ease forwards'
    blankCont.style.animation = 'movelefts 0.5s ease';
    logreg.style.animation = 'moveleft 0.5s ease forwards'
    blankCont.style.display = 'flex';
    loginCont.style.display = 'none';
    RegisterCont.style.display = 'flex';

}


function createAcc(){
    loginCont.style.display = 'none';
    RegisterCont.style.display = 'flex';
}

function goBack(){
    verify.style.display = 'none';
    RegisterCont.style.display = 'flex';
}

function logins(){
    loginCont.style.display = 'flex';
    RegisterCont.style.display = 'none';
}