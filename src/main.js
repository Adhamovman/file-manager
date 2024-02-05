// Please make sure to read the README.md instructions for clarification

import readline from "readline";
import { capitalizeFirstLetter, getFullFilePath } from "./helper.js";
import { changeDir, getCurrentDir } from "./currentFolder.js";
import { readFileByStream } from "./readFile.js";
import { decompressFile } from "./decompress.js";
import { getFolderItemsInfo } from "./list.js";
import { compressFile } from "./compress.js";
import { deleteFile } from "./removeFile.js";
import { addNewFile } from "./addNewFile.js";
import { osDetails } from "./osDetails.js";
import { calculateHash } from "./hash.js";
import { renameFile } from "./rename.js";
import { copyFile } from "./copyFile.js";
import { moveFile } from "./moveFile.js";

const executeCommand = async (command, args) => {
  switch (command) {
    case "ls":
      getFolderItemsInfo();
      break;
    case "cd":
    case "up":
      await changeDir(args[0]);
      break;
    case "cat":
      await readFileByStream(getFullFilePath(args[0]));
      break;
    case "add":
      await addNewFile(getFullFilePath(args[0]));
      break;
    case "rm":
      deleteFile(getFullFilePath(args[0]));
      break;
    case "rn":
      await renameFile(args[0], args[1]);
      break;
    case "cp":
      await copyFile(getFullFilePath(args[0]), args.slice(1).join(" "));
      break;
    case "mv":
      await moveFile(getFullFilePath(args[0]), args.slice(1).join(" "));
      break;
    case "os":
      osDetails(args[0].replace("--", ""));
      break;
    case "hash":
      await calculateHash(getFullFilePath(args[0]));
      break;
    case "compress":
      compressFile(getFullFilePath(args[0]), args.slice(1).join(" "));
      break;
    case "decompress":
      decompressFile(getFullFilePath(args[0]), args.slice(1).join(" "));
      break;
    case ".exit":
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      process.exit(0);
      break;
    default:
      console.error("Invalid input");
  }
};

const parseInput = (input) => {
  const [command, ...args] = input.trim().split(" ");
  return { command, args };
};

const app = async () => {
  try {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    let username = capitalizeFirstLetter(process.argv[2].split("=")[1]);
    console.log(`Welcome to the File Manager, ${username}!`);
    console.log(`You are currently in ${getCurrentDir()}`);

    rl.on("line", async (input) => {
      const { command, args } = parseInput(input);
      await executeCommand(command, args);
      await console.log(`You are currently in ${getCurrentDir()}`);
    });

    rl.on("close", () => {
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      process.exit(0);
    });
  } catch (error) {
    console.error(error);
  }
};

await app();
