import path from "path";
import { getCurrentDir } from "./currentFolder.js";

const getFullFilePath = (filename) => {
  return path.join(getCurrentDir(), filename);
};

function capitalizeFirstLetter(username) {
  return username.charAt(0).toUpperCase() + username.slice(1);
}

export { getFullFilePath, capitalizeFirstLetter };
