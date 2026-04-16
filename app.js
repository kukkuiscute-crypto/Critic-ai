// AI Roast Engine
const roasts = [
    "You're like a software update. Whenever I see you, I think, 'Not now.'",
    "I'd explain it to you, but I left my English-to-Dingbat dictionary at home.",
    "You're as useful as a screen door on a submarine.",
    "I'd call you a tool, but that implies you're actually useful.",
    "You're proof that even evolution makes mistakes.",
    // ... (40 more unique roasts)
];

// Keyword Analysis
const productivityKeywords = [
    "focus",
    "prioritize",
    "organize",
    "schedule",
    "motivate",
    "plan",
    "achieve",
    "efficient",
    "goal",
    "time",
    "clarity",
    "dedicate",
];

const distractionKeywords = [
    "procrastinate",
    "distraction",
    "chaos",
    "clutter",
    "interrupt",
    "stress",
    "panic",
    "overwhelm",
    "chaotic",
    "skip",
    "mess",
    "waste",
];

// Typewriter Effect
function typewriterEffect(element, text, delay = 100) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    }
    type();
}

// Dynamic A-F Grading System
function gradeScore(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

// LocalStorage Management
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// Keyboard Shortcuts
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.code === 'KeyR') {
        // Trigger roast
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        console.log(roast);
    }
    // Add more shortcuts here
});

// Application Logic
function initApp() {
    const gradeScore = loadFromLocalStorage('score') || 0;
    console.log(`Your current grade is: ${gradeScore(gradeScore)}`);
    // Typewriter effect on startup
    const typewriterElem = document.getElementById('typewriter');
    typewriterEffect(typewriterElem, "Welcome to the Critic AI!");
}

initApp();