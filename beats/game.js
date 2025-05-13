const COLOR_YELLOW = "#ffce00";
const COLOR_GOLDEN = "#ffdb4d";
const COLOR_PURPLE = "#A230FF";
const COLOR_BLUE = "#007AFF";
const COLOR_GREEN = "#4CD964";

// Track configuration
const tracks = {
  Mosquito: {
    audio: "tracks/Mosquito.mp4",
    beatmap: "beatmaps/beatmap_Mosquito.json"
  },
  Lutie: {
    audio: "tracks/Lutie.mp3",
    beatmap: "beatmaps/beatmap_lutie.json"
  },
  Thunderous: {
    audio: "tracks/Thunderous.flac",
    beatmap: "beatmaps/beatmap_Thunderous.json"
  },
  Item: {
    audio: "tracks/Item.flac",
    beatmap: "beatmaps/beatmap_Item.json"
  },
  "Item (Hard)": {
    audio: "tracks/Item.flac",
    beatmap: "beatmaps/beatmap_Item_hard.json"
  },
  ChkChkBoom: {
    audio: "tracks/ChkChkBoom.flac",
    beatmap: "beatmaps/beatmap_ChkChkBoom.json"
  }
};

// Set up the canvas
const canvas = document.getElementById("gameCanvas");
const scoreDisplay = document.getElementById("score");
const comboDisplay = document.getElementById("combo-display");
const accuracyDisplay = document.getElementById("accuracy");
const comboCounter = document.getElementById("combo");
const missedDisplay = document.getElementById("missed");
const trackSelect = document.getElementById("trackSelect");
const ctx = canvas.getContext("2d");

// Game variables
const lanes = [150, 300, 450, 600]; // X positions of lanes
const laneKeys = ["a", "s", "k", "l"]; // Keys corresponding to lanes
const laneColor = [COLOR_YELLOW, COLOR_YELLOW, COLOR_YELLOW, COLOR_YELLOW];
const ripples = [];
let notesByLane = new Map(); // Map to store notes per lane
let score = 0;
let activeBars = [0, 0, 0, 0]; // Stores fading bar opacity for each lane
let combo = 0; // Combo counter
let comboMultiplier = 1; // Combo multiplier (for score bonus)
let beatmap = []; // Will store the loaded beatmap

const hitZoneY = canvas.height - 60; // Bottom of the screen, where notes are hit
const hitZoneHeight = 40; // Height of the valid hit range
const hitZoneTop = hitZoneY - 80;
const hitZoneBottom = canvas.height;

// Load the selected track's beatmap
async function loadBeatmap(trackName) {
  const track = tracks[trackName];
  const gameMusic = document.getElementById("gameMusic");

  // Update audio source
  gameMusic.src = track.audio;

  // Load beatmap
  const response = await fetch(track.beatmap);
  const beatmapData = await response.json();
  beatmap = beatmapData.notes;

  // Reset game state
  score = 0;
  combo = 0;
  comboMultiplier = 1;
  notesByLane = new Map();
  scoreDisplay.innerText = "Score: 0";
  comboCounter.innerText = "";
  accuracyDisplay.innerText = "";
  missedDisplay.innerText = "";

  // Load notes from the beatmap
  loadNotes();
}

// Load notes from the beatmap
function loadNotes() {
  beatmap = beatmap.map(note => ({
    time: note.time / 1000, // Convert milliseconds to seconds
    lane: note.lane,
    x: lanes[note.lane], // Map lane number to lane position
    y: -50, // Start above the screen
    hit: false, // Whether the note has been hit
    missed: false,
    fillColor: laneColor[Math.floor(note.time % 4)] // Default note color
  }));

  beatmap.sort((a, b) => a.time - b.time).forEach(note => {
    // Check if the lane already exists in the map
    if (!notesByLane.has(note.lane)) {
      notesByLane.set(note.lane, new Deque());
    }
    // Add the note to the corresponding lane's array
    notesByLane.get(note.lane).addBack(note);
  });
}

// Draw the lanes
function drawLanes() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // Example color for lanes (change as needed)
  for (let i = 0; i < lanes.length; i++) {
    ctx.fillRect(lanes[i] - 50, 0, 100, canvas.height); // Fill the lane without a border
  }
}

// Draw the hit zone (the grey bar where notes should be hit)
function drawHitZone() {
  // Create a gradient for the shiny effect
  let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "rgba(173, 216, 230, 0.4)");  // Light blue at the top
  gradient.addColorStop(0.5, "rgba(0, 123, 255, 0.6)");  // Bright blue for the middle
  gradient.addColorStop(1, "rgba(173, 216, 230, 0.4)");  // Light blue at the bottom

  // Apply the glow effect around the lanes
  ctx.shadowBlur = 20; // Makes the shadow/halo softer and bigger
  ctx.shadowColor = "rgba(153, 82, 255, 0.8)"; // Purple glow color

  // Set the gradient as the fill style
  ctx.fillStyle = gradient;

  // Draw the hit zone with the gradient and glow effect
  ctx.fillRect(lanes[0] - 50, hitZoneY, 550, 55); // Adjust the width based on your lanes

  // Reset the shadow to avoid affecting other drawings
  ctx.shadowBlur = 0;
  ctx.shadowColor = "transparent"; // Reset the shadow color
}

