import 'dotenv/config';
import { bucket } from '../src/config/gcs.js';

const file = bucket.file('test/hello.txt');
await file.save('hello from node');
const [contents] = await file.download();
console.log('Read back:', contents.toString());

const [uploadUrl] = await bucket.file('test/resumable.bin').createResumableUpload({
  origin: process.env.CLIENT_ORIGIN,
});
console.log('Resumable session:', uploadUrl.slice(0, 80) + '...');

await file.delete();
console.log('OK');