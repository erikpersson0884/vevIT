document.addEventListener('DOMContentLoaded', function() {
    const bookingDetails = document.getElementById('bookingDetails');
  
    // Retrieve the booking details from localStorage
    const selectedStudent = JSON.parse(localStorage.getItem('selectedStudent'));
    const selectedTime = localStorage.getItem('selectedTime');
  
    // Create the booking details string
    const details = `Student: ${selectedStudent ? selectedStudent.name : 'N/A'}<br>
                     Time: ${selectedTime || 'N/A'}`;
  
    // Set the booking details on the confirmation page
    bookingDetails.innerHTML = details;
  });
  