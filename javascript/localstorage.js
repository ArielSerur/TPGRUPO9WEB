window.onload=function(){

    const formIndex=document.getElementById("formIndex");
    const nombreIndex=document.getElementById("nombreIndex");
    const apellidoIndex=document.getElementById("apellidoIndex");
    const emailIndex=document.getElementById("emailIndex");

    formIndex.onsubmit=function(e){

    e.preventDefault();
     localStorage.setItem("nombreIndex",nombreIndex.value);
     localStorage.setItem("apellidoIndex",apellidoIndex.value);
     localStorage.setItem("emailIndex",emailIndex.value);

     this.submit();
    }

}