document.getElementById("converterSelect").addEventListener("change", function() {
  if (this.value) location.href = this.value;
});

document.getElementById("healthSelect").addEventListener("change", function() {
  if (this.value) location.href = this.value;
});


function celsiusToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        document.getElementById("fahrenheit").value = "";
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}

function fahrenheitToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit === "") {
        document.getElementById("celsius").value = "";
        return;
    }
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius").value = celsius.toFixed(2);
}

 function convertLength() {
      let value = parseFloat(document.getElementById("lengthInput").value);
      let fromUnit = document.getElementById("fromUnit").value;
      let toUnit = document.getElementById("toUnit").value;

      if (isNaN(value)) {
        document.getElementById("lengthResult").innerText = "Please enter a number.";
        return;
      }

      let unitsToMeters = {
        m: 1,
        cm: 0.01,
        mm: 0.001,
        km: 1000,
        in: 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        mi: 1609.34
      };

      let meters = value * unitsToMeters[fromUnit];
      let result = meters / unitsToMeters[toUnit];

      document.getElementById("lengthResult").innerText = 
        `${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
    }

const daysInput = document.getElementById("days");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const msInput = document.getElementById("ms");

function convertTime(unit, value) {
    let days, hours, minutes, seconds, milliseconds;

    switch(unit) {
        case "days":
            days = value;
            hours = days * 24;
            minutes = hours * 60;
            seconds = minutes * 60;
            milliseconds = seconds * 1000;
            break;
        case "hours":
            hours = value;
            days = hours / 24;
            minutes = hours * 60;
            seconds = minutes * 60;
            milliseconds = seconds * 1000;
            break;
        case "minutes":
            minutes = value;
            hours = minutes / 60;
            days = hours / 24;
            seconds = minutes * 60;
            milliseconds = seconds * 1000;
            break;
        case "seconds":
            seconds = value;
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
            milliseconds = seconds * 1000;
            break;
        case "ms":
            milliseconds = value;
            seconds = milliseconds / 1000;
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
            break;
    }

    daysInput.value = days.toFixed(4);
    hoursInput.value = hours.toFixed(4);
    minutesInput.value = minutes.toFixed(4);
    secondsInput.value = seconds.toFixed(4);
    msInput.value = milliseconds.toFixed(4);
}

daysInput.addEventListener("input", () => convertTime("days", parseFloat(daysInput.value)));
hoursInput.addEventListener("input", () => convertTime("hours", parseFloat(hoursInput.value)));
minutesInput.addEventListener("input", () => convertTime("minutes", parseFloat(minutesInput.value)));
secondsInput.addEventListener("input", () => convertTime("seconds", parseFloat(secondsInput.value)));
msInput.addEventListener("input", () => convertTime("ms", parseFloat(msInput.value)));

function convertArea() {
    let value = parseFloat(document.getElementById("areaInput").value);
    let fromUnit = document.getElementById("areaFromUnit").value;
    let toUnit = document.getElementById("areaToUnit").value;

    if (isNaN(value)) {
        document.getElementById("areaResult").innerText = "Please enter a number.";
        return;
    }

    let unitsToM2 = {
        m2: 1,
        cm2: 0.0001,
        mm2: 0.000001,
        km2: 1000000,
        ft2: 0.092903,
        in2: 0.00064516,
        yd2: 0.836127,
        mi2: 2589988
    };

    let metersSquared = value * unitsToM2[fromUnit];
    let result = metersSquared / unitsToM2[toUnit];

    document.getElementById("areaResult").innerText = `${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
}

function convertVolume() {
    let value = parseFloat(document.getElementById("volumeInput").value);
    let fromUnit = document.getElementById("volumeFromUnit").value;
    let toUnit = document.getElementById("volumeToUnit").value;

    if (isNaN(value)) {
        document.getElementById("volumeResult").innerText = "Please enter a number.";
        return;
    }

    let unitsToM3 = {
        m3: 1,
        cm3: 0.000001,
        mm3: 0.000000001,
        l: 0.001,
        ml: 0.000001,
        ft3: 0.0283168,
        in3: 0.0000163871,
        yd3: 0.764555,
        gal: 0.00378541
    };

    let cubicMeters = value * unitsToM3[fromUnit];
    let result = cubicMeters / unitsToM3[toUnit];

    document.getElementById("volumeResult").innerText = `${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
}

    function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100; // cm 转换成 m

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById("bmiResult").innerText = "Please enter valid values.";
        return;
    }

    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("bmiResult").innerText = 
        `Your BMI is ${bmi.toFixed(2)} (${category})`;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.querySelector("nav").classList.toggle("dark-mode");

  // 按钮文字切换
  const btn = document.querySelector(".toggle-btn");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}