// Simulating data retrieval without actual API request
const sampleData = [
  {
    "name": "Göken",
    "id": "123456",
    "email": "john.doe@example.com"
  },
  {
    "name": "Kåfe",
    "id": "987654",
    "email": "jane.smith@example.com"
  },
  {
    "name": "NeiNei",
    "id": "654321",
    "email": "alex.johnson@example.com"
  }
];

// JavaScript
// JavaScript
function renderStudentOptions() {
  const studentSelect = document.getElementById('studentSelect');
  studentSelect.innerHTML = ''; // Clear existing options

  sampleData.forEach(student => {
    const option = document.createElement('option');
    option.value = student.id;
    option.textContent = student.name;
    studentSelect.appendChild(option);
  });
}









// Toggle the visibility of the dropdown content
function toggleDropdown() {
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.classList.toggle('show');
}

// Select a student from the dropdown
function selectStudent(student) {
  // Store the selected student in localStorage or other storage mechanism
  localStorage.setItem('selectedStudent', JSON.stringify(student));

  // Perform further actions or update UI as needed
  console.log('Selected Student:', student);
}

// Book a Vev
function bookVev() {
  const selectedStudentId = document.getElementById('studentSelect').value;
  const selectedStudent = sampleData.find(student => student.id === selectedStudentId);
  const selectedTime = document.getElementById('time').value;

  // Perform booking logic or navigate to the next page
  console.log('Selected Time:', selectedTime);
  console.log('Booking with:', selectedStudent);

  // Store booking details in localStorage or other storage mechanism
  localStorage.setItem('selectedStudent', JSON.stringify(selectedStudent));
  localStorage.setItem('selectedTime', selectedTime);

  // Navigate to the next page (example: booking confirmation page)
  window.location.href = 'confirmation.html';
}




// Execute the rendering when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  renderStudentOptions();
});

