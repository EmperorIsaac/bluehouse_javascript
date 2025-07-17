var database = [
  {
    userName: "john_doe",
    password: "1234"
  },
  {
    userName: "jane_smith",
    password: "4321"
  },
  {
    userName: "alice_jones",
    password: "abc123"
  }
];

var newsfeed = [
  {
    username: "Stanley",
    timeline: "Feeling like Stan!"
  },
  {
    username: "Mariom",
    timeline: "Had a great workout today!"
  },
  {
    username: "Remson",
    timeline: "He is a hustler!"
  }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");


function isUserValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (user === database[i].userName && pass === database[i].password) {
      return true;
    }
  }
  return false;
}


function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    console.log('login successful');
    alert("Login Successful");
    console.log(newsfeed);
  } else {
    alert("User is not valid, try again");
  }
}


signIn(userNamePrompt, passwordPrompt);