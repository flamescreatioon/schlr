document.addEventListener('DOMContentLoaded', () => {
  // Set the fixed target date (e.g., December 31, 2023, at 00:00:00)
  const launchDate = new Date('2025-03-31T00:00:00Z');

  // Update countdown
  function updateCountdown() {
    const currentDate = new Date(); // Uses device's system time
    const difference = launchDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
  }

  // Update countdown every second
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call
});