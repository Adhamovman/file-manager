import fs from "fs";
import { stdout } from "process";

export const readFileByStream = async (path) => {
  try {
    const stream = fs.createReadStream(path);
    stream.on("data", (data) => {
      let text = data.toString();
      stdout.write(text);
    });
    stream.on("error", (err) => {
      console.log("Operation Failed!");
    });
  } catch {
    console.log("Operation Failed!");
  }
};
