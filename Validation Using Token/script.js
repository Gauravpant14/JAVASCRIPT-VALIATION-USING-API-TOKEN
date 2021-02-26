let signinForm = document.querySelector(".signInForm");
let signUpForm = document.querySelector(".signUpForm");
let registerName = document.getElementById("user1");
let userEmail = document.getElementById("user");
let registerEmail = document.getElementById("email");
let passReg = document.getElementById("pass1");
let userPass = document.getElementById("pass");

const logInUrl = " http://192.168.1.10:80/api/login";
const postUrl = "http://192.168.1.10:80/api/create_account";
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(postUrl, {
    method: "POST",
    body: JSON.stringify({
      name: registerName.value,
      email_or_mobile: registerEmail.value,
      token: "",
      password: passReg.value,
      is_studio_admin: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(logInUrl, {
    method: "POST",
    body: JSON.stringify({
      email: userEmail.value,
      password: userPass.value,
      source: "web",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
     
    //   const { token } = data.user.token;

    let Usertoken = data.token;
      localStorage.setItem("token", Usertoken);
      if(Usertoken == localStorage.getItem("token")){
       location.href = "./newPage.html"
      return
    }
    else{
        alert("invalid user")
    }
    });
});
