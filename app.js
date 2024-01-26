document.addEventListener('DOMContentLoaded', function() {
    let score = 0;
    let lastClickTime = 0;
    const clickInterval = 60000; // 1 minute in milliseconds

    const scoreElement = document.getElementById('scoreValue');
    const clickButton = document.getElementById('clickButton');

    clickButton.addEventListener('click', function() {
        const currentTime = new Date().getTime();

        if (currentTime - lastClickTime >= clickInterval) {
            // Allow the click and update the score
            score += 1;
            scoreElement.textContent = score;
            lastClickTime = currentTime;
        } else {
            // Display "Not Yet!" if the button is clicked before a minute is up
            alert('Not Yet!');
        }
    });
});
