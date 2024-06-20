function konversiCelcius() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        alert("Masukkan nilai Celsius yang valid.");
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('cara').value = `${celsius}°C * 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function konversiFahrenheit() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (isNaN(fahrenheit)) {
        alert("Masukkan nilai Fahrenheit yang valid.");
        return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('cara').value = `(${fahrenheit}°F - 32) * 5/9 = ${celsius.toFixed(2)}°C`;
}

function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('cara').value = '';
}
