let ability_card = ability => {
    return `
    <div class="ability row">
        <img src="../images/abilities/${ability.image}" class="col-sm-4">
        <div class="ability-info col-sm-7">
        <div class="title">${ability.title}</div>
        <div class="desc">${ability.description}</div>
        </div>
    </div>
    `
}

$(document).ready(function() {

    $.getJSON("../data/abilities.json", function(data){
        let abilities_html = "";
        data.forEach((ability, k) => {
            abilities_html += ability_card(ability, k);
        })
        $("#special-abilities-placeholder").html(abilities_html);
    })
})
