$(document).ready(function() {

    $.getJSON("../data/home.json", function(data){
        let bio_text = "";
        let nicknames = data.nicknames.sort(() => Math.random() - 0.5);;
        let bio_split = data.bio.split("@nickname@")
        bio_text += bio_split[0];
        for(let i = 1; i < bio_split.length; i++){
            bio_text += `\"${nicknames[i - 1]}\"`;
            bio_text += bio_split[i];
        }

        $("#bio-placeholder").html(bio_text.toUpperCase());
    })
})
