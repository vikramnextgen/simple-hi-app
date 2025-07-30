// Simple Hi App JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    const greetings = ['Hi!', 'Hello!', 'Hey there!', 'Greetings!', 'Welcome!'];
    const greetingElement = document.querySelector('.greeting');
    const changeGreetingButton = document.querySelector('.change-greeting');
    let currentIndex = 0;

    // Function to update greeting with animation
    function updateGreeting() {
        currentIndex = (currentIndex + 1) % greetings.length;
        greetingElement.style.opacity = '0';
        greetingElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            greetingElement.textContent = greetings[currentIndex];
            greetingElement.style.opacity = '1';
            greetingElement.style.transform = 'translateY(0)';
        }, 300);
    }

    // Add click event listener
    changeGreetingButton.addEventListener('click', updateGreeting);
});