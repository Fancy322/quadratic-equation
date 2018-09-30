module.exports = function solveEquation(equation) {
  const abcArr = equation.replace(/\s/g, '').split('*');
   let abc = equation.replace(/\s/g, '').split('*');
  const a = abcArr[0];
  const b = abcArr[1].replace('x^2', '');
  const c = abcArr[2].replace('x', '');
   let a = abc[0];
  let b = abc[1].split('x^2').join('');
  let c = abc[2].split('x').join('');
  const d = (b * b) - (4 * a * c);
  const x1 = (-b - Math.round(Math.sqrt(d))) / (2 * a);
  const x2 = (-b + Math.round(Math.sqrt(d))) / (2 * a);
   let d = (b*b) - (4*a*c);
  let x1 = parseInt((-b - Math.sqrt(d)) / (2*a));
  let x2 = parseInt((-b + Math.sqrt(d)) / (2*a));
   if (x1 < x2) {
  if (x1 < x2)
    return [x1, x2];
  } else {
    return [x2, x1];
  }
}
