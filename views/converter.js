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
      pageName: explorer[file].replace(".md", ""),
      pageContent: website,
    };
  }

  //! Lägg varje file i variabel, converta variabeln
}
mdfinder();

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("../db/themes.db");

db.run(
  "DELETE FROM molekylverkstan",
  "CREATE TABLE [IF NOT EXISTS] 'molekylverkstan' (page_id INTEGER PRIMARY KEY, page_name TEXT NOT NULL, page_content TEXT NOT NULL);"
);
for (i = 0; i < pageArr.length - 1; i++) {
  console.log(pageArr[i].pageName);
  db.run(
    "INSERT INTO molekylverkstan (page_name, page_content) VALUES ('" +
      pageArr[i].pageName +
      "', '" +
      pageArr[i].pageContent +
      "')"
  );
}
