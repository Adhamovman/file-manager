import fs from "fs";
import { join } from "path";
import { getCurrentDir } from "./currentFolder.js";
export const renameFile = async (oldFileName, newFileName) => {
  fs.rename(
    join(getCurrentDir(), oldFileName),
    join(getCurrentDir(), newFileName),
    (err) => {
      if (err) console.log("Operations Failed!");
    }
  );
};
