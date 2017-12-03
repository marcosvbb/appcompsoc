$('#em').on('click', function(){
    $('.buscaMain').hide();
    $('.buscaResultados').show();
});


firebase.auth().onAuthStateChanged(function(user) {
    var referencia = firebase.database().ref().child("usuario");
    var refId = firebase.database().ref().child("usuario").child(user.uid).child("escolaUsuario");
    referencia.on("child_added", snap=>{
       var escola = snap.child("escolaUsuario").val();
        if (escola == refId.val()){
            alert(escola);
        }
        
        
    });
});
