var firebaseConfig = {
    apiKey: "AIzaSyBRufHISJ9dC0j7beBnQYpw4duxfgXWW_c",
    authDomain: "trafficlight-5db30.firebaseapp.com",
    databaseURL: "https://trafficlight-5db30-default-rtdb.firebaseio.com/",
    projectId: "trafficlight-5db30",
    storageBucket: "trafficlight-5db30.appspot.com",
    messagingSenderId: "1065531695606",
    appId: "1:1065531695606:web:601ead50225f568dae27d7",
    measurementId: "G-EBZ8RTMJ1T"
  };
  firebase.initializeApp(firebaseConfig)  
function auto()
{
    document.getElementById('input').style.display="none"
    firebase.database().ref().child("/btl/auto_man").set(0)
}
function manual()
{
    document.getElementById('input').style.display="block"
    firebase.database().ref().child("/btl/auto_man").set(1)
}

var red = firebase.database().ref().child("/btl/red")
red.on('value',function(red){
    console.log(red.val());
    document.getElementById('number').innerHTML=red.val();
    if(red.val()==0){
        document.getElementById('yl').style.backgroundColor='white'
        document.getElementById('gr').style.backgroundColor='green'
        document.getElementById('red').style.backgroundColor='white'
    }
});

var gr = firebase.database().ref().child("/btl/gr")
gr.on('value',function(gr){
    console.log(gr.val());
    document.getElementById('number').innerHTML=gr.val();
    if(gr.val()==0){
        document.getElementById('yl').style.backgroundColor='yellow'
        document.getElementById('gr').style.backgroundColor='white'
        document.getElementById('red').style.backgroundColor='white'
    }
});

var yl = firebase.database().ref().child("/btl/yl")
yl.on('value',function(yl){
    console.log(yl.val());
    document.getElementById('number').innerHTML=yl.val();
    if(yl.val()==0){
        document.getElementById('yl').style.backgroundColor='white'
        document.getElementById('gr').style.backgroundColor='green'
        document.getElementById('red').style.backgroundColor='white'
    }
});
function input()
{
    var input_r = document.getElementById('input_r').val
    var input_y = document.getElementById('input_y').val
    var input_g = document.getElementById('input_g').val
    
}
