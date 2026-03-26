const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const original = content;

            // Replace formatted text
            content = content.replace(/\+91 12345 67890/g, '+1 (226) 319-17078');

            // Replace tel: link hrefs (need to handle potential formatting in links)
            content = content.replace(/tel:\+911234567890/g, 'tel:+122631917078');

            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated phone in', fullPath);
            }
        }
    }
}

processDir('./src');
