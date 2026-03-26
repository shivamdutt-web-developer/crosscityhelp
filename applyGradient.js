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

            content = content.replace(
                /from-\[#15803d\]\/90 to-\[#1e40af\]\/90/g,
                'from-[#1e40af]/90 to-[#15803d]/90'
            );

            content = content.replace(
                /from-\[#15803d\]\/85 to-\[#1e40af\]\/85/g,
                'from-[#1e40af]/85 to-[#15803d]/85'
            );

            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated', fullPath);
            }
        }
    }
}

processDir('./src');
