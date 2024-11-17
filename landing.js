const login = document.getElementById('login');
const register = document.getElementById('register');
const rightCont = document.getElementById('right-cont');
const leftCont = document.getElementById('left-cont');
const blankCont = document.getElementById('blankCont');
const createBtn = document.getElementById('btn-create');
const loginBtn = document.getElementById('btn-login');
const closes = document.getElementById('close-btn');
const loginCont = document.getElementById('login-cont');
const RegisterCont = document.getElementById('create-cont');
const backbtn = document.getElementById('btn-back');



login.addEventListener('click', openL);
register.addEventListener('click', openC);
closes.addEventListener('click', close);
createBtn.addEventListener('click', createAcc);
backbtn.addEventListener('click', goBack);
loginBtn.addEventListener('click', logins);


function close(){
    leftCont.style.animation = 'moveright 0.5s ease none';
    blankCont.style.animation = 'moverights 0.5s ease none';

    rightCont.style.animation = 'slideOutRight 0.5s ease';
    setTimeout(function() {
        rightCont.style.display = 'none';
        blankCont.style.display = 'none';

    }, 501);

}


function openL(){
    
    console.log('opened')
    rightCont.style.display = 'flex'
    rightCont.style.animation = 'slideInRight 0.5s ease'
    leftCont.style.animation = 'moveleft 0.5s ease none'
    blankCont.style.animation = 'movelefts 0.5s ease';
    blankCont.style.display = 'flex'; 
    loginCont.style.display = 'flex'; 
    RegisterCont.style.display = 'none';

}

function openC(){
    
    console.log('opened')
    rightCont.style.display = 'flex'
    rightCont.style.animation = 'slideInRight 0.5s ease'
    blankCont.style.animation = 'movelefts 0.5s ease';
    leftCont.style.animation = 'moveleft 0.5s ease none'
    blankCont.style.display = 'flex';
    loginCont.style.display = 'none';
    RegisterCont.style.display = 'flex';

}


function createAcc(){
    loginCont.style.display = 'none';
    RegisterCont.style.display = 'flex';
    verify.style.display = 'none';

}

function goBack(){
    verify.style.display = 'none';
    loginCont.style.display = 'none';
    RegisterCont.style.display = 'flex';
}

function logins(){
    loginCont.style.display = 'flex';
    RegisterCont.style.display = 'none';
    verify.style.display = 'none';
}