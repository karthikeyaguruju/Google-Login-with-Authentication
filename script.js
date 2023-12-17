
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth,GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDsi4DFVbXiJ-hPtXNZrj9Z9qejTYt7FnY",
    authDomain: "login-396ff.firebaseapp.com",
    projectId: "login-396ff",
    storageBucket: "login-396ff.appspot.com",
    messagingSenderId: "727957175982",
    appId: "1:727957175982:web:796cc0c9d0bf6025c9b73f"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'
  const provider = new GoogleAuthProvider();

  const googlelogin = document.getElementById("google-login-btn");
  googlelogin.addEventListener("click",function(){

    signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="success.html";

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  })

  updateUserProfile()