// Draw the fading bars for key press feedback
function drawFadingBars() {
  activeBars.forEach((opacity, index) => {
    if (opacity > 0) {
      ctx.fillStyle = `rgba(200, 40, 200, ${opacity})`; // White with opacity
      ctx.fillRect(lanes[index] - 50, 0, 100, canvas.height);
    }
  });
}

// Modify drawing to support animation
function drawNotes() {
  notesByLane.forEach(notes => {
    notes.forEach(note => {
      ctx.save();

      // Draw the white border
      ctx.lineWidth = 2; // Thickness of the border
      ctx.strokeStyle = 'white'; // Border color
      ctx.strokeRect(note.x - 50, note.y, 100, 20); // Slightly larger than the note itself

      // Draw the note
      ctx.fillStyle = note.fillColor; // Use the note's color
      ctx.fillRect(note.x - 50, note.y, 100, 20); // Draw the note

      ctx.restore();
    });
  });
}

// Update the notes
function updateNotes(deltaTime) {
  document.getElementById("time").innerText = "Time: " + gameMusic.currentTime;
  notesByLane.forEach(notes => {
    notes.some(note => {
      note.y = hitZoneY - 10 - (note.time - gameMusic.currentTime) * canvas.height;
      if (note.y > canvas.height) { // After passing the hit zone, into the gap
        notes.removeFront();
        // Reset combo if note is missed
        resetCombo();
      }
    });
  });
}

// Check for note hits
function onKeyDown(key) {
  if (event.key === "Enter") {
    resumeOrPause();
    return;
  }
  if (gameMusic.paused) {
    return;
  }

  const laneIndex = laneKeys.indexOf(key);
  if (laneIndex === -1) return;

  const laneX = lanes[laneIndex];
  const notes = notesByLane.get(laneIndex);
  notes.some(note => {
    if (Math.abs(note.x - laneX) < 50 && note.y >= hitZoneTop && note.y <= hitZoneBottom) {
      notes.removeFront();
      score += 100 * comboMultiplier; // Increment score with combo multiplier
      combo++; // Increase combo count
      comboMultiplier = Math.min(comboMultiplier + 1, 5); // Max combo multiplier at 5
      scoreDisplay.innerText = "Score: " + score;
      comboCounter.innerText = combo; // Update combo display
      updateAccuracy(note.y)
      missedDisplay.innerText = "";
      comboDisplay.style.animation = 'none'; // Reset animation
      void comboDisplay.offsetWidth; // Trigger reflow to restart animation
      comboDisplay.style.animation = 'combo-pop 0.5s ease-out'; // Apply pop animation
      createRipple(note.x, hitZoneY);
      return true;
    }
    return false;
  });

  // Activate the vertical bar for the lane
  activeBars[laneIndex] = 0.5; // Set full opacity
  setTimeout(() => {
    activeBars[laneIndex] = 0;
  }, 100); // Bar stays visible for 100ms
}

function updateAccuracy(hitY) {
  const diffToSPerfect = Math.abs(hitY - hitZoneY);
  switch (true) {
    case diffToSPerfect < 20:
      accuracyDisplay.innerText = "S·Perfect";
      comboDisplay.style.color = COLOR_GOLDEN;
      comboDisplay.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.6), 0 0 10px rgb(240, 240, 240), 0 0 5px rgb(20, 20, 19)';
      break;
    case diffToSPerfect < 40:
      accuracyDisplay.innerText = "Perfect";
      comboDisplay.style.color = COLOR_YELLOW;
      comboDisplay.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.6), 0 0 5px rgb(240, 240, 240), 0 0 5px rgb(20, 20, 19)';
      break;
    default:
      accuracyDisplay.innerText = "Good";
      comboDisplay.style.color = COLOR_GREEN;
      comboDisplay.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.6), 0 0 5px rgb(240, 240, 240), 0 0 5px rgb(20, 20, 19)';
      comboDisplay.style.textShadow = 'none';
      break;
  }
}

function createRipple(x, y) {
  const baseSpeed = 300;
  for (let i = 0; i < 3; i++) {
    ripples.push({
      x: x,
      y: y,
      radius: 0,
      alpha: 1, // Slightly lower opacity for each ripple
      speed: 100 + i * 50, // Slightly larger max radius for each ripple
      duration: 0.3,
      lineWidth: 30
    });
  }
}

