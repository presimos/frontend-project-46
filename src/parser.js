import fs from 'fs';
import path from 'path';
import process from 'process';

export default (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const fileData = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(fileData);
};
