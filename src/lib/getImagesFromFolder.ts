import fs from 'fs';
import path from 'path';

export const getImagesFromFolder = (): Record<string, string[]> => {
  const folderPath = path.join(process.cwd(), 'public', 'images', 'imagens-kitnets');
  const folders = fs.readdirSync(folderPath);

  const result: Record<string, string[]> = {};

  folders.forEach((folderName) => {
    const folderFullPath = path.join(folderPath, folderName);
    const files = fs.readdirSync(folderFullPath);
    const filePaths = files.map((file) => `/images/imagens-kitnets/${folderName}/${file}`);
    result[folderName] = filePaths;
  });

  return result;
};
