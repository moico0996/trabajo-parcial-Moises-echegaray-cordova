function ingresar(){
    let name = document.getElementById("name").value;
    let txt;


    if (name==null ||name==0 || name.length<=1|| name.length>=15  ) {
      txt = "texto invalido";
    } else {
      txt = "valido";
    }
    document.getElementById("dimo").style.color="red";
    document.getElementById("dimo").innerHTML = txt;



    let id = document.getElementById("id").value;
    let ttt;


    if (id==null ||id==0 || id.length<=1|| id.length>=30  ) {
      ttt = "correo no valido";
    } else {
      ttt = "valido";
    }   
    document.getElementById("domo").style.color="red";
    document.getElementById("domo").innerHTML = ttt;



    let comments=document.getElementById("comments").value; 
    let tot;

    if(comments===null||id==0 || id.length<=1|| id.length>=20 ){
        tot="debes mejorar tu comentario";
    } else{
        tot="gracias por tu comentario";
    }
    document.getElementById("com").style.color="red";
    document.getElementById("com").innerHTML=tot;

    
    
















}


var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 