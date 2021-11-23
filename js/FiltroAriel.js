//JQuery Ariel Serur


$(".btnFiltrar").click(function(){
    $('.esta1').show();
    var idioma= $("#idioma").val();
    var establecimiento= $("#establecimiento").val();
    var cont1 = $(".cont1").val();
    var cont2 = $(".cont2").val();
    if(idioma == "" && establecimiento == ""){
        alert("completa algunos de los datos");
    }
    if(establecimiento!=""){
        $('.esta1').filter(function(){
        
            return $(this).data('lugar') != establecimiento;
        }).hide();
    }
   if(idioma!=""){
    $('.esta1').filter(function(){
        return $(this).data('idioma') != idioma;
    }).hide();
   }
   if( $('.mes1CalCurso').children('article').children(".cont1:visible").length == 0 ){
       $("#mes1").hide();
   }else{
    $("#mes1").show();
   }
   if( $('.mes1CalCurso').children('article').children(".cont2:visible").length == 0 ){
       $("#mes2").hide();
   }else{
    $("#mes2").show();
   }
  
});

//JavaScript
$('#form').submit(function (e) {
    e.preventDefault();
  });

  $('#btn2').click(function (e) {
    e.preventDefault();
    alert('arranca');
      
  });

function validaContacto(){
    var nombres = document.getElementById('validaNombreYapellido').value;
    var telefono = document.getElementById('tel').value;
    var mail = document.getElementById('mail').value;
    var texto = document.getElementById('textarea').value;
    
    if(nombres ==''){
        document.getElementsByClassName('errorCompletar')[0].style.display ='none';
        
      
    }else{
        document.getElementsByClassName('errorCompletar')[0].style.display ='none';
        
        
    }



}



































