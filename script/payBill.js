document.getElementById("pay-bill-btn").addEventListener("click", function () {
  const bank = getValueFromInput("pay-bill-bank");
  if (bank == "Select Bank") {
    alert("Select Bank");
    return;
  }
  const accNo = getValueFromInput("pay-bill-number");
  if (accNo.length != 11) {
    alert("Invaild Account Number");
    return;
  }
  const amount = getValueFromInput("pay-bill-amount");
  const currentBalance = getBalance();
  if (amount < 0) {
    alert("Invalid Amount");
    return;
  } else if (amount > currentBalance) {
    alert("Insufficient Balance");
    return;
  }
  const pin = getValueFromInput("pay-bill-pin");
  if (pin == "1234") {
    alert(`Bill Pay Successfully 
to ${accNo} 
at ${new Date()}`);
    const newBalance = currentBalance - Number(amount);
    setBalance(newBalance);
    // get the history container
    const history = document.getElementById("history-container");
    // create a new div
    const newHistory = document.createElement("div");
    // add new div innerHTML
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">Bill Paid Successfully to ${bank} , Acc-No ${accNo} at ${new Date()}
    </div>
    `;
    // append the new div in history container
    history.appendChild(newHistory);
  }
});
