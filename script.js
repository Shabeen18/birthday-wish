// Smooth scroll to timelines
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
// 10 Reasons modal logic
const reasons = [
  "You always see the good in everyone, including me.",
  "You make every moment brighter with your smile.",
  "Your laughter is my favorite song.",
  "You inspire me to be a better person.",
  "Your hugs are my safe place.",
  "You support my dreams.",
  "I love the way you love our family.",
  "We can be silly together.",
  "Your wisdom and passion for life.",
  "You make the world beautiful every day."
];
function showReason(index) {
  document.getElementById('reasonText').innerText = reasons[index];
  document.getElementById('reasonModal').style.display = 'block';
}
function closeModal() {
  document.getElementById('reasonModal').style.display = 'none';
}
// Surprise reveal
function revealSurprise() {
  document.getElementById('surprise').style.display = 'block';
}
