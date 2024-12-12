// Sample currency conversion rates (in reality, you'd use an API for live rates)
const exchangeRates = {
    "USD": { "USD": 1, "EUR": 0.85, "GBP": 0.75, "JPY": 110 },
    "EUR": { "USD": 1.18, "EUR": 1, "GBP": 0.88, "JPY": 129 },
    "GBP": { "USD": 1.33, "EUR": 1.14, "GBP": 1, "JPY": 146 },
    "JPY": { "USD": 0.0091, "EUR": 0.0077, "GBP": 0.0068, "JPY": 1 }
  };
  
  function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
  
    if (isNaN(amount) || amount <= 0) {
      document.getElementById("result").innerText = "Please enter a valid amount.";
      return;
    }
  
    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;
    document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
  }
  