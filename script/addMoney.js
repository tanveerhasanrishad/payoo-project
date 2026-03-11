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
    alert(`Balance Added Successfully 
from ${bankAccount} 
at ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("Wrong Pin Number");
    return;
  }
});
