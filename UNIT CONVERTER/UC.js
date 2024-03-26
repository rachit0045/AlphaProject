function convert() {
    const unittype = document.getElementById("unittype").value;
    const inputvalues = parseFloat(document.getElementById("inputvalues").value);
    let result;
    switch (unittype) {
        case 'length':
            result = inputvalues * 0.3048;//feet to meter
            break;
        case "weight":
            result = inputvalues * 0.453592;//pound to kilograms
            break;
        case "temperature":
            result = (inputvalues - 32) * (5 / 9);// Fahrenheit to Celsius
            break;
        default:
            result = "invalid unit type";
    }
    if (!isNaN(result)) {
        document.getElementById('result').textContent = result.toFixed(2);
    } else {
        document.getElementById('result').textContent = result;
    }
}