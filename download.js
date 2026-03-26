const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000', name: 'digital-marketing.jpg' },
  { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000', name: 'web-development.jpg' },
  { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000', name: 'software-development.jpg' },
  { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000', name: 'saas.jpg' },
  { url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000', name: 'hrms.jpg' }
];

const publicImagesDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };
    
    https.get(url, options, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, options, (res) => {
            res.pipe(file);
            file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      } else {
          response.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (const img of images) {
    const dest = path.join(publicImagesDir, img.name);
    try {
      await downloadImage(img.url, dest);
      console.log(`Downloaded ${img.name}`);
    } catch (e) {
      console.error(`Error downloading ${img.name}`, e);
    }
  }
}

run();
