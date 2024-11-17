import json

# Load the new Beat Saber map data
new_file_path = './item.json'

# Constants
BPM = 162  # Beats per minute
NORMALIZED_RUNTIME = 191  # Your game's music length in seconds

# Read the beatmap file
with open(new_file_path, 'r') as f:
    beat_saber_map = json.load(f)

# Extract beats and calculate the original runtime
beats = [note["b"] for note in beat_saber_map["colorNotes"]]
original_runtime = (max(beats) / BPM) * 60  # Convert last beat to seconds

# Scaling factor for normalization
scaling_factor = NORMALIZED_RUNTIME / original_runtime

# Convert beat map
converted_notes = []
for note in beat_saber_map["colorNotes"]:
    time = (note["b"] / BPM) * 60 * scaling_factor  # Normalize time
    converted_notes.append({
        "time": round(time - 1.5, 3),  # Time in seconds
        "lane": note["x"],  # Assume x corresponds to a lane
    })

# Create the new beatmap structure
converted_beatmap = {
    "version": "1.0.0",  # User's game format version
    "notes": converted_notes
}

# Output file path for the new conversion
output_file_path = './beatmap_item.json'

# Write the converted beatmap to a file
with open(output_file_path, 'w') as f:
    json.dump(converted_beatmap, f, indent=4)

output_file_path
