var firebaseConfig = {

      apiKey: "AIzaSyA8Cm_8xOHHucPAtr15ccXyArH_QyNh4OY",
      authDomain: "let--chat.firebaseapp.com",
      databaseURL: "https://let--chat-default-rtdb.firebaseio.com",
      projectId: "let--chat",
      storageBucket: "let--chat.appspot.com",
      messagingSenderId: "401072675750",
      appId: "1:401072675750:web:50ea4c209b9aa45e074d67"
    };
    
    
    // Initialize Firebase
    
   firebase.initializeApp(firebaseConfig);




var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");


function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "add room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

                                                                                                                                                                                                                                                                                            
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_name-" + Room_names);
row="<div class ='room_name' id="+Room_names+" onclick='redirecToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirecToRoomName(name){
      console.log("name");
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function log_out(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="kwitter.html";
}
