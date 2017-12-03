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
    $('body').on('click', '[name-data-editable]', function(){
      var $el = $(this);
                  
      var $input = $('<input/>').val( $el.text() );
      $el.replaceWith( $input );
      
      var save = function() {
        var $p = $('<p name-data-editable />').text( $input.val() );
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

    //Atualiza a bio
    $('body').on('click', '[bio-data-editable]', function(){
      var $el = $(this);
                  
      var $input = $('<input/>').val( $el.text() );
      $el.replaceWith( $input );
      
      var save = function() {
        var $p = $('<p bio-data-editable />').text( $input.val() );
        $input.replaceWith( $p );

        if ($input.val() != "") {
            database.child("usuario").child(user.uid).child("bioUsuario").set($input.val());
        }
      };

      $input.one('blur', save).focus();

    });    

    //Operações envolvendo cursoUsuario
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('cursoUsuario');
    firebaseRef.on('value', function(datasnapshot){
        $('.curso-valor').text(datasnapshot.val());
    });

    firebaseRef.on('value', function(datasnapshot){
        $('.update-curso-valor').text(datasnapshot.val());
    })

    //Atualiza o curso
    $('body').on('click', '[curso-data-editable]', function(){
      var $el = $(this);
                  
      var $input = $('<input/>').val( $el.text() );
      $el.replaceWith( $input );
      
      var save = function() {
        var $p = $('<p curso-data-editable />').text( $input.val() );
        $input.replaceWith( $p );

        if ($input.val() != "") {
            database.child("usuario").child(user.uid).child("cursoUsuario").set($input.val());
        }
      };

      $input.one('blur', save).focus();

    });

    //Operações envolvendo período
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('periodoUsuario');
    firebaseRef.on('value', function(datasnapshot){
        $('.periodo-valor').text(datasnapshot.val());
    });
    firebaseRef.on('value', function(datasnapshot){
        $('.update-periodo-valor').text(datasnapshot.val());
    })

    //Atualiza o período
    $('body').on('click', '[periodo-data-editable]', function(){
      var $el = $(this);
                  
      var $input = $('<input/>').val( $el.text() );
      $el.replaceWith( $input );
      
      var save = function() {
        var $p = $('<p periodo-data-editable />').text( $input.val() );
        $input.replaceWith( $p );

        if ($input.val() != "") {
            database.child("usuario").child(user.uid).child("periodoUsuario").set($input.val());
        }
      };

      $input.one('blur', save).focus();

    });

    //Operações envolvendo escola
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('escolaUsuario');
    firebaseRef.on('value', function(datasnapshot){
        $('.escola-valor').text(datasnapshot.val());
    });
    firebaseRef.on('value', function(datasnapshot){
        $('.update-escola-valor').text(datasnapshot.val());
    })

    //Atualiza a escola
    $('body').on('click', '[escola-data-editable]', function(){
      var $el = $(this);
                  
      var $input = $('<input/>').val( $el.text() );
      $el.replaceWith( $input );
      
      var save = function() {
        var $p = $('<p escola-data-editable />').text( $input.val() );
        $input.replaceWith( $p );

        if ($input.val() != "") {
            database.child("usuario").child(user.uid).child("escolaUsuario").set($input.val());
        }
      };

      $input.one('blur', save).focus();

    });

    //Operações envolvendo email
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('emailUsuario');
    firebaseRef.on('value', function(datasnapshot){
        $('.update-email-valor').text(datasnapshot.val());
    });

    //Atualiza o email
    $('body').on('click', '[email-data-editable]', function(){
      var $el = $(this);
                  
      var $input = $('<input/>').val( $el.text() );
      $el.replaceWith( $input );
      
      var save = function() {
        var $p = $('<p email-data-editable />').text( $input.val() );
        $input.replaceWith( $p );

        if ($input.val() != "") {
            database.child("usuario").child(user.uid).child("emailUsuario").set($input.val());
        }
      };

      $input.one('blur', save).focus();

    });

    //Operações envolvendo CPF    
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('cpfUsuario');
    firebaseRef.on('value', function(datasnapshot){
        $('.update-cpf-valor').text(datasnapshot.val());
    });

    //Atualiza CPF
    $('body').on('click', '[cpf-data-editable]', function(){
      var $el = $(this);
                  
      var $input = $('<input/>').val( $el.text() );
      $el.replaceWith( $input );
      
      var save = function() {
        var $p = $('<p cpf-data-editable />').text( $input.val() );
        $input.replaceWith( $p );

        if ($input.val() != "") {
            database.child("usuario").child(user.uid).child("cpfUsuario").set($input.val());
        }
      };

      $input.one('blur', save).focus();

    });

    //Operações envolvendo DRE
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('dreUsuario');
    firebaseRef.on('value', function(datasnapshot){
        $('.update-dre-valor').text(datasnapshot.val());
    });

    //Atualiza o DRE
    $('body').on('click', '[dre-data-editable]', function(){
      var $el = $(this);
                  
      var $input = $('<input/>').val( $el.text() );
      $el.replaceWith( $input );
      
      var save = function() {
        var $p = $('<p dre-data-editable />').text( $input.val() );
        $input.replaceWith( $p );

        if ($input.val() != "") {
            database.child("usuario").child(user.uid).child("dreUsuario").set($input.val());
        }
      };

      $input.one('blur', save).focus();

    });
});

$('.modificar-detalhes').on('click',function(){
    $('.main-perfil').hide();
    $('.details-perfil').show();
});