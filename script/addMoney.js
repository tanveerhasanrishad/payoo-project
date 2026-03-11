document.getElementById("add-money-btn").addEventListener("click", function () {
  // bank account get
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select Bank") {
    alert("Please Select a Bank");
    return;
  }
  // get bank account number
  const accNo = getValueFromInput("add-money-number");
  if (accNo.length != 11) {
    alert("Invalid Account Number");
    return;
  }
  // get amount
  const amount = getValueFromInput("add-money-amount");
  if (amount < 0) {
    alert("Invaild Amount");
    return;
  }

  const newBalance = getBalance() + Number(amount);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`${amount} Tk Added Successfully 
from ${bankAccount} 
at ${new Date()}`);
    setBalance(newBalance);
    // get the history container
    const history = document.getElementById("history-container");
    // create a new div
    const newHistory = document.createElement("div");
    // add new div innerHTML
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">${amount} Tk Added Successfully from ${bankAccount} , acc-no ${accNo} at ${new Date()}
    </div>
    `;
    // append the new div in history container
    history.appendChild(newHistory);
  } else {
    alert("Wrong Pin Number");
    return;
  }
});
