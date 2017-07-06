 /*
 * coverts coordinates to degree
 * @param  {Object} pointer - contains `x` and `y` offset of pointer
 * @param  {Number} size - size of element
 * @return {Number} returns the degree value
 */

const coordToDeg = (pointer, size) => {
  
  const center = size / 2
  const dX = pointer.x - center
  const dY = pointer.y - center
  const teta = Math.atan(dY / dX) * 180 / Math.PI + 90
  
  if ((dX < 0 && dY >= 0) || (dX < 0 && dY < 0)) {
    return teta
  } else {
    return teta + 180
  }
}

export default coordToDeg;