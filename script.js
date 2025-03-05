function temperature() {
    var c = document.getElementById("celsius").value;
    var f = document.getElementById("fahrenheit").value;
    
    if (c !== "") {
        // Convert Celsius to Fahrenheit
        f = (c * 9/5) + 32;
        document.getElementById("fahrenheit").value = f;
    } else if (f !== "") {
        // Convert Fahrenheit to Celsius
        c = (f - 32) * 5/9;
        document.getElementById("celsius").value = c;
    }
}

function weight() {
    var kg = document.getElementById("kilo").value;
    var p = document.getElementById("pounds").value;
    
    if (kg !== "") {
        // Convert Kilograms to Pounds
        p = kg * 2.2;
        document.getElementById("pounds").value = p;
    } else if (p !== "") {
        // Convert Pounds to Kilograms
        kg = p / 2.2;
        document.getElementById("kilo").value = kg;
    }
}

function distance() {
    var km = document.getElementById("km").value;
    var m = document.getElementById("miles").value;
    
    if (km !== "") {
        // Convert Kilometers to Miles
        m = km * 0.62137;
        document.getElementById("miles").value = m;
    } else if (m !== "") {
        // Convert Miles to Kilometers
        km = m / 0.62137;
        document.getElementById("km").value = km;
    }
}
