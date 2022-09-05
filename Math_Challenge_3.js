// Math Challenge
// Have the function MathChallenge(num) take the num parameter being passed and return the next number greater than num using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999).

function nextBigger(n){
  var d = n.toString().split('');

  // find the pivot, the point (from right) where i > i-1
  var p = -1;
  for (var i = d.length-1; i > 0; i--) {
    if (+d[i] > +d[i-1]) {
      p = i-1;
      break;
    }
  }

  // if we are unable to find the pivot, skip
  if (p == -1) return p;

  // splice the digits in the pivot
  var right = d.splice(p);

  // extract pivot
  var pv = right.splice(0, 1)[0];

  // find the lowest number > pv
  var mm = null, mmi = null;
  for (var i = 0; i < right.length; i++) {
    if (right[i] > pv) {
      if (mm == null || right[i] < mm) {
        mm = right[i];
        mmi = i;
      }
    }
  }

  if (mmi == null) return -1;

  right.splice(mmi, 1);
  right.push(pv);
  right = right.sort();

  // concat the left + new pivot + right part
  var ret = +d.concat([mm]).concat(right).join('');
  if (ret < n) return -1;

  return ret;
}