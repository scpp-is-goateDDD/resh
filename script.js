/* ===== TERMINAL TYPING EFFECT ===== */

const terminalLines = [
    'Accessing Rēsh-1 ("Seat of Consciousness") declassified files...',
    'Initializing clearance protocols...',
    'Authentication required. Insert credentials.'
];

const terminalElement = document.getElementById("terminal-text");

let lineIndex = 0;
let charIndex = 0;

function typeTerminal() {
    if (lineIndex < terminalLines.length) {
        if (charIndex < terminalLines[lineIndex].length) {
            terminalElement.innerHTML += terminalLines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeTerminal, 40);
        } else {
            terminalElement.innerHTML += "<br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeTerminal, 600);
        }
    }
}

typeTerminal();

/* ===== FAKE AUTH SYSTEM ===== */

const CORRECT_CODE = "Hksnu9hgurwhgwuhi123";

function authenticate() {
    const input = document.getElementById("codeInput").value;
    const status = document.getElementById("status");

    if (input === CORRECT_CODE) {
        status.style.color = "#7CFF7C";
        status.textContent = "ACCESS GRANTED. CLEARANCE VERIFIED.";

        setTimeout(() => {
            // CHANGE THIS PAGE IF YOU WANT
            window.location.href = "games.html";
        }, 1500);

    } else {
        status.style.color = "#ff4c4c";
        status.textContent = "ACCESS DENIED. INVALID SECURITY CODE.";
    }
}

/* ===== PUBLIC ACCESS ===== */
function publicAccess() {
    window.location.href = "games.html";
}
