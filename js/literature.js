$(document).ready(function() {
    console.log("test")
    $.getJSON("../data/literature.json", function(data){
        console.log(data);
        $("#literature").html(data.literature);
    })
})
