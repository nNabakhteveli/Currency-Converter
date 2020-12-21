let dollarCurrency = 3.2811;
let euroCurrency = 4.0043;
let rubCurrency = 0.0447;
let tryCurrency = 0.421;


function process() {
    let input = Number(document.form.InputName.value);
    // Dollar($) 
    document.getElementById('USDoutput').innerHTML = "$" + input / dollarCurrency;
    // Euro(€)
    document.getElementById('EUROoutput').innerHTML = "€" + input / euroCurrency;
    // RUB(₽)
    document.getElementById('RUBoutput').innerHTML = "₽" + input / rubCurrency;
    // TRY(₺)
    document.getElementById('TRYoutput').innerHTML = "₺" + input / tryCurrency;
}