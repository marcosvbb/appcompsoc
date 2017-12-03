$(function() {
<<<<<<< HEAD
    
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
=======
  // Run code

var database = firebase.database().ref();
     
//logout button
$('.logout').on('click',function(e){
	firebase.auth().signOut().then(function() {
		e.preventDefault();
       window.location = "index.html";
        alert("yo");
    }, function(error) {
        alert(error);
    });
});
>>>>>>> c68063ce7b21b484543adbb8240c449ddab75079
});