//part of pair programming with Abdi Elmi for LHL course work

const transpose = function (matrix) {
  const finalMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!finalMatrix[j]) {
        finalMatrix.push([]);
      }
      finalMatrix[j].push(matrix[i][j]);
    }
  }

  return finalMatrix;
};

module.exports = { transpose };
