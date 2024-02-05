import { createReadStream } from "fs";
import { createHash } from "crypto";

export const calculateHash = async (filePath) => {
  try {
    console.log(
      await new Promise((resolve, reject) => {
        const hash = createHash("sha256");
        const stream = createReadStream(filePath);

        stream.on("data", (data) => {
          hash.update(data);
        });

        stream.on("end", () => {
          const hashResult = hash.digest("hex");
          resolve(hashResult);
        });

        stream.on("error", (error) => {
          reject(error);
        });
      })
    );
  } catch {
    console.log("Operation Failed!");
  }
};
