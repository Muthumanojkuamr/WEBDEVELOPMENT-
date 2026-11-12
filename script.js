// Select the buttons and output area from the page.
const welcomeButton = document.getElementById("welcomeButton");
const ideaButton = document.getElementById("ideaButton");
const ideaOutput = document.getElementById("ideaOutput");

// Show a personal welcome message when the main button is clicked.
welcomeButton.addEventListener("click", function () {
  alert("Hello! I'm Muthu Manojkumar T.I. Welcome to my little corner of the web.");
});

// Store a few creative challenges in an array.
const tinyIdeas = [
  "Add a pink accent to one more section of this page.",
  "Create a card about an electrical engineering topic you enjoy.",
  "Add a photo that represents your engineering journey.",
  "Build a mini project gallery and describe what you learned.",
  "Try a new font pairing while keeping the page easy to read."
];

let ideaIndex = 0;

// Display a new creative challenge each time the button is clicked.
ideaButton.addEventListener("click", function () {
  ideaOutput.textContent = tinyIdeas[ideaIndex];
  ideaIndex = (ideaIndex + 1) % tinyIdeas.length;
});
