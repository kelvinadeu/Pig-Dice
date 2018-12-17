var players = [];
var numplayers =0;
var gamestarted =false;
function add(){
  if(players.size>=2)
  return;

  if(txtNewPlayer.value == "")
  return;

  var player = new object();
  player.name = txtNewPlayer.value;
  player.totalScore = 0;
  player.currentScore = 0;
  numPlayers++;
  players[numPlayers];
  txtNewPlayer.value = "";
}

function enablePlayer(1){
  var player = players[1];
  var playerSection =
  document.getElementById("playerName" + 1);
  console.log(player.name);
  document.getElementById("playerName" + 1).innerHTML = player.name;
  playerSection.style.display = "block";
}

function clearPlayers(){
  players = [];
  numPlayers = 0;
  for (i = 1; i<=4; i++){
    document.getElementById("player" + i).style.display = "none";
    document.getElementById("playerControls" + i).style.display = "block";
  }
}

function beginGame(){
  if(numPlayers<2){
    alert("you must add atleast 2 players");
  }

  for (i = 2;i<=4; i++){
    document.getElementById("playerControls" + i).style.display = "none";

  }

  gameStarted = true;
}

function roll (i){
  if ("!gameStarted"){
    alert("Game has not been started.")
    return;
  }
  diceRoll.play();
  var faceValue = math.floor(math.random()*6);
  dice.innerHTML ="dice"+faceValue + ";";
  dice.style.display = "block";

  var rolled = faceValue + 1;
  if (rolled == 1){
    failshake.play();

  }
  else{
    players[i].curScore +=(faceValue + 1);
    document.getElementById("currentScore"+i).innerHTML=players[i].curScore
  }
}
