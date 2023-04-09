import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBV3J2-gbHWIPayxgto7pUyaP56nEiojy4",
    authDomain: "signup-and-log-in-89b79.firebaseapp.com",
    projectId: "signup-and-log-in-89b79",
    storageBucket: "signup-and-log-in-89b79.appspot.com",
    messagingSenderId: "1081973945738",
    appId: "1:1081973945738:web:70a9176d4c7e68f4d20473",
    measurementId: "G-83E30SPV6H"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);




  var signup = document.getElementById('signup')

  signup.addEventListener('click', function(){
    var email = document.getElementById('semail').value
    var password = document.getElementById('spass').value
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email)

      window.location.href = './welcome.html'
    })
    .catch((error) => {
        console.log(error)
    });
  })

  var loginpage = document.getElementById('loginpage')

  loginpage.addEventListener('click', function(){
    window.location.href = 'login.html'
  })