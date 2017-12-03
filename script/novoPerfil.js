$('.principal_perfil').show();
$('.main-perfil').show();
$('.details-perfil').hide();

var database = firebase.database().ref();

firebase.auth().onAuthStateChanged(function(user) {

    //Operações envolvendo nomeUsuario
<<<<<<< HEAD
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('nomeUsuario');

    firebaseRef.on('value', function(datasnapshot) {
        $('.perfil-nome').text(datasnapshot.val());
    });

    firebaseRef.on('value', function(datasnapshot) {
=======
   var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('nomeUsuario');

    firebaseRef.on('value', function(datasnapshot){
        $('.perfil-nome').text(datasnapshot.val());
    });

    firebaseRef.on('value', function(datasnapshot){
>>>>>>> c68063ce7b21b484543adbb8240c449ddab75079
        $('.update-nome-valor').text(datasnapshot.val());
    })

    //Atualiza o nome
<<<<<<< HEAD
    $('body').on('click', '[data-editable]', function() {
        var $el = $(this);

        var $input = $('<input/>').val($el.text());
        $el.replaceWith($input);

        var save = function() {
            var $p = $('<p data-editable />').text($input.val());
            $input.replaceWith($p);

            if ($input.val() != "") {
                database.child("usuario").child(user.uid).child("nomeUsuario").set($input.val());
            }
        };

        $input.one('blur', save).focus();
=======
    $('body').on('click', '[data-editable]', function(){
      var $el = $(this);
                  
      var $input = $('<input/>').val( $el.text() );
      $el.replaceWith( $input );
      
      var save = function() {
        var $p = $('<p data-editable />').text( $input.val() );
        $input.replaceWith( $p );

        if ($input.val() != "") {
            database.child("usuario").child(user.uid).child("nomeUsuario").set($input.val());
        }
      };

      $input.one('blur', save).focus();
>>>>>>> c68063ce7b21b484543adbb8240c449ddab75079

    });

    //Operações envolvendo bioUsuario
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('bioUsuario');
<<<<<<< HEAD
    firebaseRef.on('value', function(datasnapshot) {
        $('.perfil-bio').text(datasnapshot.val());
    });
    firebaseRef.on('value', function(datasnapshot) {
        $('.update-bio-valor').text(datasnapshot.val());
    })
=======
    firebaseRef.on('value', function(datasnapshot){
        $('.perfil-bio').text(datasnapshot.val());
    });
    firebaseRef.on('value', function(datasnapshot){
        $('.update-bio-valor').text(datasnapshot.val());
    })    
>>>>>>> c68063ce7b21b484543adbb8240c449ddab75079


    //Operações envolvendo cursoUsuario
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('cursoUsuario');
<<<<<<< HEAD
    firebaseRef.on('value', function(datasnapshot) {
        $('.curso-valor').text(datasnapshot.val());
    });
    firebaseRef.on('value', function(datasnapshot) {
        $('.update-curso-valor').text(datasnapshot.val());
    })

    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('periodoUsuario');
    firebaseRef.on('value', function(datasnapshot) {
        $('.periodo-valor').text(datasnapshot.val());
    });
    firebaseRef.on('value', function(datasnapshot) {
        $('.update-periodo-valor').text(datasnapshot.val());
    })

    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('escolaUsuario');
    firebaseRef.on('value', function(datasnapshot) {
        $('.escola-valor').text(datasnapshot.val());
    });
    firebaseRef.on('value', function(datasnapshot) {
=======
    firebaseRef.on('value', function(datasnapshot){
        $('.curso-valor').text(datasnapshot.val());
    });
    firebaseRef.on('value', function(datasnapshot){
        $('.update-curso-valor').text(datasnapshot.val());
    })       

    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('periodoUsuario');
    firebaseRef.on('value', function(datasnapshot){
        $('.periodo-valor').text(datasnapshot.val());
    });
    firebaseRef.on('value', function(datasnapshot){
        $('.update-periodo-valor').text(datasnapshot.val());
    })       

    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('escolaUsuario');
    firebaseRef.on('value', function(datasnapshot){
        $('.escola-valor').text(datasnapshot.val());
    });
    firebaseRef.on('value', function(datasnapshot){
>>>>>>> c68063ce7b21b484543adbb8240c449ddab75079
        $('.update-escola-valor').text(datasnapshot.val());
    })

    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('emailUsuario');
<<<<<<< HEAD
    firebaseRef.on('value', function(datasnapshot) {
=======
    firebaseRef.on('value', function(datasnapshot){
>>>>>>> c68063ce7b21b484543adbb8240c449ddab75079
        $('.update-email-valor').text(datasnapshot.val());
    });

    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('cpfUsuario');
<<<<<<< HEAD
    firebaseRef.on('value', function(datasnapshot) {
=======
    firebaseRef.on('value', function(datasnapshot){
>>>>>>> c68063ce7b21b484543adbb8240c449ddab75079
        $('.update-cpf-valor').text(datasnapshot.val());
    });

    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('dreUsuario');
<<<<<<< HEAD
    firebaseRef.on('value', function(datasnapshot) {
        $('.update-dre-valor').text(datasnapshot.val());
    });
});

$('.modificar-detalhes').on('click', function() {
=======
    firebaseRef.on('value', function(datasnapshot){
        $('.update-dre-valor').text(datasnapshot.val());
    });    
});

$('.modificar-detalhes').on('click',function(){
>>>>>>> c68063ce7b21b484543adbb8240c449ddab75079
    $('.main-perfil').hide();
    $('.details-perfil').show();
});