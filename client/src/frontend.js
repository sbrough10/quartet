import createjs from 'createjs';

// variables//
const speed = 10;
let stage;
let ctx;
let canvas;

let play;
let pause;
let line;
let stop;
let cSize;
// Classes//
class Color {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    setAlpha(newAlpha) {
        return new Color(this.r, this.g, this.b, newAlpha);
    }

    toString() {
        return `rgba(${this.r},${this.g},${this.b},${this.a})`;
    }
}
class PauseButton {
    constructor() {
        this.x = 150 * (cSize / 650);
        this.y = cSize - (70 * (cSize / 650));
        this.length = 51 * (cSize / 650);
        this.width = 17 * (cSize / 650);
        this.color = new Color(247, 239, 0, 0.5);

        this.alphaStroke = 0.5;
        this.alphaFill = 0.1; // aplha fill
        this.cSize = cSize;
        this.clicked = false;

        this.shape = new createjs.Shape();
        this.shape.x = 0;
        this.shape.y = 0;
        stage.addChild(this.shape);
        this.shape.on('click', this.onClick.bind(this));
        this.shape.on('mouseover', this.mouseOver.bind(this));
        this.shape.on('mouseout', this.mouseOut.bind(this));
    }
    draw() {
        this.shape.graphics.clear()
            .beginFill(this.color.setAlpha(this.alphaFill).toString())
            .setStrokeStyle(3 * (this.cSize / 650), 'round', 'round')
            .beginStroke(this.color.setAlpha(this.alphaStroke).toString())
            .drawRect(this.x + (this.width * 2), this.y, this.width, this.length)
            .drawRect(this.x + (this.width * 4), this.y, this.width, this.length)
            .endFill()
            .endStroke();
    }
    drawAndUpdate() {
        this.draw();
        stage.update();
    }
    unclick() {
        if (this.clicked) {
            this.alphaFill = 0.1;
        }
        this.clicked = false;
        this.drawAndUpdate();
    }
    onClick() {
        if (!this.clicked) {
            this.alphaFill = 0.5;
        } else {
            this.alphaFill = 0.1;
        }
        play.unclick();
        stop.unclick();
        this.clicked = !this.clicked;
        this.drawAndUpdate();
        line.drawAndUpdate();
    }
    mouseOver() {
        this.alphaStroke = 1;
        this.drawAndUpdate();
    }
    mouseOut() {
        this.alphaStroke = 0.5;
        this.drawAndUpdate();
    }
}
class StopButton {
    constructor() {
        this.x = 20 * (cSize / 650);
        this.y = cSize - (70 * (cSize / 650));
        this.side = 51 * (cSize / 650);
        this.color = new Color(247, 0, 0, 0.5);

        this.alphaStroke = 0.5;
        this.alphaFill = 0.1;
        this.cSize = cSize;
        this.clicked = false;

        this.shape = new createjs.Shape();
        this.shape.x = 0;
        this.shape.y = 0;
        stage.addChild(this.shape);
        this.shape.on('click', this.onClick.bind(this));
        this.shape.on('mouseover', this.mouseOver.bind(this));
        this.shape.on('mouseout', this.mouseOut.bind(this));
    }
    draw() {
        this.shape.graphics.clear()
            .beginFill(this.color.setAlpha(this.alphaFill).toString())
            .setStrokeStyle(3 * (this.cSize / 650), 'round', 'round')
            .beginStroke(this.color.setAlpha(this.alphaStroke).toString())
            .drawRect(this.x, this.y, this.side, this.side)
            .endFill()
            .endStroke();
    }
    drawAndUpdate() {
        this.draw();
        stage.update();
    }
    unclick() {
        if (this.clicked) {
            this.alphaFill = 0.1;
        }
        this.clicked = false;
        this.drawAndUpdate();
    }
    onClick() {
        if (!this.clicked) {
            this.alphaFill = 0.5;
        } else {
            this.alphaFill = 0.1;
        }
        play.unclick();
        pause.unclick();
        this.clicked = !this.clicked;
        this.drawAndUpdate();
        line.drawAndUpdate();
    }
    mouseOver() {
        this.alphaStroke = 1;
        this.drawAndUpdate();
    }
    mouseOut() {
        this.alphaStroke = 0.5;
        this.drawAndUpdate();
    }
}
class PlayButton {
    constructor() {
        this.x = 100 * (cSize / 650);
        this.y = cSize - (70 * (cSize / 650));
        this.side = 51 * (cSize / 650);
        this.color = new Color(0, 237, 27, 0.5);

        this.alphaStroke = 0.5; // aplha
        this.alphaFill = 0.1; // aplha fill
        this.cSize = cSize;
        this.clicked = false;

        this.shape = new createjs.Shape();
        this.shape.x = 0;
        this.shape.y = 0;
        stage.addChild(this.shape);
        this.shape.on('click', this.onClick.bind(this));
        this.shape.on('mouseover', this.mouseOver.bind(this));
        this.shape.on('mouseout', this.mouseOut.bind(this));
    }
    draw() {
        this.shape.graphics.clear()
            .beginFill(this.color.setAlpha(this.alphaFill).toString())
            .setStrokeStyle(3 * (this.cSize / 650), 'round', 'round')
            .beginStroke(this.color.setAlpha(this.alphaStroke).toString())
            .moveTo(this.x, this.y)
            .lineTo(this.x, this.y + this.side)
            .lineTo(this.x + this.side, this.y + (this.side / 2))
            .lineTo(this.x, this.y)
            .endFill()
            .endStroke();
    }
    drawAndUpdate() {
        this.draw();
        stage.update();
    }
    unclick() {
        if (this.clicked) {
            this.alphaFill = 0.1;
        }
        this.clicked = false;
        this.drawAndUpdate();
    }
    onClick() {
        if (!this.clicked) {
            this.alphaFill = 0.5;
        } else {
            this.alphaFill = 0.1;
        }
        stop.unclick();
        pause.unclick();
        this.clicked = !this.clicked;
        this.drawAndUpdate();
        line.drawAndUpdate();
    }
    mouseOver() {
        this.alphaStroke = 1;
        this.drawAndUpdate();
    }
    mouseOut() {
        this.alphaStroke = 0.5;
        this.drawAndUpdate();
    }
}

