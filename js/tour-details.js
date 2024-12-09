document.addEventListener("DOMContentLoaded", function () {
  // Gallery functionality
  const mainImage = document.querySelector(".gallery-main img");
  const thumbnails = document.querySelectorAll(".gallery-thumbnails img");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      mainImage.src = this.src;
    });
  });

  // FAQ Accordion
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector(".accordion-icon");

      // Toggle active class
      content.classList.toggle("active");

      // Toggle plus/minus icon
      icon.textContent = content.classList.contains("active") ? "-" : "+";
    });
  });

  // Quantity selectors
  const quantitySelectors = document.querySelectorAll(".quantity-selector");

  quantitySelectors.forEach((selector) => {
    const minusBtn = selector.querySelector(".minus");
    const plusBtn = selector.querySelector(".plus");
    const input = selector.querySelector("input");

    minusBtn.addEventListener("click", () => {
      const currentValue = parseInt(input.value);
      if (currentValue > 0) {
        input.value = currentValue - 1;
        updateTotal();
      }
    });

    plusBtn.addEventListener("click", () => {
      const currentValue = parseInt(input.value);
      input.value = currentValue + 1;
      updateTotal();
    });

    input.addEventListener("change", updateTotal);
  });

  // Update total price
  function updateTotal() {
    const adultCount = parseInt(
      document.querySelector(".guests .guest-type:first-child input").value
    );
    const childCount = parseInt(
      document.querySelector(".guests .guest-type:last-child input").value
    );
    const basePrice = 129; // Price per person

    const total = (adultCount + childCount) * basePrice;
    document.querySelector(".total-amount").textContent = `$${total.toFixed(
      2
    )}`;
  }

  // Booking form submission
  const bookingForm = document.querySelector(".booking-form");
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your booking logic here
    console.log("Booking submitted");
  });

  // Review form submission
  const reviewForm = document.querySelector(".reply-form");
  reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your review submission logic here
    console.log("Review submitted");
  });

  // Star rating functionality
  const starRating = document.querySelector(".star-rating");
  let rating = 5;

  starRating.addEventListener("click", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    rating = Math.ceil((x / rect.width) * 5);
    this.textContent = "★".repeat(rating) + "☆".repeat(5 - rating);
  });
});
