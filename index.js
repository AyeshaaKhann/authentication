import { getAuth } from 'https:www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { createUserWithEmailAndPassword } from 'https:www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
const auth = getAuth()


const register = () => {
    console.log(auth);
    let username = document.querySelector("#username")
    console.log(susername);
    let email = document.querySelector("#email")
    console.log(email);
    let password = document.querySelector("#password")
    console.log(password)


}

document.getElementById("register").addEventListener("click" , register)

// npm install -g install