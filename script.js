const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const priceElements = document.querySelectorAll(".price");

  let total = 0;

  priceElements.forEach(price => {
    total += Number(price.textContent);
  });

  // Create new row
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  newCell.colSpan = 2; // Span across columns
  newCell.textContent = `Total Price: Rs ${total}`;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);