function drawRipples(deltaTime) {
  for (let i = ripples.length - 1; i >= 0; i--) {
    const ripple = ripples[i];
    ripple.radius += ripple.speed * deltaTime; // Expand radius
    ripple.alpha -= 1 * deltaTime; // Fade out
    ripple.duration -= deltaTime;

    if (ripple.duration <= 0) {
      ripples.splice(i, 1); // Remove completed ripple
    }
  }
  for (const ripple of ripples) {
    ctx.beginPath();
    const waveAmplitude = 5; // Amplitude of the wave
    const waveFrequency = 10; // Number of waves around the circle

    // Create a wavy circle path
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 180) {
      const distortedRadius =
        ripple.radius + waveAmplitude * Math.sin(angle * waveFrequency);
      const x = ripple.x + distortedRadius * Math.cos(angle);
      const y = ripple.y + distortedRadius * Math.sin(angle);

      if (angle === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();

    // Apply gradient stroke for a glowing effect
    const gradient = ctx.createRadialGradient(
      ripple.x,
      ripple.y,
      ripple.radius / 2,
      ripple.x,
      ripple.y,
      ripple.radius
    );
    gradient.addColorStop(0, `rgba(255, 219, 0, ${ripple.alpha})`);
    gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = ripple.lineWidth;
    ctx.stroke();
  }
}

// Reset combo if a note is missed
function resetCombo() {
  combo = 0;
  comboMultiplier = 1;
  accuracyDisplay.innerText = ""; // Update accuracy display
  comboCounter.innerText = "";
  missedDisplay.innerText = "Miss";
  comboDisplay.style.textShadow = 'none';
  comboDisplay.style.animation = 'none'; // Reset animation
  void comboDisplay.offsetWidth; // Trigger reflow to restart animation
  comboDisplay.style.animation = 'combo-pop 0.5s ease-out'; // Apply pop animation
}

// Main game loop
let lastTime = 0;
function gameLoop(timestamp) {
  const deltaTime = (timestamp - lastTime) / 1000;
  lastTime = timestamp;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw game elements
  drawLanes();
  drawHitZone();
  drawFadingBars();
  drawNotes();
  drawRipples(deltaTime);
  updateNotes(deltaTime);

  // Request the next frame
  requestAnimationFrame(gameLoop);
}

// Start game music and game loop when Enter is pressed
const gameMusic = document.getElementById("gameMusic");
const muteButton = document.getElementById("muteButton");
const volumeSlider = document.getElementById("volumeSlider");
const seekBar = document.getElementById("seekBar");
const currentTimeDisplay = document.getElementById("currentTime");
const totalTimeDisplay = document.getElementById("totalTime");

// Format time in MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Update seek bar and time displays
function updateSeekBar() {
  if (gameMusic.duration) {
    seekBar.max = gameMusic.duration;
    seekBar.value = gameMusic.currentTime;
    currentTimeDisplay.textContent = formatTime(gameMusic.currentTime);
    totalTimeDisplay.textContent = formatTime(gameMusic.duration);
  }
}

// Handle seeking
function handleSeek() {
  const newTime = parseFloat(seekBar.value);
  gameMusic.currentTime = newTime;

  // Update note positions for the new time
  notesByLane.forEach(notes => {
    notes.forEach(note => {
      note.y = hitZoneY - 10 - (note.time - newTime) * canvas.height;
    });
  });
}

// Audio control functions
function toggleMute() {
  gameMusic.muted = !gameMusic.muted;
  muteButton.textContent = gameMusic.muted ? "🔇" : "🔊";
}

function updateVolume() {
  gameMusic.volume = volumeSlider.value;
  // Update mute button if volume is 0
  if (gameMusic.volume === "0") {
    gameMusic.muted = true;
    muteButton.textContent = "🔇";
  } else if (gameMusic.muted) {
    gameMusic.muted = false;
    muteButton.textContent = "🔊";
  }
}

// Initialize audio controls
muteButton.addEventListener('click', toggleMute);
volumeSlider.addEventListener('input', updateVolume);
seekBar.addEventListener('input', handleSeek);
gameMusic.addEventListener('timeupdate', updateSeekBar);
gameMusic.addEventListener('loadedmetadata', updateSeekBar);

function startGameListener(event) {
  if (event.key === "Enter") {
    gameMusic.play().then(() => {
      console.log("Music started!");
      document.getElementById("start").innerText = "Press 'enter' to resume or pause.";
      document.addEventListener("keydown", e => onKeyDown(e.key.toLowerCase()));
      requestAnimationFrame(gameLoop);
      document.removeEventListener("keydown", startGameListener);
    }).catch(error => {
      console.error("Error playing music:", error);
    });
  }
}

function resumeOrPause() {
  if (gameMusic.paused) {
    gameMusic.play();
  } else {
    gameMusic.pause();
  }
}

// Initialize event listeners
document.addEventListener("keydown", startGameListener);
trackSelect.addEventListener('change', async (e) => {
  const selectedTrack = e.target.value;
  await loadBeatmap(selectedTrack);
  e.target.blur(); // Release focus from the dropdown
});

// Initialize the game with the first track
loadBeatmap(trackSelect.value); 