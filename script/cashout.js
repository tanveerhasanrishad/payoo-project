document.getElementById("cashout-btn").addEventListener("click", function () {
  // get agent number

  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invaild Agent Number");
    return;
  }

  // get Amount

  const cashoutAmount = getValueFromInput("cashout-amount");
  if (cashoutAmount < 0) {
    alert("Invaild Amount");
    return;
  }

  const currentBalance = getBalance();

  // Calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);

  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  // get pin and verify

  const cashoutPin = getValueFromInput("cashout-pin");

  if (cashoutPin == "1234") {
    // show an alert > set balance
    alert("Cash out successful");
    setBalance(newBalance);
    // get the history container
    const history = document.getElementById("history-container");
    // create a new div
    const newHistory = document.createElement("div");
    // add new div innerHTML
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">Cashout ${cashoutAmount} Tk Successfully to ${cashoutNumber} at ${new Date()}
    </div>
    `;
    // append the new div in history container
    history.appendChild(newHistory);
  } else {
    // show an alert > return
    alert("Invaild Pin");
    return;
  }
});
