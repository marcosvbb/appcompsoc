$('.voltar').on("click", function(){
                     window.open("main.html", "_self");
                     });
$('#teste-iniciar').on("click",function(){
                    $('#teste-bem-vindo').fadeOut(200);
                    $('#teste-genero-serie').fadeIn(100);
});
$('.serie').on("click", function(){
    $('#teste-genero-serie').fadeOut(200);
    $('#teste-materia-escola').fadeIn(100);
    //$(this).attr('value');
});
$('.materia').on("click", function(){
    $('#teste-materia-escola').fadeOut(200);
    $('#teste-aguarde').fadeIn(100);
    //$(this).attr('value');
});
