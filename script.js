const candidates = [
  { name: 'Juan Dela Cruz', position: 'Barangay Captain', platform: ['Libreng WiFi', 'CCTV Installation'] },
  { name: 'Maria Santos', position: 'Barangay Kagawad', platform: ['Check-up Every Saturday', 'Clean-up Drive'] },
];

// Sample issues data
const issues = [
  { title: 'Baradong Kanal', description: 'Binaha sa Purok 3.', status: 'Pending' },
  { title: 'Kulang na Street Lights', description: 'Madilim sa Zone 5.', status: 'For Installation' },
];

// Display candidates
let candidatesDiv = document.getElementById('candidates');
candidates.forEach(c => {
  candidatesDiv.innerHTML += `
    <div class="card">
      <strong>${c.name}</strong> - ${c.position}
      <ul>${c.platform.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>
  `;
});

// Display issues
let issuesDiv = document.getElementById('issues');
issues.forEach(i => {
  issuesDiv.innerHTML += `
    <div class="card">
      <strong>${i.title}</strong>
      <p>${i.description}</p>
      <em>Status: ${i.status}</em>
    </div>
  `;
});