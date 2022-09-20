const container = document.querySelector(".container");
const count = document.querySelector(".count");
const amount = document.querySelector(".amount");
const select = document.querySelector(".movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
    calculateTotalPrice();
  }
});
select.addEventListener("change", function (e) {
  calculateTotalPrice();
});

function calculateTotalPrice() {
  let selectedSeats = container.querySelectorAll(".seat.selected");
  let selectedSeatCount = selectedSeats.length;
  let price = 60;
  count.innerText = selectedSeatCount;
  amount.innerText = selectedSeatCount * price;
}
