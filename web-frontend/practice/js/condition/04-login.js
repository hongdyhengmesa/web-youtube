let email = "mesa@gmail.com";
let pass = "12345";

if(email && pass){
    console.log("Login successfully");
}else if (email == ""){
    console.log("Email incorrect");
}else if(pass == ""){
    console.log("Password incorrect");
}else{
    console.log("Password or email is incorrect");
}