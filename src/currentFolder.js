import { access } from "fs/promises";
import { basename, dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

let currentDirPath = dirname(fileURLToPath(import.meta.url));

const getCurrentDir = () => {
  return currentDirPath;
};
let homeDir = basename(getCurrentDir());
const changeDir = async (change_path_to) => {
  try {
    if (!change_path_to) {
      await goUpperDir();
    } else {
      if (change_path_to == "..") {
        await goUpperDir();
      } else {
        const newPath = join(currentDirPath, change_path_to);
        await access(newPath);
        currentDirPath = newPath;
      }
    }
  } catch {
    console.log("Operation Failed!");
  }
};

const goUpperDir = async () => {
  if (currentDirPath === homeDir) {
    console.log("You can't go upper than root directory");
  } else {
    currentDirPath = resolve(currentDirPath, "..");
  }
};

export { getCurrentDir, changeDir };
