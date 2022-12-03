const convertBtn = document.getElementById("convertBtn");
let inputEl = document.getElementById("input-el");
let lengthText = document.getElementById("lenghtText");
let volumeText = document.getElementById("volumeText");
let weightText = document.getElementById("weightText");

const metric = [(meter = 0.3048), (litter = 3.79), (kilogram = 0.454)];
const imperial = [(feet = 3.281), (gallon = 0.264), (pound = 2.204)];



inputEl.addEventListener("input", function(){
    if (inputEl.value == ""){
        inputEl.setAttribute ("placeholder", "type here")
    }else {
        converter()
    }
})

convertBtn.addEventListener("click", function () {

  converter();
});

function converter() {
  metricToImperial = [];
  imperialToMetric = [];
  for (i = 0; i < metric.length; i++) {
    let results;
    results = inputEl.value * imperial[i];
    metricToImperial.push(results.toFixed(3));
  }
  console.log(metricToImperial);
  for (i = 0; i < imperial.length; i++) {
    let results;
    results = inputEl.value * metric[i];
    imperialToMetric.push(results.toFixed(3));
  }
  lengthText.textContent = `${inputEl.value} meters = ${metricToImperial[0]} feet| ${inputEl.value} feet = ${imperialToMetric[0]} meters`;

  volumeText.textContent = `${inputEl.value} liters = ${metricToImperial[1]} gallons| ${inputEl.value} gallons = ${imperialToMetric[1]} liters`;

  weightText.textContent = `${inputEl.value} kilos = ${metricToImperial[2]} pounds| ${inputEl.value} pounds = ${imperialToMetric[2]} kilos`;
}

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
