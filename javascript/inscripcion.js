 
 

 window.onload=function(){    

    let regexTextoSinCaracteresEspeciales= /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let regexEmail=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let regexTel=/^\d{7,14}$/;
    let form=document.getElementById("form");

    document.getElementById("nombre").setAttribute("value", localStorage.getItem("nombreIndex"));
    document.getElementById("apellido").setAttribute("value", localStorage.getItem("apellidoIndex"));
    document.getElementById("email").setAttribute("value", localStorage.getItem("emailIndex"));


    form.onsubmit=function(e){
        e.preventDefault();
        let error=false;
        let mensajeError="";
        resetear();

        
    if(!regexTextoSinCaracteresEspeciales.test(document.getElementById("nombre").value)){
        error=true;
        mensajeError+="<p>Por favor revise el campo nombre.<p>"
        document.getElementById("nombre").className="inputError";
    }

    
    if(!regexTextoSinCaracteresEspeciales.test(document.getElementById("apellido").value)){
        error=true;
        mensajeError+="<p>Por favor revise el campo apellido.<p>"
        document.getElementById("apellido").className="inputError";
    }

    if(!regexTel.test(document.getElementById("telefono").value)){
        error=true;
        mensajeError+="<p>Por favor revise el campo telefono.<p>"
        document.getElementById("telefono").className="inputError";
    }

    
    if(!regexEmail.test(document.getElementById("email").value)){
        error=true;
        mensajeError+="<p>Por favor revise el campo email.<p>";
        document.getElementById("email").className="inputError";
    }
    
    if(!regexTextoSinCaracteresEspeciales.test(document.getElementById("provincia").value)){
        error=true;
        mensajeError+="<p>Por favor revise el campo provincia.<p>"
        document.getElementById("provincia").className="inputError";
    }
    
    if(!regexTextoSinCaracteresEspeciales.test(document.getElementById("ciudad").value)){
        error=true;
        mensajeError+="<p>Por favor revise el campo ciudad.<p>"
        document.getElementById("ciudad").className="inputError";
    }

        if(error){
            document.getElementById("mensaje").innerHTML=mensajeError;
        }else{
            this.submit();
        }
    }

}

function resetear(){

    document.getElementById("nombre").className="";
    document.getElementById("apellido").className="";
    document.getElementById("telefono").className="";
    document.getElementById("email").className="";
    document.getElementById("provincia").className="";
    document.getElementById("ciudad").className="";

}
