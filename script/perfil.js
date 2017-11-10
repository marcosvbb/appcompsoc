firebase.auth().onAuthStateChanged(function(user) {
    //referencia para pegar dado no database
   var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('nomeUsuario');
    //funcao pra pegar dado no database
    firebaseRef.on('value', function(datasnapshot){
        $('.perfil-nome').text(datasnapshot.val());
});
//referencia para pegar dado no database
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('cursoUsuario');
    //funcao pra pegar dado no database
    firebaseRef.on('value', function(datasnapshot){
        $('.perfil-curso').text(datasnapshot.val());
});
//referencia para pegar dado no database
var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('periodoUsuario');
//funcao pra pegar dado no database
firebaseRef.on('value', function(datasnapshot){
    if (datasnapshot.val() == 1){
        $('.perfil-calouro-veterano').text('Calouro');
    } else {
        $('.perfil-calouro-veterano').text('Veterano');
    }
});
});