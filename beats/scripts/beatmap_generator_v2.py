from pydub import AudioSegment
from scipy.signal import find_peaks
from scipy.io import wavfile
import numpy as np
import json
import os
import sys

def generate_beatmap(file_path):
    # Construct file paths
    track_name = os.path.splitext(os.path.basename(file_path))[0]
    wav_path = f"./{track_name}_temp.wav"
    
    try:
        # Convert audio to WAV
        audio = AudioSegment.from_file(file_path)
        audio.export(wav_path, format="wav")
        
        # Load WAV audio
        sr, audio = wavfile.read(wav_path)
        if audio.ndim > 1:
            audio = audio.mean(axis=1)  # Convert to mono
        
        # Normalize audio
        audio = audio / np.max(np.abs(audio))
        
        # Detect peaks (approximate beat detection)
        peaks, _ = find_peaks(
            audio, height=0.3, distance=sr * 60 / 120 // 2
        )  # assuming 120 BPM
        
        # Generate notes
        lanes = 4
        np.random.seed(42)
        notes = []
        
        for i, peak in enumerate(peaks):
            ms = int((peak / sr) * 1000)
            
            if i % 5 == 0:
                # Every 5th note is a 2-lane chord
                selected_lanes = np.random.choice(lanes, size=2, replace=False)
                for lane in selected_lanes:
                    notes.append({"time": ms, "lane": int(lane)})
            else:
                # Single-lane tap note
                lane = int(np.random.randint(0, lanes))
                notes.append({"time": ms, "lane": lane})
        
        # Build beatmap
        beatmap = {
            "version": "1.0",
            "metadata": {
                "title": track_name,
                "artist": "Unknown",
                "estimated_bpm": 120,
                "lanes": lanes,
            },
            "notes": notes,
        }
        
        output_path = f"./beatmaps/beatmap_{track_name}.json"
        
        # Write the beatmap to a JSON file
        with open(output_path, "w") as f:
            json.dump(beatmap, f, indent=2)
        
        print(f"Beatmap saved to {output_path}")
    
    finally:
        # Clean up temporary WAV file
        if os.path.exists(wav_path):
            os.remove(wav_path)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python scripts/beatmap_generator_v2.py <path_to_track>")
        print("Example: python scripts/beatmap_generator_v2.py tracks/Thunderous.flac")
        sys.exit(1)
    
    track_name = sys.argv[1]
    generate_beatmap(track_name)
