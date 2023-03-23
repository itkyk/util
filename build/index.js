const esBuild = require("esbuild");

const init = async () => {
  const emsBuilder = await esBuild.context({
    entryPoints: ["./src/index.ts", "./src/core.ts"],
    outdir: "./bin/",
    bundle: true,
    platform: "browser",
    format: "esm",
    outExtension: {".js": ".mjs"}
  });
  const cjsBuilder = await esBuild.context({
    entryPoints: ["./src/index.ts", "./src/core.ts"],
    outdir: "./bin/",
    bundle: true,
    platform: "browser",
    format: "cjs",
    outExtension: {".js": ".cjs"}
  });
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === "watch") {
    console.log("Watching start")
    emsBuilder.watch().then();
    cjsBuilder.watch().then();
  } else {
    emsBuilder.rebuild().then();
    cjsBuilder.rebuild().then();
    process.exit(0)
  }
}

init().then()