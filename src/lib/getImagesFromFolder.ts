import fs from 'fs';
import path from 'path';

export const getImagesFromFolder = (folder: string): string[] => {
  const folderPath = path.join(process.cwd(), 'public', folder);
  const files = fs.readdirSync(folderPath);
  return files.map((file) => `/${folder}/${file}`);
};
