
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFplswsWH6wlQBkJmbdgYh7UpzWaowTU8",
    authDomain: "projet-go-my-code.firebaseapp.com",
    databaseURL: "https://projet-go-my-code.firebaseio.com",
    projectId: "projet-go-my-code",
    storageBucket: "",
    messagingSenderId: "899088445849",
    appId: "1:899088445849:web:c12b15f46d070a49"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('projet-go-my-code');
function submitForm(e){
    e.preventDefault();

var name = document.getElementById('name').value;
var track = document.getElementById('track').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('tel').value;


saveMessage(name,email,track,phone);
}
document.getElementById('contactForm').addEventListener('submit', submitForm);
function saveMessage(name,track,email,phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        track: track,
        email: email,
        phone: phone
    });
}