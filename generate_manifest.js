import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";

function walkPath(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .map((dirent) =>
      dirent.isDirectory()
        ? walkPath(path.join(dir, dirent.name))
        : [path.join(dir, dirent.name)]
    )
    .reduce((acc, items) => [...acc, ...items], []);
}

function generateManifest(files) {
  return {
    version: 1,
    metadata: {
      appmode: "static",
      primary_doc: "index.html",
    },
    locale: "en_US.UTF-8",
    files: files.reduce((acc, item) => ({ ...acc, [item]: {} }), {}),
  };
}

async function main() {
  let fh;
  const data = generateManifest(
    walkPath("public").map((p) => p.slice("public/".length))
  );
  const content = JSON.stringify(data, undefined, 2);
  try {
    fh = await fsPromises.open("public/manifest.json", "w");
    fh.write(content);
  } finally {
    await fh?.close();
  }
}

main()
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.error(err);
  });
