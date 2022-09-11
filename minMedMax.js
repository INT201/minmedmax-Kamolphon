const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let eve
  if (n1 > n2) {
    eve = n2
    n2 = n1 //n2จะโดนแทนที่ด้วยn1
    n1 = eve
  }
  if (n1 > n3) {
    eve = n3
    n3 = n1
    n1 = eve
  }
  if (n2 > n3) {
    eve = n3
    n3 = n2
    n2 = eve
  }
  return { 'min': n1, 'mid': n2, 'max': n3 }
}
module.exports = minMedMax
