const { execSync } = require("child_process");
const version = require("../package.json").version;
const output = `release/plugin/StudioPresence_${version}.rbxmx`;

execSync(`rojo build -o ${output}`, { stdio: "inherit" });
