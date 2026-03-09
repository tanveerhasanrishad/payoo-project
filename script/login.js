document.getElementById("login-btn").addEventListener("click", function () {
  // get the mobile number
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);
  numberInput.value = "";

  // get the pin
  const pinInput = document.getElementById("input-pin");
  const pin = pinInput.value;
  console.log(pin);
  pinInput.value = "";

  // match mobile number and pin
  if (contactNumber === "01600204726" && pin === "1750") {
    // alert > Homepage
    alert("Login Successful");

    window.location.assign("/home.html");
  } else {
    // alert > return
    alert("Login Failed");
    return;
  }
});
