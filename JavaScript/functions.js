const result = squareNum(5);
console.log(result);

const result2 = squareNumExpression(5);
console.log(result2);

function squareNum(num) {
  return num ** 2;
}

const squareNumExpression = function (num) {
  return num ** 2;
};
