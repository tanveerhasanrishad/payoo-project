document.getElementById("cashout-btn").addEventListener("click", function () {
  // get agent number
  const cashoutNumberInput = document.getElementById("cashout-number");
  const cashoutNumber = cashoutNumberInput.value;
  if (cashoutNumber.length != 11) {
    alert("Invaild Agent Number");
    return;
  }
  cashoutNumberInput.value = "";

  // get Amount
  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmount = cashoutAmountInput.value;
  if (cashoutAmount < 0) {
    alert("Invaild Amount");
    return;
  }

  cashoutAmountInput.value = "";

  // get Current Balance
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;

  // Calculate new balance
  const newBalance = Number(balance) - Number(cashoutAmount);

  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  // get pin and verify
  const cashoutPinInput = document.getElementById("cashout-pin");
  const cashoutPin = cashoutPinInput.value;

  cashoutPinInput.value = "";
  if (cashoutPin == "1234") {
    // show an alert > set balance
    alert("Cash out successful");
    balanceElement.innerText = newBalance;
  } else {
    // show an alert > return
    alert("Invaild Pin");
    return;
  }
});
