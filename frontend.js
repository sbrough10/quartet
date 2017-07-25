//variables//

//Classes//
class PauseButton {

    constructor(cSize) {
      this.x = 150*(cSize/650);
      this.y = cSize - 70*(cSize/650);
      this.length = 51*(cSize/650);
      this.width = 17*(cSize/650);
      this.r = 247;
      this.b = 0;
      this.g = 239;
      this.a = 0.5; //aplha
      this.af = 0.1; //aplha fill
      this.cSize = cSize;
      this.clicked = false;

      this.shape = new createjs.Shape();
      this.shape.x = 0;
      this.shape.y = 0;
      stage.addChild(this.shape);
      this.shape.on("click", this.onClick.bind(this));
      this.shape.on("mouseover", this.mouseOver.bind(this));
      this.shape.on("mouseout", this.mouseOut.bind(this));
    }
    draw() {
        this.shape.graphics.clear()
        .beginFill('rgba('
            + this.r + ','
            + this.g + ','
            + this.b + ','
            + this.af + ')')
        .setStrokeStyle(3*(this.cSize/650), 'round', 'round')
        .beginStroke('rgba('
            + this.r + ','
            + this.g + ','
            + this.b + ','
            + this.a + ')')
        .drawRect(this.x + this.width*2, this.y, this.width, this.length)
        .drawRect(this.x + this.width*4, this.y, this.width, this.length)
        .endFill()
        .endStroke();


    }
    drawAndUpdate(){
        this.draw();
        stage.update();
    }
    unclick(){
      if (this.clicked == true) {
          this.af = 0.1;
      }
      this.clicked = false;
      this.drawAndUpdate();
    }
    onClick(e) {
        if (!this.clicked) {
            this.af = 0.5;
        } else {
            this.af = 0.1;
        }
        play.unclick();
        stop.unclick();
        this.clicked = !this.clicked;
        this.drawAndUpdate();
    }
    mouseOver(e) {
        this.a = 1;
        this.drawAndUpdate();
    }
    mouseOut(e) {
        this.a = 0.5;
        this.drawAndUpdate();
    }
}
class StopButton {

    constructor(cSize) {
      this.x = 20*(cSize/650);
      this.y = cSize - 70*(cSize/650);
      this.side = 51*(cSize/650);
      this.r = 247;
      this.b = 0;
      this.g = 0;
      this.a = 0.5; //aplha
      this.af = 0.1; //aplha fill
      this.cSize = cSize;
      this.clicked = false;

      this.shape = new createjs.Shape();
      this.shape.x = 0;
      this.shape.y = 0;
      stage.addChild(this.shape);
      this.shape.on("click", this.onClick.bind(this));
      this.shape.on("mouseover", this.mouseOver.bind(this));
      this.shape.on("mouseout", this.mouseOut.bind(this));
    }
    draw() {
        this.shape.graphics.clear()
        .beginFill('rgba('
            + this.r + ','
            + this.g + ','
            + this.b + ','
            + this.af + ')')
        .setStrokeStyle(3*(this.cSize/650), 'round', 'round')
        .beginStroke('rgba('
            + this.r + ','
            + this.g + ','
            + this.b + ','
            + this.a + ')')
        .drawRect(this.x, this.y, this.side, this.side)
        .endFill()
        .endStroke();


    }
    drawAndUpdate(){
        this.draw();
        stage.update();
    }
    unclick(){
      if (this.clicked == true) {
          this.af = 0.1;
      }
      this.clicked = false;
      this.drawAndUpdate();
    }
    onClick(e) {
        if (!this.clicked) {
            this.af = 0.5;
        } else {
            this.af = 0.1;
        }
        play.unclick();
        pause.unclick();
        this.clicked = !this.clicked;
        this.drawAndUpdate();
    }
    mouseOver(e) {
        this.a = 1;
        this.drawAndUpdate();
    }
    mouseOut(e) {
        this.a = 0.5;
        this.drawAndUpdate();
    }
}
class PlayButton {

