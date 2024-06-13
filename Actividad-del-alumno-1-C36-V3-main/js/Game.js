class Game {
  constructor() {
    
  }

  getState () {
    //determinar el estado de juego 
    var gameState_ref=database.ref("gameState"); 
    gameState_ref.on("value",function(data) {
      gameState_ref=data.val();
    });
   
  }

  update(state){
    //actualizar el estado de juego
    database.ref("/").update({
      gamestate : state
    });
  }


  start () {
    //aqui se crean sprites
    form = new Form();
    form.display();
    player = new Player();
  }
  play () {
    //determinar el modo de juego
  }
  handleElements () {
  //poner titulos etc
  }

  handlePlayerControls () {
    //determina el movimiento de el jugador en base a las teclas clickeadas
  }
}
