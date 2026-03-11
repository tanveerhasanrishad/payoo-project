document.getElementById("bonus-btn").addEventListener("click", function () {
  const coupon = getValueFromInput("coupon-number");
  const currentBalance = getBalance();
  if (coupon == "AA0011") {
    alert("Congratulations You Got 5000 Tk Bonus");
    const newBalance = currentBalance + 5000;
    setBalance(newBalance);
    // get the history container
    const history = document.getElementById("history-container");
    // create a new div
    const newHistory = document.createElement("div");
    // add new div innerHTML
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">5000 Tk Added Successfully from Coupon at ${new Date()}
    </div>
    `;
    // append the new div in history container
    history.appendChild(newHistory);
  }
});
