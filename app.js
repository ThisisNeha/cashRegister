const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const button = document.querySelector("#button");
const errorMessage = document.querySelector("#error");
const numberOfNotes = document.querySelectorAll(".no-of-notes");
const returningAmount = document.querySelector("#text");

const availabelNotes = [2000, 500, 100, 20, 10, 5, 1];

button.addEventListener("click", function returnChange() {
  errorMessage.style.display = "none";
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      returningAmount.innerText = amountToBeReturned;
      calculateChange(amountToBeReturned);
    } else {
      errorMessage.style.display = "block";
      errorMessage.innerText = "Do you want to wash plates?";
    }
  } else {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Invalid bill amount";
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availabelNotes.length; i++) {
    const notesToBeGiven = Math.trunc(amountToBeReturned / availabelNotes[i]);

    amountToBeReturned = amountToBeReturned % availabelNotes[i];

    numberOfNotes[i].innerText = notesToBeGiven;
  }
}
