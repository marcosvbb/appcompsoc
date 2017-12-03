$(function() {
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
});