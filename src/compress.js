import fs from "fs";
import zlib from "zlib";
import path, { join } from "path";
import { pipeline } from "stream";

export const compressFile = (path_to_file, path_to_dest) => {
  try {
    const archiveFilename = path.parse(path_to_file).name + ".br";
    const brotliCompressStream = zlib.createBrotliCompress();

    const readStream = fs.createReadStream(path_to_file);
    const writeStream = fs.createWriteStream(
      join(path_to_dest, archiveFilename)
    );

    pipeline(readStream, brotliCompressStream, writeStream, () => {});
  } catch {
    console.log("Operation Failed!");
  }
};
