// writeFileInSlices.ts
import fs from 'fs';
import path from 'path';

const ensureDirectoryExists = (dirPath: string) => {
    const dirname = path.dirname(dirPath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExists(dirname);
    fs.mkdirSync(dirname);
};

export const writeStringToFileInSlices = async (sliceName: string, data: string): Promise<void> => {
    try {
        const sliceFolderPath = path.join(__dirname, 'slices', sliceName);
        const filePath = path.join(__dirname, 'slices', sliceName, sliceName + ".jsx");

        // Ensure the directory exists
        ensureDirectoryExists(sliceFolderPath);
        ensureDirectoryExists(filePath);

        // Write data to file
        await fs.promises.writeFile(filePath, data, 'utf8');
        console.log(`Successfully wrote data to ${filePath}`);
    } catch (error) {
        console.error(`Error writing to file: ${error}`);
    }
};


export const readFileSynchronously = (fileName: string): string => {
  try {
    const filePath: string = path.resolve(__dirname, fileName);
    // Read file synchronously
    const data: Buffer = fs.readFileSync(filePath);
    // Convert Buffer to string and return
    return data.toString();
  } catch (error) {
    console.error(`An error occurred while reading the file: ${error}`);
    return '';
  }
};