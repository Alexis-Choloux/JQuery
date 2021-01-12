console.log("exercice 4");

const email = $("input[type='email']").val();

$(".btn-danger").click(function() {
    alert("Merci nous vous tiendrons informé des différentes offres sur " + email);
});

$("#myNavbar ul:first li:last").dblclick(function(){
    $(this).hide();
});

let article = 1;

$("img").click(function() {
    $(".navbar-right li:last a").replaceWith("<a href='#'><span class='glyphicon glyphicon-shopping-cart'></span> Cart (" + article++ + ")</a>");
});

$(".panel").each(function() {
    $(this).mouseenter(function(){
        console.log("L'utilisateur regarde : " + $(".panel-footer", this).html());
    });
    $(this).mouseleave(function(){
        console.clear();
    });
})

$("input[type='email'").click(function() {
    console.log("L'utilisateut vient de cliquer sur le formulaire");
    
    $(this).on("input", function() {
    console.clear();
    console.log("L'utilisateur est en train de taper : " + this.value);
    });
})