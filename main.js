var prompt = require('prompt');

var array;
var currentTurn = 'X';
var gameIsOver = false;

var initialize = () => {
  array = [null, null, null, null, null, null, null, null, null];
  console.log(generateBoard());
  promptNextMove();
}

var promptNextMove = () => {
  console.log(array);
  if (gameIsOver) {
    return;
  }
  if (winHorizontal()) {
    gameIsOver = true;
    console.log('WINNER winHorizontal');
    return;
  }
  prompt.start();
  prompt.get('position', function (err, result) {
      if (err) { return onErr(err); }
      console.log('Command-line input received:');
      console.log('  Square chosen: ' + result.position);
      console.log('  Player: ' + currentTurn);
      array[result.position] = currentTurn;
      if (currentTurn === 'X') {
        currentTurn = 'O';
      } else {
        currentTurn = 'X';
      }
      console.log(generateBoard(array));
      var result = winHorizontal();
      console.log('result', result);
      // for (var row = 0; row < 3; row++) {
      //   if (array[0] === array[1] === array[2]) {
      //     gameIsOver = true;
      //     return;
      //   }
      // }
      if (result) {
        return;
      }
      promptNextMove();
    });

    function onErr(err) {
      console.log(err);
      return 1;
    }
}


var generateBoard = () => {
  return (
    `IT IS ${currentTurn}'s TURN` + '\n' +
    ` ___ ___ ___` + '\n' +
    `|0  |1  |2  |` + '\n' +
    `|_${array[0]||'_'}_|_${array[1]||'_'}_|_${array[2]||'_'}_|` + '\n' +
    `|3  |4  |5  |` + '\n' +
    `|_${array[3]||'_'}_|_${array[4]||'_'}_|_${array[5]||'_'}_|` + '\n' +
    `|6  |7  |8  |` + '\n' +
    `|_${array[6]||'_'}_|_${array[7]||'_'}_|_${array[8]||'_'}_|`
  );
}

var winHorizontal = () => {
  console.log('horiz', array);
  // for (var row = 0; row < 3; row++) {
  //   // var symbol = array[0 + row * 3];
  //   // if (symbol === 'X' || symbol === 'O') {
  //   if (array[0 + row * 3] === array[1 + row * 3] === array[2 + row * 3]) {
  //     console.log(array[0 + row * 3], array[1 + row * 3])
  //     console.log('yeee');
  //     return true;
  //   }
  // }
  // return false;
  if (array[0] === array[1] === array[2]) {
    return true;
  }
  return false;

}

// var winVertical = () => {
//   if (array[0 * row] === array[1 * row] === array[2 * row]) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var winDiagonal = () => {
//   if (array[0 * row] === array[1 * row] === array[2 * row]) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(generateBoard(testArray));

initialize();