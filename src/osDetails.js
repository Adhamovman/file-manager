import os from "os";
export const osDetails = (command) => {
  switch (command) {
    case "EOL":
      console.log(JSON.stringify(os.EOL));
      break;
    case "cpus":
    const cpus = os.cpus();
    const overallCPUs = os.cpus().length;
    console.log(`Overall CPUs: ${overallCPUs}`);
    cpus.forEach((cpu, index) => {
      console.log(`\nCPU ${index + 1}:`);
      console.log(`  Model: ${cpu.model}`);
      console.log(`  Speed: ${cpu.speed / 1000} GHz`);
    });
      break;
    case "homedir":
      console.log(os.homedir());
      break;
    case "username":
      console.log(os.userInfo().username);
      break;
    case "architecture":
      console.log(os.arch());
      break;
      default: console.log("Invalid input")
  }
};
