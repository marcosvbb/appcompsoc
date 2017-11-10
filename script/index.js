$('.login-card').show();
$('.login-page').show();
$('.first-acess-card').hide();
$('.new-account-card').hide();
$('.new-pass-card').hide();
//referencia ao database
var database = firebase.database().ref();
  
// checa se o usuario esta logado 

firebase.auth().onAuthStateChanged(function(user) {
    //referencia para pegar email no database
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('emailUsuario');
    
    //funcao para pegar dado no database
    firebaseRef.on('value', function(datasnapshot){
        
        
    
        //se email verficado e valor do dado (datasnapshot, que é o que está em email no user.uid) existirem
        if(user.emailVerified && datasnapshot.val()) {
            // mostra a tela principal
            $('.first-acess-card').hide();
            $('.new-pass-card').hide();
            $('.login-page').hide();
	        $('.login-card').hide();
	        
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
            if (user.emailVerified) {
                $('.login-page').show();
	            $('.login-card').hide();
	            $('.new-pass-card').hide();
                $('.new-account-card').hide();
            } else {
                window.alert('Sua conta não foi verificada');
                $('.login-progress').hide();
                $('.button-login').show();
  }
            
        }).catch(function(error) {
			$('.error-msg').show().text(error.message);
			$('.login-progress').hide();
			$('.button-login').show();
		});	
	}
    

});
//logout button
$('.logout').on('click',function(e){
	firebase.auth().signOut().then(function() {
		e.preventDefault();
		$('.login-page').show().slideDown();
		$('.login-card').show().slideDown();
		$('.login-progress').hide();
		$('.button-login').show();
		$('.error-msg').show().text('');
		$('.login-pass').val('');
}, function(error) {
        alert(error);
});
});
//mostra forgot-pass-card
$('.forgot-pass').on('click',function(){
	$('.login-card').hide();
	$('.new-pass-card').show();
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

// botao criar nova conta
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

        }else{
            window.alert("As senhas inseridas não conferem.");   
            $('.input-pass-again-new-acc').val('');
        }
}
    );
//Botao login em login-link-card
$('.login-link-new-pass').on('click',function(){
    $('.login-card').show();
    $('.new-pass-card').hide();
});
//Botao nova conta em login-card
$('.no-acc').on('click',function(){
    $('.new-account-card').show();
    $('.login-card').hide();
});
//Botao nova conta em login-card
$('.to-login-card').on('click',function(){
    $('.login-card').show();
    $('.new-account-card').hide();
    
});
// gravação inicial de dados

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
    database.child("usuario").child(user.uid).child("emailUsuario").set(email);
    database.child("usuario").child(user.uid).child("nomeUsuario").set(nome);
    database.child("usuario").child(user.uid).child("cpfUsuario").set(cpf);
    database.child("usuario").child(user.uid).child("dreUsuario").set(dre);
    database.child("usuario").child(user.uid).child("cursoUsuario").set(curso);
    database.child("usuario").child(user.uid).child("periodoUsuario").set(periodo);
    database.child("usuario").child(user.uid).child("escolaUsuario").set(escola);
    $('.login-progress').show();
    $('.button-proximo-first-acess').hide();
    
   }); 
  });

