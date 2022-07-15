//object to store details
let userDetailsDatabase = {}

function getUserDetails(){
//UserName
    let userName = prompt("what is your name")

    if (userName == null){
        return
    }

    function validateUserName(userName){
        if (userName.length>0 &&  userName.length<10){
            return true
        }
        else{
            return false
        }
    }
    while (validateUserName(userName) == false){
        userName = prompt("username must be less than 10 and greater than 0")
    }
    userDetailsDatabase["UserName"] = userName

//EmailAddress    
    let  email = prompt("enter your email address")

    if (email == null){
        return
    }

    function validateEmail(email) {
        const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        emailCheckResult = emailCheck.test(email);
        if (emailCheckResult == true){
            return true
        }
        else{
            return false
        }
    }
    while (validateEmail(email) == false){
        if (email == null){
            return
        }
        email = prompt("Enter a valid email address")
    }
    userDetailsDatabase["Email"] = email

//phoneNumber
    let phoneNumber = prompt("what is your phone number")

    if (phoneNumber == null){
        return
    }

    function valiatePhoneNumber(phoneNumber){
        if (phoneNumber.length == 11){
            return true
        }
        else{
            return false
        }
    }
    while (valiatePhoneNumber(phoneNumber) == false){
        phoneNumber = prompt("Phone no must be 11")
    }
    userDetailsDatabase["Phoneno"] = phoneNumber
    
//password
    let password = prompt("enter password")

    if (password == null){
        return
    }

    function validatePassword(password){
        if (password.length < 6){
            return false
        }
        else{
            return true
        }
    }
    while (validatePassword(password) == false){
        password = prompt("password must be more than 6  char")
    }
    userDetailsDatabase["Password"] = password
    
//confirmPassword
    let confirmPassword = prompt("confirm your password")

    if (confirmPassword == null){
        return
    }

    function validateConfirmPassword(confirmPassword){
        if (confirmPassword == password){
            return true
        }
        else{
            return false
        }
    }
    while (validateConfirmPassword(confirmPassword)==false){
        confirmPassword = prompt("confirm password does not match password. Try again")
    }
    userDetailsDatabase["Confirm Password"] = confirmPassword

}

function displayUserDetails(){
    alert(`Your details\n\nUsername: ${userDetailsDatabase.UserName}\n
    Phone Number: ${userDetailsDatabase.Phoneno}\n
    Email: ${userDetailsDatabase.Email}`)
}