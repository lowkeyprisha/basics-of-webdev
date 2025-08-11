function showBookingForm(place, price) {
    document.getElementById("trips").classList.add("hidden");
    document.getElementById("booking-form").classList.remove("hidden");

    document.getElementById("selectedPlace").value = place;
    document.getElementById("pricePerPerson").value = price;
}

function confirmBooking(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let people = parseInt(document.getElementById("people").value);
    let place = document.getElementById("selectedPlace").value;
    let price = parseInt(document.getElementById("pricePerPerson").value);

    let totalPrice = price * people;

    document.getElementById("booking-form").classList.add("hidden");
    document.getElementById("confirmation").classList.remove("hidden");

    document.getElementById("confirmation").innerHTML = `
        <h2>Booking Confirmed!</h2>
        <p>Thank you, <b>${name}</b>.</p>
        <p>Your trip to <b>${place}</b> on <b>${date}</b> for <b>${people}</b> people is booked.</p>
        <p>Total Price: <b>₹${totalPrice}</b></p>
        <p>A confirmation email will be sent to: <b>${email}</b></p>
        <button onclick="location.reload()">Book Another Trip</button>
    `;
}
