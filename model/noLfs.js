import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./db/themes.db");

function noLfs() {
  return new Promise((resolve) => {
    db.run(
      `INSERT INTO fruit (page_name, page_content)
      VALUES ("error", "error");`,
      [],
      (err) => {
        if (err) {
          resolve(err);
        } else {
          resolve("clear");
        }
      }
    );
  });
}

noLfs();
