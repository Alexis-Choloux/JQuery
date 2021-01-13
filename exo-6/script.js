console.log("exercice 6");

function isEmail(email) {
    let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}

    $("button").one("click", function (event) {

        event.preventDefault();

        const email = $("#exampleInputEmail1").val();
        const password = $("#exampleInputPassword1").val();

        if (!email) {
            $("form").after("<div class='alert alert-danger mt-2'>Le champs \'Email\' est obligatoire !");
        }
        else if (isEmail(email) == false) {
            $("form").after("<div class='alert alert-danger mt-2'>Merci d'insérer un email valide !");
        }
        else if (password.length < 6) {
            $("form").after("<div class='alert alert-danger mt-2'>Votre mot de passe contient " + password.length + " caractères, il doit en compter au moins 6 !");
        }
        else {
            alert('Vous êtes connecté !');
        }
    })

