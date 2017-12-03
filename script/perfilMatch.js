var database = firebase.database().ref();
// pega as informações do seu match 
firebase.auth().onAuthStateChanged(function(user) {

    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('matchIdUsuario');
    firebaseRef.on('value', function(datasnapshot) {
        var firebaseRef2 = firebase.database().ref().child('usuario').child(datasnapshot.val()).child('nomeUsuario');

        firebaseRef2.on('value', function(data) {
            $('.perfil-nome').text(data.val());
        });

    });


    firebaseRef.on('value', function(datasnapshot) {
        var firebaseRef2 = firebase.database().ref().child('usuario').child(datasnapshot.val()).child('bioUsuario');

        firebaseRef2.on('value', function(data) {
            $('.perfil-bio').text(data.val());
        });

    });


    firebaseRef.on('value', function(datasnapshot) {
        var firebaseRef2 = firebase.database().ref().child('usuario').child(datasnapshot.val()).child('cursoUsuario');

        firebaseRef2.on('value', function(data) {
            $('.curso-valor').text(data.val());
        });

        firebaseRef.on('value', function(datasnapshot) {
            var firebaseRef2 = firebase.database().ref().child('usuario').child(datasnapshot.val()).child('periodoUsuario');

            firebaseRef2.on('value', function(data) {
                $('.periodo-valor').text(data.val());
            });

        });
        firebaseRef.on('value', function(datasnapshot) {
            var firebaseRef2 = firebase.database().ref().child('usuario').child(datasnapshot.val()).child('escolaUsuario');

            firebaseRef2.on('value', function(data) {
                $('.escola-valor').text(data.val());
            });

        });

        firebaseRef.on('value', function(datasnapshot) {
            var firebaseRef2 = firebase.database().ref().child('usuario').child(datasnapshot.val()).child('teste').child('generoSerieTESTE');

            firebaseRef2.on('value', function(data) {
                $('.serie-valor').text(data.val()); //glkd
            });

        });


        firebaseRef.on('value', function(datasnapshot) {
            var firebaseRef2 = firebase.database().ref().child('usuario').child(datasnapshot.val()).child('teste').child('materiaEscolaTESTE');

            firebaseRef2.on('value', function(data) {
                $('.materia-valor').text(data.val()); //glkd
            });

        });

    });

});

$('.voltar').on("click", function() {
    window.open("main.html", "_self");
});