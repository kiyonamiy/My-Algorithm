/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  if (points.length < 1) {
    return 0;
  }
  let result = 0;
  let startPoint = points[0];
  for (let i = 1; i < points.length; i++) {
    const endPoint = points[i];
    const width = Math.abs(endPoint[0] - startPoint[0]);
    const height = Math.abs(endPoint[1] - startPoint[1]);
    result += Math.max(width, height);
    startPoint = endPoint;
  }
  return result;
};
