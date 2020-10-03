
exports.min = function min (array) {
 if (!arguments.length || array.length === 0) return 0;
 return Math.min(...array);   
}

exports.max = function max (array) {
  if (!arguments.length || array.length === 0) return 0;
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (!arguments.length || array.length === 0) return 0;
  return array.reduce((acc, curr) => acc + curr) / array.length;
}
