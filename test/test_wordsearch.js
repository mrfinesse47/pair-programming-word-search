const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function () {
  it("should return false if the word is not present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });

  it("should return false if the word is not in order", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "D", "L"], //spelling error intentional
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isFalse(result);
  });

  it("##VERTICAL should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["S", "W", "C", "F", "Q", "U", "A", "L"],
        ["E", "E", "I", "N", "F", "E", "L", "D"],
        ["I", "F", "C", "F", "Q", "U", "A", "L"],
        ["N", "M", "J", "T", "E", "V", "R", "G"],
        ["F", "H", "C", "S", "Y", "E", "R", "L"],
        ["E", "F", "R", "E", "N", "E", "Y", "B"],
        ["L", "B", "T", "W", "A", "P", "A", "I"],
        ["D", "D", "C", "A", "K", "U", "A", "S"],
        ["A", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });

  it("##should return undefined if the letters array is empty", function () {
    const result = wordSearch([], "Kevin");

    assert.isUndefined(result);
  });
  it("##should return true if it matches the word but one array element is empty", function () {
    const result = wordSearch(
      [
        [],
        ["E", "E", "I", "N", "F", "E", "L", "D"],
        ["I", "F", "C", "F", "Q", "U", "A", "L"],
        ["N", "K", "E", "V", "I", "N", "R", "G"],
        ["F", "H", "C", "S", "Y", "E", "R", "L"],
        ["E", "F", "R", "E", "N", "E", "Y", "B"],
        ["L", "B", "T", "W", "A", "P", "A", "I"],
        ["D", "D", "C", "A", "K", "U", "A", "S"],
        ["A", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "KEVIN"
    );

    assert.isTrue(result);
  });
  it("##should return true if it matches the word but the arrays are different lengths", function () {
    const result = wordSearch(
      [
        [],
        ["E", "E", "I", "N", "F", "E", "L", "D"],
        ["I", "F", "C", "F", "Q"],
        ["N", "K", "E", "V", "I", "N", "R", "G"],
        ["F", "H", "C", "S", "Y", "E", "R", "L"],
        ["E", "F", "B"],
        ["L", "B", "T", "W", "A", "P", "A", "I"],
        ["D", "D", "C", "A", "K", "U", "A", "S"],
        ["A", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "KEVIN"
    );

    assert.isTrue(result);
  });
  it("##VERTICAL should return true if it matches the word but the arrays are different lengths", function () {
    const result = wordSearch(
      [
        [],
        ["E", "E", "I", "N", "F", "E", "L", "D"],
        ["I", "F", "C", "F", "Q"],
        ["N", "K", "E", "P", "W", "N", "R", "G"],
        ["F", "E", "C", "S", "Y", "E", "R", "L"],
        ["E", "V", "B"],
        ["L", "I", "T", "W", "A", "P", "A", "I"],
        ["D", "N", "C", "A", "K", "U", "A", "S"],
        ["A", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "KEVIN"
    );

    assert.isTrue(result);
  });
});
