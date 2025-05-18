const candidates = [
  {
    name: "Juan Dela Cruz",
    position: "Barangay Captain",
    achievement: "10 years Barangay Kagawad",
    platform: "Clean Barangay, Free WiFi, CCTV",
    fullDetails: "Juan Dela Cruz<br><strong>Position:</strong> Barangay Captain<br><strong>Achievement:</strong> 10 years Barangay Kagawad<br><strong>Platform:</strong> Clean Barangay, Free WiFi, CCTV"
  },
  {
    name: "Maria Santos",
    position: "Barangay Kagawad",
    achievement: "Community Health Volunteer",
    platform: "Free Medical Check-ups, Clean-up Drive",
    fullDetails: "Maria Santos<br><strong>Position:</strong> Barangay Kagawad<br><strong>Achievement:</strong> Community Health Volunteer<br><strong>Platform:</strong> Free Medical Check-ups, Clean-up Drive"
  },
  {
    name: "Carlos Reyes",
    position: "Barangay Treasurer",
    achievement: "Certified Public Accountant",
    platform: "Transparent Budget, Youth Fund Raising",
    fullDetails: "Carlos Reyes<br><strong>Position:</strong> Barangay Treasurer<br><strong>Achievement:</strong> Certified Public Accountant<br><strong>Platform:</strong> Transparent Budget, Youth Fund Raising"
  },
  {
    name: "Liza Dizon",
    position: "Barangay Kagawad",
    achievement: "Environmentalist",
    platform: "Tree Planting Projects, Zero Waste",
    fullDetails: "Liza Dizon<br><strong>Position:</strong> Barangay Kagawad<br><strong>Achievement:</strong> Environmentalist<br><strong>Platform:</strong> Tree Planting, Zero Waste Barangay"
  },
  {
    name: "Michael Cruz",
    position: "Barangay Secretary",
    achievement: "Barangay Youth Leader",
    platform: "Digital Docs, Fast Clearances",
    fullDetails: "Michael Cruz<br><strong>Position:</strong> Barangay Secretary<br><strong>Achievement:</strong> Barangay Youth Leader<br><strong>Platform:</strong> Digital Docs, Fast Clearances"
  }
];

// Barangay Issues
const issues = [
  { title: "Baradong Kanal", description: "Maraming residente ang apektado tuwing tag-ulan." },
  { title: "Street Light Shortage", description: "Madilim ang Purok 3 sa gabi." },
  { title: "Tambak na Basura", description: "Dumarami ang basura sa Zone 5, walang regular collection." },
  { title: "Kakulangan ng CCTV", description: "Kaunti lang ang CCTV cameras, delikado tuwing gabi." },
  { title: "Sira-sirang Waiting Shed", description: "Walang masisilungan ang mga estudyante sa tag-ulan." }
];




// Display Candidates
const candidateList = document.getElementById("candidate-list");

candidates.forEach(candidate => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <strong>👤 Name:</strong> ${candidate.name}<br>
    <strong> 🏃‍♂️ Position:</strong> ${candidate.position}<br>
    <strong>🏆 Achievement:</strong> ${candidate.achievement}<br>
    <strong>📌 Platform:</strong> ${candidate.platform}<br>
    <button onclick="viewDetails(\`${candidate.fullDetails}\`)">View Full Details</button>
  `;
  candidateList.appendChild(card);
});

// Display Issues
const issuesList = document.getElementById("issues-list");

issues.forEach(issue => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<strong>${issue.title}</strong><p>${issue.description}</p>`;
  issuesList.appendChild(card);
});

// Modal Logic
function viewDetails(details) {
  document.getElementById("modalText").innerHTML = `
    <div style="font-size: 1.1em; line-height: 1.6;">
      ${details}<br><br>
      <strong>Vision:</strong> A safer, smarter, and greener Barangay.<br>
      <strong>Mission:</strong> To promote transparency, efficiency, and citizen well-being.<br><br>
      <em>"Serbisyong Totoo para sa Mamamayan."</em>
    </div>
  `;
  document.getElementById("detailsModal").style.display = "block";
}

document.getElementById("closeModal").onclick = () => {
  document.getElementById("detailsModal").style.display = "none";
};

window.onclick = function(event) {
  if (event.target == document.getElementById("detailsModal")) {
    document.getElementById("detailsModal").style.display = "none";
  }
};
