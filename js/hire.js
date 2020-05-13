let hire_ad_card = (h, d) => {
    return `
    <div class="hire-ad-info hire-bg-1">
        ${h} HOUR${h === 1 ? '' : 'S'} (${h === 50 ? 'EMAIL' :`$${d.toFixed(2)}`})
    </div>
    `
}

$(document).ready(function() {

    let hire_ads_html = `
    <div class="hire-ad-info hire-bg-2">
        EMAIL HIRING INQUIRIES TO I.AM@STRONGUY.CA
    </div>
    `;
    let hourly = 24.99;
    for(let i = 1; i <= 50; i++) {
        hire_ads_html += hire_ad_card(i, i * hourly)
    }
    $("#hire-ads-placeholder").html(hire_ads_html);

})
