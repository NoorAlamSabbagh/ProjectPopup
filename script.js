document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkout-form");
  const totalPrice = document.getElementById("total-price");
  const unitOptions = document.querySelectorAll(".unit-option");

  // Event listener for changes in radio selection
  form.addEventListener("change", () => {
    // Get selected radio button
    const selectedUnit = document.querySelector("input[name='unit']:checked");
    if (selectedUnit) {
      const price = selectedUnit.dataset.price;
      totalPrice.textContent = `$${price}.00 USD`;

      // Update red border for selected option and show/hide customization
      unitOptions.forEach((option) => {
        option.classList.remove("selected");
        option.querySelector(".customization").classList.add("hidden");
      });

      const parentOption = selectedUnit.closest(".unit-option");
      parentOption.classList.add("selected");
      parentOption.querySelector(".customization").classList.remove("hidden");
    }
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Items added to cart!");
  });

  // Set default selected unit border and show its customization
  const defaultOption = document.querySelector("input[name='unit']:checked");
  if (defaultOption) {
    const parentOption = defaultOption.closest(".unit-option");
    parentOption.classList.add("selected");
    parentOption.querySelector(".customization").classList.remove("hidden");
  }
});
