document.getElementById("history").addEventListener("click", function () {
  this.classList.add("bg-green-500");
  // Select the donation button and remove the green background
  document.querySelector("button#donation").classList.remove("bg-green-500");
  document.querySelector("div#history-div").classList.remove("hidden");
  document.querySelector("div#donation-div").classList.add("hidden");
});

document.getElementById("donation").addEventListener("click", function () {
  this.classList.add("bg-green-500");
  // Select the donation button and remove the green background
  document.querySelector("button#history").classList.remove("bg-green-500");
  document.querySelector("div#donation-div").classList.remove("hidden");
  document.querySelector("div#history-div").classList.add("hidden");
});


function handleDonation(inputId, balanceId) {
  const inputText = document.getElementById(inputId).value;
  const amount = parseFloat(inputText);

  if (isNaN(amount) || amount <= 0) {
    alert("Amount invalid");
    return;
  }

  const balanceElement = document.getElementById(balanceId);
  const prevBalanceText = balanceElement.textContent.replace(/[^\d.]/g, "");
  const prevBalance = parseFloat(prevBalanceText);

  if (isNaN(prevBalance)) {
    alert("Current balance invalid");
    return;
  }

  const newBalance = prevBalance - amount;

  if (newBalance < 0) {
    alert("Insufficient balance!");
    return;
  }

  balanceElement.innerText = `${newBalance} BDT`;
  document.getElementById(inputId).value = "";
}

document
  .getElementById("khulna-donation-btn")
  .addEventListener("click", function () {
    handleDonation("khulna-donation-input", "balance");
  });

document
  .getElementById("feni-donation-btn")
  .addEventListener("click", function () {
    handleDonation("feni-donation-input", "balance");
  });

document
  .getElementById("noakhali-donation-btn")
  .addEventListener("click", function () {
    handleDonation("noakhali-donation-input", "balance");
  });

