let brag_card = (brag, k) => {
    return `
    <div class="card-wrapper col-sm">
        <div class="card" data-toggle="modal" data-target="#brag-${k}">
            <img src="/images/brags/${brag.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${brag.title}</h5>
            </div>
        </div>
        <div class="modal fade" id="brag-${k}" tabindex="-1">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <p class="modal-title title">${brag.title}</p>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img src="/images/brags/${brag.image}"/>
                    <p class="desc">${brag.description}</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    `
}

let load_brags = (data) => {
    let brags_html = `<div class="row">`;
    data.forEach((brag, k) => {
        if(k % 3 === 0) brags_html += `</div><div class="row">`
        brags_html += brag_card(brag, k);
    })
    brags_html += `</div>`
    $("#what-i-can-lift-placeholder").html(brags_html);
}
$(document).ready(function() {

    let brag_data = [];
    $.getJSON("../data/brags.json", function(data){
        brag_data = data;
    }).then(() => {
        load_brags(brag_data);
    })

    $("#weight-up").on("click", () => {
        let sorted_data = brag_data.sort((a, b) => {
            return a.weight - b.weight;
        })
        load_brags(sorted_data);
    })

    $("#weight-down").on("click", () => {
        let sorted_data = brag_data.sort((a, b) => {
            return b.weight - a.weight;
        })
        load_brags(sorted_data);
    })
})
