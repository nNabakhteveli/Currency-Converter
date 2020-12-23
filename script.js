let dollarCurrency = 3.2811;
let euroCurrency = 4.0043;
let rubCurrency = 0.0447;
let tryCurrency = 0.421;


function process() {
    let input = Number(document.form.InputName.value);
    // Dollar($) 
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

    if(typeof input != Number){
        alert("შეიყვანეთ თანხის ვალიდური რაოდენობა");
        usd.innerHTML = ""; 
        euro.innerHTML = ""; 
        rub.innerHTML = ""; 
        ttry.innerHTML = ""; 
        window.location.reload();
    }
}