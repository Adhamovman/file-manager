import fs from "fs";
export const deleteFile = (path) => {
  try {
    fs.unlink(path, () => {});
  } catch {
    console.log("Operation Failed!");
  }
};
