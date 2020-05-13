$(document).ready(function() {
    $("#navbar-placeholder").load("../navbar.html");

    $("#close-popup").on("click", function(){
        $(".popup").css("display", "none")
    })
})
