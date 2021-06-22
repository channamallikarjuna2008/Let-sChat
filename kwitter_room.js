var firebaseConfig = {
    apiKey: "AIzaSyDQH8KvD0OhCV0HSKfuC_mkMGpya4xCQbM",
    authDomain: "kwitter-d7f68.firebaseapp.com",
    databaseURL: "https://kwitter-d7f68-default-rtdb.firebaseio.com",
    projectId: "kwitter-d7f68",
    storageBucket: "kwitter-d7f68.appspot.com",
    messagingSenderId: "113855316640",
    appId: "1:113855316640:web:3c5d1fb1bd1a0f96dabfc5",
    measurementId: "G-12GT734JGC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
    Room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_name).update({
          purpose :"Adding Room name"
    });
    localStorage.setItem("room_name",Room_name);
    window.location = "kwitter_page.html";
}
function getData()
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
     Room_names = childKey;
     
    //Start code
console.log("Room Name -" +Room_name);
row="<div class='room_name' id="+Room_name+" onclick='GoToRoom_Name(this.id)'>#"+Room_name+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
    getData();
    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location="index.html";
    }
    
    function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }
    