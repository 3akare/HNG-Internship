// Function to update current day and time in UTC
function updateCurrentDateTime() {
    const currentDate = new Date();

    // Update current day
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    currentDayElement.textContent = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    // Update current time in UTC
    const hours = String(currentDate.getUTCHours()).padStart(2, '0'); // Ensure two digits for hours
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0'); // Ensure two digits for minutes

    const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
    currentTimeUTCElement.textContent = `${hours}:${minutes} UTC`; // Format hours and minutes with UTC suffix
}

function flipCard() {
    const frontCard = document.querySelector('.front-card');
    const backCard = document.querySelector('.back-card');

    frontCard.classList.toggle('flip');
    backCard.classList.toggle('flip');
}

// Initial update
updateCurrentDateTime();

// Update every minute (adjust interval as needed)
setInterval(updateCurrentDateTime, 60000); 