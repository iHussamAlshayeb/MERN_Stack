const fs = require("fs");

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory Created");
  });
}

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory Deleted");
  });
}

process.on("uncaughtException", (err) => {
  console.error(`There was an uncoaght error: ${err}`);
  process.exit(1);
});
