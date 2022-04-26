
function checkLogin() {
    let name = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

  function checkValidName(password) {
    return isNaN(password);
  }
  function checkValidName(name) {
    return isNaN(name);
  }
   if(name == "" || name == null) {
    document.getElementById("userDeta").innerHTML = "Your name is invalid"
    return
  }
  else if(password == "" || password == null) {
    document.getElementById("userDeta").innerHTML = "Your password is invalid"
    return
  }
    else if(name != "abcd" || password != "1234") {
      document.getElementById("userDeta").innerHTML = "The username or password is incorrect"
      return
  }
    
   else {document.getElementById("userDeta").innerHTML = "Thank you, "  + "<br>We saved your info!"
   window.location.replace("http://www.w3schools.com");
   }
}

