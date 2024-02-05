import fs, { readdir } from "fs/promises";
import { join } from "path";
import { getCurrentDir } from "./currentFolder.js";

export const getFolderItemsInfo = async () => {
  try {
    let fileDetails = [];
    const folderItems = await readdir(getCurrentDir());
    for (const folderItem of folderItems) {
      const isFolder = await isFolderChecker(join(getCurrentDir(), folderItem));
      fileDetails.push({
        Name: folderItem,
        Type: isFolder ? "directory" : "file",
      });
    }
    console.table(fileDetails);
  } catch (error) {
    console.log(error);
  }
};

const isFolderChecker = async (path) => {
  let isFolder = await fs.stat(path);
  return isFolder.isDirectory();
};
