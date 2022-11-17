const fs = require("fs");
const explorer = fs.readdirSync("../pages/markdown");
const md2json = require("md-2-json");
const pageArr = [explorer.length];

function mdfinder() {
  const folder = "../pages/markdown/";
  for (const file in explorer) {
    const content = fs.readFileSync(folder + explorer[file], "utf8");
    const website = md2json.parse(content);
    pageArr[file] = {
      name: explorer[file].replace(".md", ""),
      content: website,
    };
  }

  //! Lägg varje file i variabel, converta variabeln
}
mdfinder();
console.log(pageArr);
