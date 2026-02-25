const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll(".prices");

  let total = 0;

  priceElements.forEach(price => {
    total += Number(price.textContent);
  });

  // Remove old total row if exists
  const existingTotal = document.querySelector(".total-row");
  if (existingTotal) {
    existingTotal.remove();
  }

  // Create total row
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  newRow.classList.add("total-row");

  const newCell = document.createElement("td");
  newCell.colSpan = 2;
  newCell.textContent = `Total: ${total}`;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);