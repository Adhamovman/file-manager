import fs from "fs";
import path from "path";
export const copyFile = async (filePath, dest) => {
  try {
    let newFileName =
      path.parse(filePath).name + "_copy" + path.extname(filePath);
    const readableStream = fs.createReadStream(path.join(filePath));
    const writeStream = fs.createWriteStream(path.join(dest, newFileName), {
      flags: "a",
    });
    readableStream.pipe(writeStream);
  } catch {
    console.log("Operation Failed!");
  }
};