    constructor(cSize) {
      this.x = 100*(cSize/650);
      this.y = cSize - 70*(cSize/650);
      this.side = 51*(cSize/650);
      this.r = 0;
      this.b = 27;
      this.g = 237;
      this.a = 0.5; //aplha
      this.af = 0.1; //aplha fill
      this.cSize = cSize;
      this.clicked = false;

      this.shape = new createjs.Shape();
      this.shape.x = 0;
      this.shape.y = 0;
      stage.addChild(this.shape);
      this.shape.on("click", this.onClick.bind(this));
      this.shape.on("mouseover", this.mouseOver.bind(this));
      this.shape.on("mouseout", this.mouseOut.bind(this));
    }
    draw() {
        this.shape.graphics.clear()
        .beginFill('rgba('
            + this.r + ','
            + this.g + ','
            + this.b + ','
            + this.af + ')')
        .setStrokeStyle(3*(this.cSize/650), 'round', 'round')
        .beginStroke('rgba('
            + this.r + ','
            + this.g + ','
            + this.b + ','
            + this.a + ')')
        .moveTo(this.x,this.y)
        .lineTo(this.x,this.y + this.side)
        .lineTo(this.x + this.side, this.y + (this.side/2))
        .lineTo(this.x,this.y)
        .endFill()
        .endStroke();


    }
    drawAndUpdate(){
        this.draw();
        stage.update();
    }
    unclick(){
      if (this.clicked == true) {
          this.af = 0.1;
      }
      this.clicked = false;
      this.drawAndUpdate();
    }
    onClick(e) {
        if (!this.clicked) {
            this.af = 0.5;
        } else {
            this.af = 0.1;
        }
        stop.unclick();
        pause.unclick();
        this.clicked = !this.clicked;
        this.drawAndUpdate();
    }
    mouseOver(e) {
        this.a = 1;
        this.drawAndUpdate();
    }
    mouseOut(e) {
        this.a = 0.5;
        this.drawAndUpdate();
    }
}

class Circle {

    constructor(i, j, cSize) {
        this.radius = 30*(cSize/650); //radius
        this.x = (40 + i * 70)*(cSize/650); //x cordinate
        this.y = (40 + j * 70)*(cSize/650); //y cordinate
        this.r = 0; //red
        this.b = Math.floor(255 - 25 * i); //blue
        this.g = Math.floor(255 - 5 * j); //green
        this.a = 0.5; //aplha
        this.af = 0.1; //aplha fill
        this.cSize = cSize;
        this.clicked = false;

        this.shape = new createjs.Shape();
        this.shape.x = this.x;
        this.shape.y = this.y;
        stage.addChild(this.shape);
        this.shape.on("click", this.onClick.bind(this));
        this.shape.on("mouseover", this.mouseOver.bind(this));
        this.shape.on("mouseout", this.mouseOut.bind(this));
    }

    draw() {
        this.shape.graphics.clear()
        .beginFill('rgba('
            + this.r + ','
            + this.g + ','
            + this.b + ','
            + this.af + ')')
        .setStrokeStyle(3*(this.cSize/650), 'round', 'round')
        .beginStroke('rgba('
            + this.r + ','
            + this.g + ','
            + this.b + ','
            + this.a + ')')
        .drawCircle(0, 0, this.radius)
        .endFill()
        .endStroke();
    }
    drawAndUpdate(){
        this.draw();
        stage.update();
    }
    onClick(e) {
        if (!this.clicked) {
            this.af = 0.5;
        } else {
            this.af = 0.1;
        }
        this.clicked = !this.clicked;
        this.drawAndUpdate();
    }
    mouseOver(e) {
        this.a = 1;
        this.drawAndUpdate();
    }
    mouseOut(e) {
        this.a = 0.5;
        this.drawAndUpdate();
    }
}

//functions//
function initCanvas() {
    canvas = document.getElementById('tutorial');
    ctx = canvas.getContext('2d');
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    draw();
}
function reInitCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    draw();
}

function draw() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(30);
    var list = new Array();
    var cSize = 0;
    if( ctx.canvas.width > ctx.canvas.height){
      cSize = ctx.canvas.height;
    }else{
      cSize = ctx.canvas.width;
    }

    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        var curr = new Circle(i, j, cSize);
        curr.draw();
        list.push(curr);
      }
    }
    play = new PlayButton(cSize);
    play.draw();
    stop = new StopButton(cSize);
    stop.draw();
    pause = new PauseButton(cSize);
    pause.draw();

    stage.update();
}
