console.log("exercice 3");

$("h1").text("Alexis Choloux");

$("#tagline").text("Développeur Web - Full Stack");

$("#myNavbar ul:first").remove("");

$(".glyphicon-log-in").addClass("glyphicon-circle-arrow-right").removeClass("glyphicon-log-in");

$("footer p").text("Copyright 2017").css("font-weight", "bold");

$(".col-sm-3 p").each(function(i) {
    $(this).text('Mon projet ' + (i+1));
});

$(".col-sm-3 img").each(function(i) {
    $(this).attr("src", "pony" + (i+1) + ".jpg")
})


let mainImg = "<img src='pony.jpg' style='height: 200px'>";

$(".container-fluid h3").after("<a href='#'><div>" + mainImg + "<p>Ma dernière réalisation</p></div></a>");

$("footer").addClass("intro");