// Perguntar a temperatura em Celsius (°C)
var temperature = prompt("Qual a temperatura em Celsius?");

// Converter a temperatura para Fahrenheit (°F)
var convertToFahrenheit = (temperature*1.8) + 32;

// Mostrar o resultado no console
console.log("A temperatura em Fahrenheit é "+ convertToFahrenheit);

// Mostrar na tela
function Converter() {
  var convertToFahrenheit = document.getElementById("valor");
  var valor = convertToFahrenheit.value;
  var convertToFahrenheit = parseFloat(valor);

  var convertToFahrenheit = (temperature*1.8) + 32;
  console.log(convertToFahrenheit);

  var elementoResultado = document.getElementById("resultadoConvertido");
  var resultadoConvertido = "A temperatura em Fahrenheit é " + convertToFahrenheit;
  elementoResultado.innerHTML = resultadoConvertido;
}
