//your JS code here. If required.
let currentIndex = 1;  // Keeps track of the current active circle

const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Initially set the first circle to active
circles[0].classList.add('active');

// Function to update the buttons' states
function updateButtons() {
    // Disable the "previous" button if we're at the first circle
    prevButton.disabled = currentIndex === 1;

    // Disable the "next" button if we've reached the last circle
    nextButton.disabled = currentIndex === circles.length;
}

// Function to go to the next circle
function nextCircle() {
    if (currentIndex < circles.length) {
        circles[currentIndex].classList.add('active');
        currentIndex++;
        updateButtons();
    }
}

// Function to go to the previous circle
function prevCircle() {
    if (currentIndex > 1) {
        currentIndex--;
        circles[currentIndex].classList.remove('active');
        updateButtons();
    }
}

// Event listeners for the buttons
nextButton.addEventListener('click', nextCircle);
prevButton.addEventListener('click', prevCircle);

// Initial button state update
updateButtons();
