import { put } from '@vercel/blob';
import fs from 'fs';

async function uploadVideos() {
  for (let i = 1; i <= 22; i++) {
    const fileStream = fs.createReadStream(`./videos/${i}.mp4`);
    const blob = await put(`resoflex/video-${i}.mp4`, fileStream, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN
    });
    console.log(`Video ${i} uploaded to: ${blob.url}`);
  }
}

uploadVideos();
