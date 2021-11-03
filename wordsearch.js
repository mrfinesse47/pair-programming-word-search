const { transpose } = require("./matrix");

const wordSearch = (letters, word) => {
  if (!letters.length) {
    return undefined;
  }
  const vertical = transpose(letters);

  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = vertical.map((ls) => ls.join(""));

  //search horizontally
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  //search vertically
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
