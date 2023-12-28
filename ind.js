// index.js
function sub(a, b) {
  //console.log(a+b);
  //console.debug(a+b);
  return a - b;
}

function mul1(a, b) {
  //console.log(a+b);
  //console.debug(a+b);
  return a * b;
}


module.exports = sub;
module.exports.mul1 = mul1;
