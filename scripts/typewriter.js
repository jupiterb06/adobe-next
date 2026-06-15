// Configuration array for sequential execution
const sequence = [
  {
    
    textElement: document.getElementById("start-title"),
    cursorElement: document.getElementById("cursor-1"),
    speed: 100,
    text: document.getElementById("start-title").textContent
  },
  {
    textElement: document.getElementById("start-subtitle"),
    cursorElement: document.getElementById("cursor-2"),
    speed: 100,
    text: document.getElementById("start-subtitle").textContent
  }
];

let sequenceIndex = 0;
let characterIndex = 0;

const cursor2 = document.getElementById("cursor-2");
  cursor2.classList.add("hidden");
      $(document.getElementById("next-popup")).toggle();


document.getElementById("start-title").textContent = "";
document.getElementById("start-subtitle").textContent = "";

function typeSequence() {
  // Stop if all elements are typed out
  if (sequenceIndex >= sequence.length) {
      cursor2.classList.remove("hidden");
      $(document.getElementById("next-popup")).fadeToggle();

    return;
}

  const currentStep = sequence[sequenceIndex];
  
  // Ensure the current cursor is visible
  currentStep.cursorElement.classList.remove("hidden");

  if (characterIndex < currentStep.text.length) {
    // Type next character
    currentStep.textElement.textContent += currentStep.text.charAt(characterIndex);
    characterIndex++;
    setTimeout(typeSequence, currentStep.speed);
  } else {
    // Current element finished typing. Hide its cursor.
    currentStep.cursorElement.classList.add("hidden");
    
    // Reset char index and move to next element configuration
    characterIndex = 0;
    sequenceIndex++;
    
    // Optional delay (e.g., 500ms) before starting the paragraph
    setTimeout(typeSequence, 500); 
  }

}

document.addEventListener("DOMContentLoaded", typeSequence);

