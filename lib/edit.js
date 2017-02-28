//NOTE: these functions assume a the board is square.

function boundsChecks(x, y, board) {
  if (board.length%2===0) { throw new Error('Boards must be an odd length to reflect points symmetrically.'); }
  try { let test = board[x][y]; }
  catch(err) { throw new Error('The point given does not exist on the board.'); }
  return true;
}

function reflectPointHorizontal(x, y, board) {
  //returns reflected point (x, y) about a horizontal line dividing board
  if (!boundsChecks(x, y, board)) { return false; }
  let newX, boardMidpoint;
  boardMidpoint = Math.floor(board.length/2);
  (x===boardMidpoint) ? newX=x : newX=(2*boardMidpoint-x);
  return [newX, y];
}

function reflectPointVertical(x, y, board) {
  //returns reflected point (x, y) about a vertical line dividing board
  if (!boundsChecks(x, y, board)) { return false; }
  let newY, boardMidpoint;
  boardMidpoint = Math.floor(board.length/2);
  (y===boardMidpoint) ? newY=y : newY=(2*boardMidpoint-y);
  return [x, newY];
}

function reflectPointAboutDiagonalUp(x, y, board) {
  //returns reflected point (x, y) about an upsloping diagonal / across board
  if (!boundsChecks(x, y, board)) { return false; }
  let newX=reflectPointHorizontal(x, y, board)[0];
  let newY=reflectPointVertical(x, y, board)[1];
  return [newX, newY];
}

function reflectPointAboutDiagonalDown(x, y, board) {
  //reflects reflect point (x, y) about an downsloping diagonal \ across board
  if (!boundsChecks(x, y, board)) { return false; }
  return (x===y) ? [x,y] : [y,x];
}

module.exports = { reflectPointHorizontal, reflectPointVertical, reflectPointAboutDiagonalUp, reflectPointAboutDiagonalDown};
