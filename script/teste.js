var database = firebase.database().ref();

firebase.auth().onAuthStateChanged(function(user) {
    //atualiza os campos {{CALOURO}} de acordo com os dados do banco
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('periodoUsuario');
    firebaseRef.on('value', function(datasnapshot) {
        if (datasnapshot.val() != 1) {
            $('.cal-vet').text("calouro");
        } else {
            $('.cal-vet').text("veterano");
        }
    });
    
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('matchIdUsuario');
    firebaseRef.on('value', function(datasnapshot) {
        var firebaseRef2 = firebase.database().ref().child('usuario').child(user.uid).child('teste').child('generoSerieTESTE');
        firebaseRef2.on('value', function(data) {
            //checa se o teste foi respondido e se o ususario possui match
            if (data.val() && (!datasnapshot.val())) {
                //coordena exibicao das telas
                $('#teste-bem-vindo').hide();
                $('#teste-aguarde').show();
                //caso possua match
            } else if (datasnapshot.val()) {
                $('#teste-bem-vindo').fadeOut(200);
                $('#teste-aguarde').fadeOut(200);
                $('#teste-match').fadeIn(100);
                //exibe nome do match
                var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('matchIdUsuario');
                firebaseRef.on('value', function(datasnapshot) {
                    var firebaseRef = firebase.database().ref().child('usuario').child(datasnapshot.val()).child('nomeUsuario');
                    firebaseRef.on('value', function(data) {
                        $('.nome-match').text(data.val());
                    });

                });

            } else {
                //testes
                $('#teste-bem-vindo').fadeIn(100);
                $('#teste-iniciar').on("click", function() {
                    $('#teste-bem-vindo').fadeOut(200);
                    $('#teste-genero-serie').fadeIn(100);
                });
                $('.serie').on("click", function() {
                    firebase.auth().onAuthStateChanged((user) => {
                        database.child("usuario").child(user.uid).child("teste").child("generoSerieTESTE").set($(this).attr('value'));

                    });
                    $('#teste-genero-serie').fadeOut(200);
                    $('#teste-materia-escola').fadeIn(100);


                });
                $('.materia').on("click", function() {
                    firebase.auth().onAuthStateChanged((user) => {
                        database.child("usuario").child(user.uid).child("teste").child("materiaEscolaTESTE").set($(this).attr('value'));
                    });
                    $('#teste-materia-escola').fadeOut(200);
                    $('#teste-aguarde').fadeIn(100);
                });
            }


        });
    });
});

//mudanca de cor de fundo
var cores = ["#4b0082", "#551a8b", "#A4C639", "#ffbf00", "#B2DFEE", "#008080"];
$('body').on("click", function() {
    var cor = cores[Math.floor(Math.random() * 6) + 1];
    window.parent.postMessage(cor, "*");
    $('body').css("background-color", cor);

});