class Circle {
    constructor(i, j) {
        this.radius = 30 * (cSize / 650); // radius
        this.x = (40 + (i * 70)) * (cSize / 650); // x cordinate
        this.y = (40 + (j * 70)) * (cSize / 650); // y cordinate
        this.color = new Color(
            0,
            Math.floor(255 - (5 * j)),
            Math.floor(255 - (25 * i)),
            0.5);

        this.alphaStroke = 0.5; // aplha
        this.alphaFill = 0.1; // aplha fill
        this.cSize = cSize;
        this.clicked = false;

        this.shape = new createjs.Shape();
        this.shape.x = this.x;
        this.shape.y = this.y;
        stage.addChild(this.shape);
        this.shape.on('click', this.onClick.bind(this));
        this.shape.on('mouseover', this.mouseOver.bind(this));
        this.shape.on('mouseout', this.mouseOut.bind(this));
    }

    draw() {
        this.shape.graphics.clear()
            .beginFill(this.color.setAlpha(this.alphaFill).toString())
            .setStrokeStyle(3 * (this.cSize / 650), 'round', 'round')
            .beginStroke(this.color.setAlpha(this.alphaStroke).toString())
            .drawCircle(0, 0, this.radius)
            .endFill()
            .endStroke();
    }
    drawAndUpdate() {
        this.draw();
        stage.update();
    }
    onClick() {
        if (!this.clicked) {
            this.alphaFill = 0.5;
        } else {
            this.alphaFill = 0.1;
        }
        this.clicked = !this.clicked;
        this.drawAndUpdate();
    }
    mouseOver() {
        this.alphaStroke = 1;
        this.drawAndUpdate();
    }
    mouseOut() {
        this.alphaStroke = 0.5;
        this.drawAndUpdate();
    }
}
class Line {
    constructor() {
        this.x = 0; // x cordinate
        this.y = 0; // y cordinate
        this.length = 560 * (cSize / 650);
        this.r = 255; // red
        this.b = 0; // blue
        this.g = 0; // green
        this.a = 0.5; // aplha fill
        this.cSize = cSize;
        this.moving = false;

        this.shape = new createjs.Shape();
        this.shape.x = this.x;
        this.shape.y = this.y;
        stage.addChild(this.shape);
    }

    draw() {
        if (stop.clicked) {
            this.r = 247;
            this.b = 0;
            this.g = 0;
            this.x = 0;
        }
        if (play.clicked) {
            this.r = 0;
            this.b = 27;
            this.g = 237;
        }
        if (pause.clicked) {
            this.r = 247;
            this.b = 0;
            this.g = 239;
        }
        this.shape.graphics.clear()
            .setStrokeStyle(15 * (this.cSize / 650), 'round', 'round')
            .beginStroke(`rgba(${
                this.r},${
                this.g},${
                this.b},${
                this.a})`)
            .moveTo(this.x, this.y)
            .lineTo(this.x, this.length)
            .endStroke();
    }
    drawAndUpdate() {
        this.draw();
        stage.update();
    }
}


// functions//
function draw() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(30);
    cSize = 0;
    if (ctx.canvas.width > ctx.canvas.height) {
        cSize = ctx.canvas.height;
    } else {
        cSize = ctx.canvas.width;
    }

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const curr = new Circle(i, j);
            curr.draw();
        }
    }
    play = new PlayButton();
    play.draw();
    stop = new StopButton();
    stop.draw();
    pause = new PauseButton();
    pause.draw();
    line = new Line();
    line.draw();
    createjs.Ticker.addEventListener('tick', tick);

    stage.update();
}
function initCanvas() {
    canvas = document.getElementById('tutorial');
    ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    draw();
}
window.initCanvas = initCanvas;
function reInitCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    draw();
}
window.reInitCanvas = reInitCanvas;
function tick(/* e */) {
    if (play.clicked) {
        if (line.x < (560 * (cSize / 650))) {
            line.x += speed * (cSize / 650);
            line.draw();
            stage.update();
        } else {
            line.x = 0;
        }
    }
}
