const bookingForm = document.getElementById("bookingForm");
const popup = document.getElementById("popup");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const date = document.getElementById("date").value;
  const guests = document.getElementById("guests").value;

  if (!name || !email || !date || !guests) {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Enter a valid email address.");
    return;
  }

  if (parseInt(guests) <= 0) {
    alert("Guests must be at least 1.");
    return;
  }

  const bookingData = {
    name,
    email,
    date,
    guests,
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem("tiaraBooking", JSON.stringify(bookingData));

  popup.style.display = "flex";
  bookingForm.reset();
});

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email.toLowerCase());
}

function closePopup() {
  popup.style.display = "none";
}

function submitPayment() {
  alert("Payment processed successfully! Booking saved.");
}


