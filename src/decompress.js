import fs from "fs";
import zlib from "zlib";
import { normalize } from "path";

export const decompressFile = (sourceFilePath, path_to_dest) => {
  try {
    const destFilePath = normalize(path_to_dest);
    const brotliDecompressStream = zlib.createBrotliDecompress();
    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(destFilePath);
    readStream.pipe(brotliDecompressStream).pipe(writeStream);
    writeStream.on("error", () => {
      console.log("Operation Failed!");
    });
  } catch {
    console.log("Operation Failed!");
  }
};
