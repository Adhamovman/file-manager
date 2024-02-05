import fs from "fs";
export const addNewFile = async (path) => {
  fs.writeFile(path, "", "utf-8", (err) => {
    if (err) console.log("Operation Failed!");
  });
};
