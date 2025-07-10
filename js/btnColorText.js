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

function handleDonation(inputId, balanceId, location) {
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

  const historyDiv = document.getElementById('history-div');
  const newDiv = document.createElement("div");
  historyDiv.appendChild(newDiv);
  newDiv.classList.add("border", "rounded-md", "p-4", "mt-2");
  newDiv.innerHTML = `
  <h1>${amount} Taka is Donated for Flood Relief at ${location}, Bangladesh</h1>
            <time>${new Date().toLocaleString()}</time>
  `;
  historyDiv.prepend(newDiv);

  const card = document.getElementById('confirmation-card')
  card.classList.remove('hidden');

  setTimeout(() => {
    card.classList.add('hidden');
  }, 3000);

  bgDark = document.getElementById('bg-shadow')
  bgDark.classList.remove('hidden');
  setTimeout(() => {
    bgDark.classList.add("hidden");
  }, 3000);
  
}

document
  .getElementById("khulna-donation-btn")
  .addEventListener("click", function () {
    handleDonation("khulna-donation-input", "balance", "Khulna");
  });

document
  .getElementById("feni-donation-btn")
  .addEventListener("click", function () {
    handleDonation("feni-donation-input", "balance", "Feni");
  });

document
  .getElementById("noakhali-donation-btn")
  .addEventListener("click", function () {
    handleDonation("noakhali-donation-input", "balance", "Noakhali");
  });

  document.getElementById('card-btn').addEventListener('click', function(){
    document.getElementById("confirmation-card").classList.add('hidden');
    document.getElementById("bg-shadow").classList.add('hidden');
  })