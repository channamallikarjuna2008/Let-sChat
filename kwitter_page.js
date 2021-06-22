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
//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name1_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>>";
message_with_tag ="<h4 class='message_h4'>"+message+ "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag ="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+ "</span></button><hr>";
row= name1_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML+= row;
//End code
    } });  }); }
getData();
function send(){
    msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
 name:user_name,
 message :msg,
 like:0
});
document.getElementById("msg").value="";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }
function updateLike(message_id){
    console.log("clicked on like button -"+message_id);
    like_button=message_id;
    likes =document.getElementById(like_button).value;
    updated_likes=Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          like:updated_likes
    });
}
