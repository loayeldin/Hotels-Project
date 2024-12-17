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
const bestsellerSpan = document.querySelector('.bestseller');

bestsellerSpan.addEventListener('mouseover', () => {
  bestsellerSpan.style.color = 'orange';
});

bestsellerSpan.addEventListener('mouseout', () => {
  bestsellerSpan.style.color = '#999';
});
// Function to update ticket count
function updateTicketCount(type, delta) {
  let countElement = document.getElementById(type + 'Count');
  let currentCount = parseInt(countElement.textContent);
  let newCount = Math.max(0, currentCount + delta);
  countElement.textContent = newCount;
  updateTotalPrice();
}

// Function to update the total price based on ticket counts and add-ons
function updateTotalPrice() {
  let adultCount = parseInt(document.getElementById('adultCount').textContent);
  let youthCount = parseInt(document.getElementById('youthCount').textContent);
  let childrenCount = parseInt(document.getElementById('childrenCount').textContent);
  let serviceBooking = document.getElementById('serviceBooking').checked ? 40 : 0;
  let servicePerPerson = document.getElementById('servicePerPerson').checked ? (adultCount * 17 + youthCount * 14) : 0;

  let total = (adultCount * 282) + (youthCount * 168) + (childrenCount * 80) + serviceBooking + servicePerPerson;
  document.getElementById('totalPrice').textContent = total;
}

// Function to handle the booking action
function bookNow() {
  alert('Booking Confirmed!');
}

