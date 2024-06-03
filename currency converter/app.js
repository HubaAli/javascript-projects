const api = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "PKR";

let convertCurrency = () => {
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  if (amount.length != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];
        const ConvertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${ConvertedAmount.toFixed(2)} ${toCurrency}`;
      });
  } else {
    alert("Please Enter Some Value !");
  }
};

document.querySelector("#convert-button").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);