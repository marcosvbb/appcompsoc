$('.principal_perfil').show();
$('.main-perfil').show();
$('.details-perfil').hide();

var database = firebase.database().ref();

firebase.auth().onAuthStateChanged(function(user) {

    //Operações envolvendo nomeUsuario
   var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('nomeUsuario');

    firebaseRef.on('value', function(datasnapshot){
        $('.perfil-nome').text(datasnapshot.val());
    });

    firebaseRef.on('value', function(datasnapshot){
        $('.update-nome-valor').text(datasnapshot.val());
    })

    //Atualiza o nome
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

    });

    //Operações envolvendo bioUsuario
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('bioUsuario');
    firebaseRef.on('value', function(datasnapshot){
        $('.perfil-bio').text(datasnapshot.val());
    });
    firebaseRef.on('value', function(datasnapshot){
        $('.update-bio-valor').text(datasnapshot.val());
    })    


    //Operações envolvendo cursoUsuario
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('cursoUsuario');
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
        $('.update-escola-valor').text(datasnapshot.val());
    })

    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('emailUsuario');
    firebaseRef.on('value', function(datasnapshot){
        $('.update-email-valor').text(datasnapshot.val());
    });

    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('cpfUsuario');
    firebaseRef.on('value', function(datasnapshot){
        $('.update-cpf-valor').text(datasnapshot.val());
    });

    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('dreUsuario');
    firebaseRef.on('value', function(datasnapshot){
        $('.update-dre-valor').text(datasnapshot.val());
    });    
});

$('.modificar-detalhes').on('click',function(){
    $('.main-perfil').hide();
    $('.details-perfil').show();
});