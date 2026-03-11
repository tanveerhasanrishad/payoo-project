document.getElementById("transfer-btn").addEventListener("click", function () {
  const transferNum = getValueFromInput("transfer-number");
  if (transferNum.length != 11) {
    alert("Invalid Number");
    return;
  }

  const amount = getValueFromInput("transfer-amount");
  const currentBalance = getBalance();
  if (amount > currentBalance) {
    alert("Insufficient Balance");
    return;
  } else if (amount < 0) {
    alert("Invalid Amount");
    return;
  }

  const pin = getValueFromInput("transfer-pin");
  if (pin == "1234") {
    const newBalance = currentBalance - Number(amount);
    alert(`${amount} Tk Transfer to acc-no ${transferNum} at ${new Date()} `);
    setBalance(newBalance);
    // get the history container
    const history = document.getElementById("history-container");
    // create a new div
    const newHistory = document.createElement("div");
    // add new div innerHTML
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">Transfer ${amount} Tk Successfully to ${transferNum} at ${new Date()}
    </div>
    `;
    // append the new div in history container
    history.appendChild(newHistory);
  } else {
    alert("Invalid Pin Number");
    return;
  }
});
