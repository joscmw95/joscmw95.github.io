const fs = require('fs');
const path = require('path');

function processBeatmap(filePath) {
    console.log(`\nProcessing ${path.basename(filePath)}...`);
    const data = JSON.parse(fs.readFileSync(filePath));
    const notes = data.notes;
    const seen = new Set();
    const duplicates = [];
    const uniqueNotes = [];

    notes.forEach(note => {
        const key = `${note.time}-${note.lane}`;
        if (seen.has(key)) {
            duplicates.push(note);
        } else {
            seen.add(key);
            uniqueNotes.push(note);
        }
    });

    if (duplicates.length > 0) {
        console.log('Duplicate notes:', duplicates);
        console.log('Total duplicates found:', duplicates.length);
        
        // Create backup of original file
        const backupPath = filePath + '.backup';
        fs.copyFileSync(filePath, backupPath);
        console.log(`Created backup at ${backupPath}`);

        // Write cleaned beatmap
        data.notes = uniqueNotes;
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log('Cleaned beatmap saved');
    } else {
        console.log('No duplicates found');
    }
}

// Process all beatmap files
const beatmapDir = 'beatmaps';
const beatmapFiles = fs.readdirSync(beatmapDir)
    .filter(file => file.startsWith('beatmap_') && file.endsWith('.json'));

beatmapFiles.forEach(file => {
    processBeatmap(path.join(beatmapDir, file));
}); 