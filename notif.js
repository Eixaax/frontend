const loginButton = document.getElementById('login-clicked');
const registerButton = document.getElementById('register-clicked');
const verify = document.getElementById('verification-cont')

const notifCont = document.getElementById('notif');
const closeNotif = document.getElementById('close-icon');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');

const cpasswordInput = document.getElementById('cpassword');
const cusernameInput = document.getElementById('cusername');
const cemailInput = document.getElementById('cemail');



closeNotif.addEventListener('click', closeIcon);

loginButton.addEventListener('click', () => {
    if (!usernameInput.value.trim() || !passwordInput.value.trim()) {
        errorNotif("Please fill in all the required fields.");
    } else {
        window.location.href = 'registration.html'; 
    }
});

registerButton.addEventListener('click', () => {
    if (!cusernameInput.value.trim() || !cpasswordInput.value.trim() || !cemailInput.value.trim()) {
        errorNotif("Please fill in all the required fields.");
    } else if (!cemailInput.value.includes('@')) {
        errorNotif("Please enter a valid email address.");
    } else {
        RegisterCont.style.display = 'none';
        verify.style.display = 'flex';
    }
});

function errorNotif(message) {
    const notifMessage = document.getElementById('message'); 
    notifMessage.textContent = message; 
    notifCont.style.display = 'flex'; 
    notifCont.style.animation = 'showNotif 0.5s ease forwards'; 
    setTimeout(() => {
        closeIcon(); 
    }, 3000); 
}

function closeIcon(){
    notifCont.style.animation = 'closeNotif 0.5s ease forwards';
    setTimeout(() => {
        notifCont.style.display = 'none'; 
    }, 500); 
}
