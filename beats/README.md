# Beats

A simple rhythm game made in an attempt to create Wordle-like daily challenge. The game supports multiple tracks and their corresponding beatmaps.

## Running the Game

You can run the game using Node's http-server.

### Using Node's http-server
```bash
# Install http-server globally if you haven't already
npm install -g http-server

# From the project root directory
http-server -p 8000
```
Then open `http://localhost:8000/` in your browser.

## Generating Beatmaps

The project includes a script to generate beatmaps from audio files. The script should be run from the project root directory.

### Prerequisites
- Python 3.x
- Required Python packages: `pydub`, `scipy`, `numpy`

Install the required packages:
```bash
pip install pydub scipy numpy
```

### Generating a Beatmap
```bash
# From the project root directory
python scripts/beatmap_generator_v2.py tracks/your_track.mp3
```

The script will:
1. Convert the audio file to WAV format (temporarily)
2. Analyze the audio to detect beats (naively through amplitude peaks detection)
3. Generate a beatmap with notes
4. Save the beatmap as JSON in the `beatmaps` directory
5. Clean up temporary files

Example:
```bash
python scripts/beatmap_generator_v2.py tracks/Thunderous.flac
```
This will generate `beatmaps/beatmap_Thunderous.json`.

## Game Controls
- Press Enter to start/pause the game
- Use A, S, K, L keys to hit notes
- Select different tracks from the dropdown menu 