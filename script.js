const text = "nostalgic vibes. pixelated aesthetics.";
const typedText = document.getElementById("typed-text");
const cursor = document.getElementById("cursor");

let index = 0;

function typeText() {
  if (index < text.length) {
    typedText.textContent += text[index];
    index++;
    setTimeout(typeText, 100); // Typing speed (100ms per character)
  } else {
    cursor.style.display = "none"; // Optionally hide cursor when done
  }
}

typeText();
