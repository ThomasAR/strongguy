let weakness_card = weakness => {
    return `
    <div class="ability row">
        <img src="../images/weaknesses/${weakness.image}" class="col-sm-4">
        <div class="ability-info col-sm-7">
        <div class="title">${weakness.title}</div>
        <div class="desc">${weakness.description}</div>
        </div>
    </div>
    `
}

$(document).ready(function() {

    $.getJSON("../data/weaknesses.json", function(data){
        let weaknesses_html = "";
        data.forEach((weakness, k) => {
            weaknesses_html += weakness_card(weakness, k);
        })
        $("#weaknesses-placeholder").html(weaknesses_html);
    })
})
