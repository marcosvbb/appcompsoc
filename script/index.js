$(function() {
<<<<<<< HEAD
    $('.login-card').show();
    $('.login-page').show();
    $('.first-acess-card').hide();
    $('.new-account-card').hide();
    $('.new-pass-card').hide();
    //referencia ao database
    var database = firebase.database().ref();

    //Checa se o usuario esta logado 

    firebase.auth().onAuthStateChanged(function(user) {
        //referencia para pegar email no database
        var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('emailUsuario');

        //funcao para pegar dado no database
        firebaseRef.on('value', function(datasnapshot) {

            //se email verficado e valor do dado (datasnapshot, que é o que está em email no user.uid) existirem
            if (user.emailVerified && datasnapshot.val()) {
                // mostra a tela principal
                $('.login-progress').hide();
                alert(user.uid);
                window.locaiton = "main.html";


                //caso so o email esteja verificado
            } else if (user.emailVerified) {
                //mostra o formulário de preenchimento de first-acess-card
                $('.login-page').show();
                $('.first-acess-card').show();
                $('.login-card').hide();
                $('.new-pass-card').hide();

            }
        });
    });

    //button login auth
    $('.button-login').on('click', function(e) {

        e.preventDefault();
        var $userEmailLogin = $('.login-email').val(),
            $userPasswordLogin = $('.login-pass').val();
        if ($userEmailLogin != '' && $userPasswordLogin != '') {
            $('.login-progress').show();
            $('.button-login').hide();
            //faz o login

            firebase.auth().signInWithEmailAndPassword($userEmailLogin, $userPasswordLogin).then(function(user) {

                var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('emailUsuario');
                firebaseRef.on('value', function(datasnapshot) {

                    if (user.emailVerified && datasnapshot.val()) {
                        window.open('main.html', '_self');
                    } else if (user.emailVerified) {
                        $('.login-page').fadeIn(100);
                        $('.first-acess-card').fadeIn(100);
                        $('.login-card').fadeOut(200);
                        $('.new-pass-card').hide();
                        $('.login-progress').hide();
                    } else {
                        window.alert('Sua conta não foi verificada');
                        $('.login-progress').hide();
                        $('.button-login').show();
                    }
                });
            }).catch(function(error) {
                $('.error-msg').show().text(error.message)
                $('.login-progress').hide();
                $('.button-login').show();
            });
        }
    });


    //mostra forgot-pass-card
    $('.forgot-pass').on('click', function() {
        $('.login-card').fadeOut(200);
        $('.new-pass-card').fadeIn(100);
    });

    //botao resetar senha
    $('.button-new-pass').on('click', function(e) {
        e.preventDefault();
        var $email = $('.input-new-pass-email');
        firebase.auth().sendPasswordResetEmail($email.val()).then(function() {
            window.alert('Clique no link que enviamos para o seu email para a alteração de senha.');
            $email.val('');
        }).catch(function(error) {
            errorNewPassMessage = error.message
            window.alert('Erro: ' + errorNewPassMessage);
        });
    });

    //botao criar nova conta
    $('.button-new-acc').on('click', function(e) {
        e.preventDefault();
        var $email = $('.input-email-new-acc').val();
        var $password = $('.input-pass-new-acc').val();
        var $checkPassword = $('.input-pass-again-new-acc').val();
        //cria conta
        if ($checkPassword == $password) {
            firebase.auth().createUserWithEmailAndPassword($email, $password).then(function() {
                window.alert("Clique no link enviado para o seu email e ative sua conta.");
                $('.input-email-new-acc').val('');
                $('.input-pass-new-acc').val('');
                $('.login-card').show();
                $('.new-account-card').hide();
                firebase.auth().onAuthStateChanged(function(user) {
                    user.sendEmailVerification();
                });
            }).catch(function(error) {
                window.alert(error.message);
            });

        } else {
            window.alert("As senhas inseridas não conferem.");
            $('.input-pass-again-new-acc').val('');
        }
    });

    //Botao login em new-pass-card
    $('.login-link-new-pass').on('click', function() {
        $('.login-card').fadeIn(100);
        $('.new-pass-card').fadeOut(200);
    });

    //Botao nova conta em login-card
    $('.no-acc').on('click', function() {
        $('.new-account-card').fadeIn(100);
        $('.login-card').fadeOut(200);
    });

    //Botao login em new-account-card
    $('.to-login-card').on('click', function() {
        $('.login-card').fadeIn(100);
        $('.new-account-card').fadeOut(200);
    });

    //Gravação inicial de dados

    $('.button-proximo-first-acess').on('click', function(e) {
        e.preventDefault();
        firebase.auth().onAuthStateChanged((user) => {
            var nome = $('.input-name-first-acess').val();
            var cpf = $('.input-cpf-first-acess').val();
            var dre = $('.input-dre-first-acess').val();
            var curso = $('.input-course-first-acess').val();
            var periodo = $('.input-periodo-first-acess').val();
            var escola = $('.input-escola-first-acess').val();
            var email = $('.login-email').val();
            var bio = "Olá, meu nome é " + nome + ".";
            database.child("usuario").child(user.uid).child("emailUsuario").set(email);
            database.child("usuario").child(user.uid).child("nomeUsuario").set(nome);
            database.child("usuario").child(user.uid).child("cpfUsuario").set(cpf);
            database.child("usuario").child(user.uid).child("dreUsuario").set(dre);
            database.child("usuario").child(user.uid).child("cursoUsuario").set(curso);
            database.child("usuario").child(user.uid).child("periodoUsuario").set(periodo);
            database.child("usuario").child(user.uid).child("escolaUsuario").set(escola);
            database.child("usuario").child(user.uid).child("bioUsuario").set(bio);
            database.child("usuario").child(user.uid).child("matchIdUsuario").set('');
            $('.login-progress').show();
            $('.button-proximo-first-acess').hide();
            window.open('main.html', '_self');

        });
=======
$('.login-card').show();
$('.login-page').show();
$('.first-acess-card').hide();
$('.new-account-card').hide();
$('.new-pass-card').hide();
//referencia ao database
var database = firebase.database().ref();
  
//Checa se o usuario esta logado 

firebase.auth().onAuthStateChanged(function(user) {
    //referencia para pegar email no database
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('emailUsuario');
    
    //funcao para pegar dado no database
    firebaseRef.on('value', function(datasnapshot){
        
        //se email verficado e valor do dado (datasnapshot, que é o que está em email no user.uid) existirem
        if(user.emailVerified && datasnapshot.val()) {
            // mostra a tela principal
            $('.login-progress').hide();
            alert(user.uid);
            window.locaiton="main.html";
            
	        
            //caso so o email esteja verificado
        } else if (user.emailVerified) {
            //mostra o formulário de preenchimento de first-acess-card
            $('.login-page').show();
            $('.first-acess-card').show();
	        $('.login-card').hide();
	        $('.new-pass-card').hide();
            
       }
    });
});

//button login auth
$('.button-login').on('click', function(e){

    e.preventDefault();
	var $userEmailLogin = $('.login-email').val(), $userPasswordLogin = $('.login-pass').val();
	if ($userEmailLogin != '' && $userPasswordLogin != ''){
		$('.login-progress').show();
		$('.button-login').hide();
        //faz o login

		firebase.auth().signInWithEmailAndPassword($userEmailLogin, $userPasswordLogin).then(function(user){

            var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('emailUsuario');
            firebaseRef.on('value', function(datasnapshot) {

                if (user.emailVerified && datasnapshot.val()) {
                    window.open('main.html', '_self');
                } else if (user.emailVerified) {
                    $('.login-page').fadeIn(100);
                    $('.first-acess-card').fadeIn(100);
                    $('.login-card').fadeOut(200);
                    $('.new-pass-card').hide();
                    $('.login-progress').hide();
                } else {
                    window.alert('Sua conta não foi verificada');
                    $('.login-progress').hide();
                    $('.button-login').show();
                }
            }); 
        }).catch(function(error) {
			$('.error-msg').show().text(error.message)
			$('.login-progress').hide();
			$('.button-login').show();
		});	
	}
});


//mostra forgot-pass-card
$('.forgot-pass').on('click',function(){
	$('.login-card').fadeOut(200);
	$('.new-pass-card').fadeIn(100);
});

//botao resetar senha
$('.button-new-pass').on('click',function(e){
	e.preventDefault();
	var $email = $('.input-new-pass-email');
	firebase.auth().sendPasswordResetEmail($email.val()).then(function(){
		window.alert('Clique no link que enviamos para o seu email para a alteração de senha.');
		$email.val('');
		}).catch(function(error) {
			errorNewPassMessage = error.message
			window.alert('Erro: '+ errorNewPassMessage);
		});
});

//botao criar nova conta
$('.button-new-acc').on('click',function(e){
    e.preventDefault();
   var $email = $('.input-email-new-acc').val();
    var $password = $('.input-pass-new-acc').val();
    var $checkPassword = $('.input-pass-again-new-acc').val();
    //cria conta
    if ($checkPassword == $password){
       firebase.auth().createUserWithEmailAndPassword($email,$password).then(function(){
           window.alert("Clique no link enviado para o seu email e ative sua conta.");
           $('.input-email-new-acc').val('');
           $('.input-pass-new-acc').val('');
           $('.login-card').show();
           $('.new-account-card').hide();
           firebase.auth().onAuthStateChanged(function(user) {
                user.sendEmailVerification(); 
                }); 
            }).catch(function(error){
                window.alert(error.message);
            });

        } else{
            window.alert("As senhas inseridas não conferem.");   
            $('.input-pass-again-new-acc').val('');
        }
});

//Botao login em new-pass-card
$('.login-link-new-pass').on('click',function(){
    $('.login-card').fadeIn(100);
    $('.new-pass-card').fadeOut(200);
});

//Botao nova conta em login-card
$('.no-acc').on('click',function(){
    $('.new-account-card').fadeIn(100);
    $('.login-card').fadeOut(200);
});

//Botao login em new-account-card
$('.to-login-card').on('click',function(){
    $('.login-card').fadeIn(100);
    $('.new-account-card').fadeOut(200);
});

//Gravação inicial de dados

$('.button-proximo-first-acess').on('click',function(e){
    e.preventDefault();
    firebase.auth().onAuthStateChanged((user) => {
    var nome = $('.input-name-first-acess').val();
    var cpf = $('.input-cpf-first-acess').val();
    var dre = $('.input-dre-first-acess').val();
    var curso = $('.input-course-first-acess').val();
    var periodo = $('.input-periodo-first-acess').val();
    var escola = $('.input-escola-first-acess').val();
    var email = $('.login-email').val();
    var bio = "Olá, meu nome é " + nome + "."; 
    database.child("usuario").child(user.uid).child("emailUsuario").set(email);
    database.child("usuario").child(user.uid).child("nomeUsuario").set(nome);
    database.child("usuario").child(user.uid).child("cpfUsuario").set(cpf);
    database.child("usuario").child(user.uid).child("dreUsuario").set(dre);
    database.child("usuario").child(user.uid).child("cursoUsuario").set(curso);
    database.child("usuario").child(user.uid).child("periodoUsuario").set(periodo);
    database.child("usuario").child(user.uid).child("escolaUsuario").set(escola);
    database.child("usuario").child(user.uid).child("bioUsuario").set(bio);
    $('.login-progress').show();
    $('.button-proximo-first-acess').hide();
    window.open('main.html', '_self');

   }); 
});
>>>>>>> c68063ce7b21b484543adbb8240c449ddab75079
    });

});