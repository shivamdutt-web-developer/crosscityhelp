const fs = require('fs');
const https = require('https');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const publicImagesDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Function to recursively find all files
function walkSync(dir, filelist = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            walkSync(filepath, filelist);
        } else if (filepath.endsWith('.js')) {
            filelist.push(filepath);
        }
    }
    return filelist;
}

const files = walkSync(srcDir);
const urlRegex = /https:\/\/images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)\?ixlib=[^"'\s)]+/g;

const downloadQueue = new Set();
const mapToLocal = {};

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    let match;

    while ((match = urlRegex.exec(content)) !== null) {
        const fullUrl = match[0];
        const photoId = match[1];
        const filename = `img-${photoId}.jpg`;

        mapToLocal[fullUrl] = `/images/${filename}`;
        downloadQueue.add(JSON.stringify({ url: fullUrl, filename }));
    }
}

// Replace in all files
for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    for (const [fullUrl, localPath] of Object.entries(mapToLocal)) {
        if (content.includes(fullUrl)) {
            // Replace full string including queries
            content = content.replace(new RegExp(fullUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), localPath);
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated URLs in ${file}`);
    }
}

// Download function
async function downloadImage({ url, filename }) {
    return new Promise((resolve, reject) => {
        const filepath = path.join(publicImagesDir, filename);
        if (fs.existsSync(filepath)) {
            resolve(); // already downloaded
            return;
        }

        console.log(`Downloading ${filename}...`);
        // Handle redirect because unsplash redirects
        const request = https.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                https.get(response.headers.location, (res) => {
                    const fileStream = fs.createWriteStream(filepath);
                    res.pipe(fileStream);
                    fileStream.on('finish', () => {
                        fileStream.close();
                        resolve();
                    });
                }).on('error', reject);
            } else {
                const fileStream = fs.createWriteStream(filepath);
                response.pipe(fileStream);
                fileStream.on('finish', () => {
                    fileStream.close();
                    resolve();
                });
            }
        }).on('error', reject);
    });
}

async function processQueue() {
    console.log(`Starting download of ${downloadQueue.size} unique images...`);
    const promises = Array.from(downloadQueue).map(item => downloadImage(JSON.parse(item)));
    await Promise.all(promises);
    console.log('Done downloading all images.');
}

processQueue();
