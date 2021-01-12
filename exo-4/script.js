console.log("exercice 4");

const email = $("input[type='email']").val();

$(".btn-danger").click(function() {
    alert("Merci nous vous tiendrons informé des différentes offres sur " + email);
});

$("#myNavbar ul:first li:last").dblclick(function(){
    $(this).hide();
});


$("img").click( event => {
    let text = $(event.currentTarget).parent().next()[0].innerText;
    text = text.split(" ")[1];
    $(".navbar-right li:last a").replaceWith("<a href='#'><span class='glyphicon glyphicon-shopping-cart'></span> Cart (" + text + ")</a>");
});

// $("img").click(function() {
//     $(".navbar-right li:last a").replaceWith("<a href='#'><span class='glyphicon glyphicon-shopping-cart'></span> Cart (" + article++ + ")</a>");
// });

$(".panel").each(function() {
    $(this).mouseenter( event => {
        let text = $(event.currentTarget).parent()[0].innerText;
        text = text.split(" ").pop();
        console.log("L'utilisateur regarde : " + text);
    });
    $(this).mouseleave(function(){
        console.clear();
    });
})

$("input[type='email'").click(function() {
    console.log("L'utilisateur vient de cliquer sur le formulaire");

    $(this).on("input", function() {
    console.clear();
    console.log("L'utilisateur est en train de taper : " + this.value);
    });
})
