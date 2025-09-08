//
// Description:
// This series of katas will introduce you to basics of doing geometry with computers.
//
// Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.
//
// Write a function calculating perimeter of a Triangle defined this way.








function trianglePerimeter(triangle) {
  const {a, b, c} = triangle
  const ab = Math.sqrt(Math.pow((a.x - b.x),2) + Math.pow((a.y - b.y),2))
  const bc = Math.sqrt(Math.pow((b.x - c.x),2) + Math.pow((b.y - c.y),2))
  const ca = Math.sqrt(Math.pow((c.x - a.x),2) + Math.pow((c.y - a.y),2))
    return 0.0;
}