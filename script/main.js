$(function() {
    
    var database = firebase.database().ref();

    //logout button
    $('.logout').on('click', function(e) {
        firebase.auth().signOut().then(function() {
            e.preventDefault();
            window.location = "index.html";
            alert("yo");
        }, function(error) {
            alert(error);
        });
    });
    //recebe da frame teste qual cor deve ser definida como fundo
    window.addEventListener("message", function(e) {
        var cor = e.data;
        $('body').css("background-color", cor);
        $('.mdl-layout__header').css("background-color", cor);
    });
});