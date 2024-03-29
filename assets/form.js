//company data
var firebaseConfig = {
apiKey: “AIzaSyBC9L4SfQrWRIfMbhsvP2fOeEyuIw2A9Gg”,
authDomain: “auth.tax.crypto.com”,
databaseURL: “https://nv-prod.firebaseio.com",
projectId: “nv-prod”,
storageBucket: “nv-prod.appspot.com”,
messagingSenderId: “703897384856”,
appId: “1:703897384856:web:28df64276bdf9bdd79dded”
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function signUp(){
var email = document.getElementById(“email”);
var password = document.getElementById(“password”);
const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));
alert(“Signed Up”);
}
function signIn(){
var email = document.getElementById(“email”);
var password = document.getElementById(“password”);
const promise = auth.signInWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));
}
function signOut(){
auth.signOut();
alert(“Signed Out”);
}
auth.onAuthStateChanged(function(user){
if(user){
var email = user.email;
alert(“Active User “ + email);
//Take user to a different or home page
//is signed in
}else{
alert(“No Active User”);
//no user is signed in
}
});
