function setUsername(username){
    //complex DB calls
    this.username = username;
    console.log("called");
};

function createUser(username, email, password){
    setUsername.call(this, username);
    // this.username = username;
    this.email = email;
    this.password = password
}

const User = new createUser("JS", "js1@gmail,com", "12345");
console.log(User);
