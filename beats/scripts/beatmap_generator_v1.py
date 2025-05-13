from pydub import AudioSegment
import numpy as np
from scipy.signal import butter, filtfilt
import random
import json
import os

# Load the uploaded audio file
file_path = "../tracks/lutie.mp3"
audio = AudioSegment.from_file(file_path)

# Convert the audio to raw data
audio_samples = np.array(audio.get_array_of_samples()).astype(np.float32)
sample_rate = audio.frame_rate

# Convert stereo to mono if necessary
if audio.channels == 2:
    audio_samples = audio_samples.reshape((-1, 2)).mean(axis=1)


# Step 1: Low-pass filter to smooth the signal and reduce high-frequency noise
def butter_lowpass(cutoff, fs, order=4):
    nyquist = 0.5 * fs
    normal_cutoff = cutoff / nyquist
    b, a = butter(order, normal_cutoff, btype="low", analog=False)
    return b, a


def apply_lowpass_filter(data, cutoff, fs):
    b, a = butter_lowpass(cutoff, fs)
    y = filtfilt(b, a, data)
    return y


# Apply low-pass filter with a cutoff frequency of 5 Hz (for smooth beat detection)
filtered_samples = apply_lowpass_filter(audio_samples, cutoff=5, fs=sample_rate)

# Step 2: Peak detection with thresholding
# Detect peaks by calculating the difference between successive samples
peaks = (np.diff(np.sign(np.diff(filtered_samples))) < 0).nonzero()[0] + 1

# Step 3: Apply amplitude thresholding to remove insignificant peaks
# Dynamically calculate threshold as a percentage of the max amplitude
amplitude_threshold = (
    np.max(np.abs(filtered_samples)) * 0.01
)  # Lower the threshold for more beats

valid_peaks = [p for p in peaks if np.abs(filtered_samples[p]) > amplitude_threshold]

# Step 4: Convert peak indices to time in seconds
peak_times = np.array(valid_peaks) / sample_rate

# Step 5: Remove closely spaced peaks (e.g., less than 0.1 seconds apart)
min_time_diff = 0.1  # Minimum time difference between beats (in seconds)
filtered_peak_times = []
last_time = -min_time_diff

for time in peak_times:
    if time - last_time >= min_time_diff:
        filtered_peak_times.append(time)
        last_time = time

# Step 6: Generate a beatmap with note positions
# Implement heuristics for lane assignment
notes = []
last_lane = None  # Track the last lane used to avoid repetition
for i, time in enumerate(filtered_peak_times):
    # Heuristic 1: Avoid consecutive repetitions of the same lane
    possible_lanes = [0, 1, 2, 3]  # Changed to 0-based indexing to match JSON format
    if last_lane is not None:
        possible_lanes.remove(last_lane)

    # Heuristic 2: Add some randomness while keeping the lane assignment smooth
    if random.random() < 0.1:  # 10% chance to "rest" (no note)
        lane = None
    else:
        lane = random.choice(possible_lanes)

    # Update the last lane for the next note
    last_lane = lane

    # Heuristic 3: Clustered or repeating pattern for smooth flow
    # We can implement something like this for a buildup (changing probabilities during sections)
    if 30 < time < 60:  # Assume this is a build-up section
        # Favor lane 0 for buildup
        if (
            lane is None or random.random() < 0.7
        ):  # 70% chance for lane 0 during buildup
            lane = 0

    # Add the note to the beatmap (only if a lane is selected)
    if lane is not None:
        notes.append(
            {
                "time": int(
                    time * 1000
                ),  # Convert to milliseconds and round to integer
                "lane": lane,
            }
        )

# Create the beatmap object in the correct format
beatmap = {"version": "1.0.0", "notes": notes}

# Get the filename without extension
base_name = os.path.splitext(os.path.basename(file_path))[0]
output_path = f"../beatmaps/beatmap_{base_name}_new.json"

# Write the beatmap to a JSON file
with open(output_path, "w") as f:
    json.dump(beatmap, f, indent=2)

print(f"Beatmap saved to {output_path}")
