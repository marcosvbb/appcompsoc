var database = firebase.database().ref();

firebase.auth().onAuthStateChanged(function(user) {
    // Once authenticated, instantiate Firechat with the logged in user
    if (user) {
        initChat(user);
    }
});

function initChat(user) {
    // Get a Firebase Database ref
    var chatRef = firebase.database().ref("chat");

    // Create a Firechat instance
    var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));

    // Set the Firechat user
    var firebaseRef = firebase.database().ref().child('usuario').child(user.uid).child('nomeUsuario');
    firebaseRef.on('value', function(datasnapshot){
        chat.setUser(datasnapshot.val(), datasnapshot.val());
    });

}