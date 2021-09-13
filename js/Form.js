class Form {

  constructor() {
    this.input=createInput("").attribute("placeholder","Enter Your Name")
    this.playButton=createButton("𝕊𝕌𝔹𝕄𝕀𝕋")
    this.greeting=createElement("h1")
  }
  hide(){
    this.greeting.hide()
    this.playButton.hide()
    this.input.hide()
  }

  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      var message = `
      ${this.input.value()}
      </br>`;
      this.greeting.html(message)
     
    })
  }

setElementPosition(){
this.input.position(width/2 -110,height/2 +70)
this.playButton.position(width/2 -60, height/2 + 100)
this.greeting.position(width/2 -400, height/2 +10)
}
display(){
  this.setElementPosition()
  this.handleMousePressed()
  
}
}
