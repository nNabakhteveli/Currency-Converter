function process() {
    var input = Number(document.form.InputName.value);
    document.getElementById('output').innerHTML = "$" + input / 3.3200;
    document.getElementById('secondOutput').innerHTML = "€" + input / 4.0480;
}