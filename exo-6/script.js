console.log("exercice 6");

$("button").one("click", function (event) {

    event.preventDefault();

    const email = $("#exampleInputEmail1").val();
    const password = $("#exampleInputPassword1").val();

    if (!email) {
        $("form").after("<div class='alert alert-danger mt-2'>Le champs \'Email\' est obligatoire !");
    } 
    else if (password.length < 6) {
        $("form").after("<div class='alert alert-danger mt-2'>Votre mot de passe contient " + password.length + " caractères, il doit en compter au moins 6 !");
    } 
    else {
        console.log(email, password);
    }
})