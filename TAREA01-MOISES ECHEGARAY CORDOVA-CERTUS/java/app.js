function validar(){
        
        let selec=document.getElementById("selec").selectedIndex; 
        


        if(selec==null||selec==0){
            alert("completa las opciones");

        }
            
        
        let nombre = document.getElementById("nombre").value;
        let text;


        if (nombre==null ||nombre==0 || nombre.length<=1|| nombre.length>=15  ) {
          text = "texto invalido";
        } else {
          text = "valido";
        }
        document.getElementById("demo").style.color="red";
        document.getElementById("demo").innerHTML = text;

        let tiempo=document.getElementById("tiempo").value; 
        let tst; 

        if(tiempo==null||tiempo==0 || isNaN(tiempo)){
            tst="ingresa el tiempo de viaje, solo debe ser numeros";

        }else{
            tst="texto ingresado";
        }
        document.getElementById("time").style.color="red";
        document.getElementById("time").innerHTML=tst;

        let email=document.getElementById("email").value; 
        let tpt; 

        if(email==null||email==0){
            tst="ingresa lo solicitado";

        }else{
            tst="texto completado";
        }
        document.getElementById("mail").style.color="red";
        document.getElementById("mail").innerHTML=tst;



        let telefono=document.getElementById("telefono").value; 
        let tlf; 

        if(!(/^\d{9}$/.test(telefono)) ){
            tst="ingresa 9 digitos";

        }else{
            tst="completado";
        }
        document.getElementById("telef").style.color="red";
        document.getElementById("telef").innerHTML=tst;


        let ubicacion=document.getElementById("ubicacion").value; 
        let ubc; 

        if(ubicacion.length==0|| ubicacion==null){
            ubc="debes ingresar la ubicacion";

        }else{
            ubc="completado";
        }
        document.getElementById("ubica").style.color="red";
        document.getElementById("ubica").innerHTML=ubc;


        






    

      


      

}