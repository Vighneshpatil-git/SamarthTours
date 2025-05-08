// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Form submission to WhatsApp
const bookingForm = document.getElementById('bookingForm');
    
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const email = document.getElementById('email').value;
    const pickupLocation = document.getElementById('pickupLocation').value;
    const dropLocation = document.getElementById('dropLocation').value;
    const travelDate = document.getElementById('travelDate').value;
    const passengers = document.getElementById('passengers').value;
    const vehicleType = document.getElementById('vehicleType').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    let whatsappMessage = `New Booking Request from Samartha Tours Website:%0A%0A`;
    whatsappMessage += `*Name:* ${fullName}%0A`;
    whatsappMessage += `*Contact:* ${contactNumber}%0A`;
    whatsappMessage += `*Email:* ${email || 'Not provided'}%0A`;
    whatsappMessage += `*Pickup:* ${pickupLocation}%0A`;
    whatsappMessage += `*Drop:* ${dropLocation}%0A`;
    whatsappMessage += `*Date:* ${travelDate}%0A`;
    whatsappMessage += `*Passengers:* ${passengers}%0A`;
    whatsappMessage += `*Vehicle Preference:* ${vehicleType}%0A`;
    whatsappMessage += `*Additional Message:* ${message || 'None'}`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/917038581800?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    bookingForm.reset();
    
    // Show confirmation
    alert('Thank you for your booking request! We have opened WhatsApp for you to complete the process.');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});