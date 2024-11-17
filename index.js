const login = document.getElementById('login');
const register = document.getElementById('register');
const closes = document.getElementById('close-btn');
const create = document.getElementById('btn-create');
const rightCont = document.getElementById('right-cont');
const leftCont = document.getElementById('left-cont');
const loginCont = document.getElementById('login-cont');
const RegisterCont = document.getElementById('create-cont');

create.addEventListener('click', createAcc);
login.addEventListener('click', openL);
register.addEventListener('click', openC);
closes.addEventListener('click', close);

function close(){
    leftCont.style.animation = 'moveright 0.5s ease';
    rightCont.style.animation = 'slideOutRight 0.5s ease';
    setTimeout(function() {
        closes.style.display = 'none'; 
        rightCont.style.display = 'none';
        loginCont.style.display = 'none'; 
        RegisterCont.style.display = 'none';
    }, 500);
    
}

function openL(){
    
    console.log('opened')
    closes.style.display = 'flex';
    leftCont.style.animation = 'moveleft 0.5s ease';
    rightCont.style.display = 'flex';
    rightCont.style.animation = 'slideInRight 0.5s ease';
    loginCont.style.display = 'flex'; 
    RegisterCont.style.display = 'none';

 
}

function openC(){
    
    console.log('opened')
        closes.style.display = 'flex'; 
    leftCont.style.animation = 'moveleft 0.5s ease';
    rightCont.style.display = 'flex';
    rightCont.style.animation = 'slideInRight 0.5s ease';
    loginCont.style.display = 'none';
    RegisterCont.style.display = 'flex';

}

function createAcc(){
    close()
}