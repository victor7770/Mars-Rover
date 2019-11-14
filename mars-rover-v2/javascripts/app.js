// r Object Goes Here
// ======================
let turn = 1;
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travalLog: [],
};
// ======================
function turnLeft() {
  console.log("turnLeft was called!");
  if (turn === 4) {
    turn -= 3;
  }
  else {
    turn++;
  }
  console.log(changeDirection());
}

function turnRight() {
  console.log("turnRight was called!");
  if (turn == 1) {
    turn += 3;
  }
  else {
    turn--;
  }
  console.log(changeDirection());
}

function moveForward(r = rover) {
  console.log("moveForward was called")
  log();
  switch (r.direction) {
    case "N":
      r.y = r.y - 1;
      break;
    case "S":
      r.y = r.y + 1;
      break;
    case "E":
      r.x = r.x - 1;
      break;
    case "W":
      r.x = r.x + 1;
      break;
  }
  if (r.y === -1 ){
    r.y += 1;
    console.log("Can't move that way")
    return;
  }
  if (r.y === 11 ){
    r.y -= 1;
    console.log("Can't move that way")
    return;
  }
  if (r.x === -1 ){
    r.x += 1;
    console.log("Can't move that way")
    return;
  }
  if (r.x === 11 ){
    r.x -= 1;
    console.log("Can't move that way")
    return;
  }
  console.log(r.travalLog.toString())
  console.log(`[${r.y},${r.x}]`)
}

function changeDirection(r = rover) {
  if (turn === 1) {
    r.direction = "N";
    return "N"
  }
  if (turn === 2) {
    r.direction = "W";
    return "W"
  }
  if (turn === 3) {
    r.direction = "S";
    return "S"
  }
  if (turn === 4) {
    r.direction = "E";
    return "E"
  }
}

function commands(string) {
  for (let i = 0; i < string.length; i++) {
    switch (string.charAt(i)) {
      case "f":
       moveForward();
       break;
      case "r":
       turnRight();
       break;
      case "l":
       turnLeft();
       break;
    }
  }
}

function log(r = rover){
  r.travalLog.push(`[${r.y},${r.x}]`);
} 