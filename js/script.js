var players = [];
var numplayers = 0;
var gamestarted = false;

function add() {
  if (players.size >= 4)
    return;

  if (txtNewPlayer.value == "")
    return;

  //var player = new player();
  //player.name = txtNewPlayer.value;
  //player.totalScore = 0;
//  player.currentScore = 0;
//  numPlayers++;
  //players[numPlayers];
  txtNewPlayer.value = "";
}

function enablePlayer(i) {
  var player = players[i];
  var playerSection =
    document.getElementById("playerName" + i);
  console.log(player.name);
  document.getElementById("playerName" + i).innerHTML = player.name;
  playerSection.style.display = "block";
}

function clearPlayers() {
  players = [];
  numPlayers = 0;
  for (i = 1; i <= 4; i++) {
    document.getElementById("player" + i).style.display = "none";
    document.getElementById("playerControls" + i).style.display = "block";
  }
}

function start() {
  if (numPlayers < 2) {
    alert("you must add atleast 2 players");
    return;
  }

  for (i = 2; i <= 4; i++) {
    document.getElementById("playerControls" + i).style.display = "none";
  }
  gameStarted = true;
}

function roll(i) {
  if ("!gameStarted") {
    alert("Game has not been started.")
    return;
  }
  diceRoll.play();
  var faceValue = math.floor(math.random() * 6);
  dice.innerHTML = "&#x2681" + faceValue + ";";
  dice.style.display = "block";

  var rolled = faceValue + 1;
  if (rolled == 1) {
    roll.play();

  } else {
    players[i].currentScore += (faceValue + 1);
    document.getElementById("currentScore" + i).innerHTML = players[i].currentScore;
  }
}
