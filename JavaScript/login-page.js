const signup = document.getElementById("signup-section");
const login = document.getElementById("login-section");
const loginPage = document.getElementById("login-page");
const signupPage = document.getElementById("signup-page");

login.style.display = "none";
loginPage.addEventListener('click', ()=>{
    signup.style.display="none";
    login.style.display = "flex";
});

signupPage.addEventListener('click', ()=>{
    signup.style.display="flex";
    login.style.display = "none";
});

const users = [
    {name: "Anish kumar",
     email:"kumar7163@gmail.com",
     password: "techshop"},
    { name: "Test User",
      email: "test@gmail.com",
      password: "test"}
    ];

    //  Login page logic

const loginButton = document.querySelector("#login-section .login-btn");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginError = document.getElementById("login-error");


loginButton.addEventListener('click', ()=>{
    let loginFlag = false;
    users.forEach((user)=>{
               
        if(user.email===loginEmail.value && user.password===loginPassword.value ){
            loginFlag = true;
        }
    });
    if(loginFlag){
        window.location.replace("./home.html"); 
    }else{
        loginError.style.display = "initial";
    }
    
});

//  Registration page logic
const userName = document.getElementById('user-name');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupCnfPwd = document.getElementById('signup-cnf-pwd');
const signupButton = document.querySelector('#signup-section .signup-btn');
const usernameError = document.getElementById('username-error');
const signupEmailError = document.getElementById('signup-email-error');
const signupPasswordError = document.getElementById('signup-password-error');
const signupCnfpwdError = document.getElementById('signup-cnfpwd-error');
const passwordMismatch = document.getElementById('password-mismatch');

signupButton.addEventListener('click', regFormValidation)

function regFormValidation(){
    const newUser = {};
    if(!userName.value){
        usernameError.style.display = "initial";
        setTimeout(()=>{usernameError.style.display = "none";}, 3000);
    }
    else if(!signupEmail.value){
        signupEmailError.style.display = "initial";
        setTimeout(()=>{signupEmailError.style.display = "none";}, 3000);
    }
    else if(!signupPassword.value){
        signupPasswordError.style.display = "initial";
        setTimeout(()=>{signupPasswordError.style.display = "none";}, 3000);
    }
    else if(!signupCnfPwd.value){
        signupCnfpwdError.style.display = "initial";
        setTimeout(()=>{signupCnfpwdError.style.display = "none";}, 3000);
    }
    else if(signupPassword.value !== signupCnfPwd.value){
        passwordMismatch.style.display = "initial";
        setTimeout(()=>{passwordMismatch.style.display = "none";}, 3000);
    }
    else{
        newUser.name = userName.value;
        newUser.email = signupEmail.value;
        newUser.password = signupPassword.value;
        users.push(newUser);
        alert(`${newUser.name} registered sucessfully!`);
        signup.style.display="none";
        login.style.display = "flex"; 
    }
}



    