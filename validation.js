function validate(){
var username = document.getElementById('un');
var password = document.getElementById('pwd');

    console.log(username);
    console.log(password);

    if (username.value.trim() === "admin" && password.value.trim() === "12345") 


      {
        // If login is successful, redirect to main page using callback function
       return true;
    } else {
        alert("Invalid username or password");

        return false;
    }
}