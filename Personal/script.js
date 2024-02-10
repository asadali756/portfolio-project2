
// Text to be typed
const text = "Imama Mushtaq";

// Typing speed in milliseconds
const typingSpeed = 100;

// Function to type text into an element
function typeText(element, text) {
  let index = 0;
  const intervalId = setInterval(() => {
    element.textContent += text[index];
    index++;
    if (index === text.length) {
      clearInterval(intervalId);
    }
  }, typingSpeed);
}

// Start typing the text
window.onload = function() {
  const nameElement = document.getElementById("name");
  typeText(nameElement, text);
};