let dollarCurrency = 3.2811;
let euroCurrency = 4.0043;
let rubCurrency = 0.0447;
let tryCurrency = 0.421;

function process() {
    // For Dollar($) 
    let input = Number(document.form.InputName.value);
    let usd = document.getElementById('USDoutput');
    usd.innerHTML = "$" + (input / dollarCurrency).toFixed(2);
    // Euro(€)
    let euro = document.getElementById('EUROoutput');
    euro.innerHTML = "€" + (input / euroCurrency).toFixed(2);
    // RUB(₽)
    let rub = document.getElementById('RUBoutput');
    rub.innerHTML = "₽" + (input / rubCurrency).toFixed(2);
    // TRY(₺)
    let ttry = document.getElementById('TRYoutput');
    ttry.innerHTML = "₺" + (input / tryCurrency).toFixed(2);
}