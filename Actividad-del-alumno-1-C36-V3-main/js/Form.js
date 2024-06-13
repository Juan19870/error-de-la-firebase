class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "Titulo del juego");
    this.greeting = createElement("h2");                                                                                                                                                                                                                                                                                                                                                                       
  }

  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 50);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  
  mouseClicked() {
  //nombre(()=>{listas});
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var message = `Hi!, ${this.input.value()}
      </br> waiting untill other player joins...`;
      this.greeting.html(message);
    });
    
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.mouseClicked();
  }
}
