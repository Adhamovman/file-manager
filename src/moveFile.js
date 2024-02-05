import fs from "fs";
import { deleteFile } from "./removeFile.js";
import path from "path";

export const moveFile = async (path_to_file, dest) => {
  try {
    const filename = path.basename(path_to_file);
    const readableStream = fs.createReadStream(path_to_file);
    const writeStream = fs.createWriteStream(path.join(dest, filename));

    readableStream.pipe(writeStream);

    writeStream.on("finish", () => {
      readableStream.close();
      writeStream.close();
      deleteFile(path_to_file);
    });
  } catch {
    console.error("Operation Failed!");
  }
};
