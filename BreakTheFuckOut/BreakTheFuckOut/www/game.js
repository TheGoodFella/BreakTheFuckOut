var ball;
var pad;

function init() {
    console.log("game.js loaded");
    stage = new PIXI.Stage(0x66FF99);
    renderer = PIXI.autoDetectRenderer(
      919,
      768,
      { view: document.getElementById("game-canvas") }
      ,true  //antialiasing set to true
    );

    /*  JSON Test
    var bricks = '{ "1" : [' +
'{ "x":"0" , "y":"400" color: "indigo" },' +
'{ "x":"45" , "y":"400" color: "indigo" },' +
'{ "x":"90" , "y":"400" color: "indigo" } ]}';*/


    //I create some brick...
    //var obj = JSON.parse(bricks);

    var deltaX = 46;
    var deltaY = 24;
        for (var y = 0; y < 7; y++) {
            for (var x = 0; x < 20; x++) {
                var color;
                switch (y) {
                    case 0:
                        color = "../images/violet.png";
                        break;
                    case 1:
                        color = "../images/indigo.png";
                        break;
                    case 2:
                        color = "../images/blue.png";
                        break;
                    case 3:
                        color = "../images/green.png";
                        break;
                    case 4:
                        color = "../images/yellow.png";
                        break;
                    case 5:
                        color = "../images/orange.png";
                        break;
                    case 6:
                        color = "../images/red.png";
                        break;
                }
            var wbTexture = PIXI.Texture.fromImage(color);
            wb = new PIXI.Sprite(wbTexture);
            wb.position.x = x * deltaX;
            console.log(y * deltaY);
            wb.position.y =  y * deltaY + 100;
            stage.addChild(wb);
        }
    }

    ball = new PIXI.Graphics();
    ball.lineStyle(2, 0xFF9933, 1);
    ball.beginFill(0xFF9933);
    ball.drawCircle(100, 700, 28);  //x , y , radius
    stage.addChild(ball);

    var padTexture = PIXI.Texture.fromImage("../images/pad.png");
    pad = new PIXI.Sprite(padTexture);
    pad.position.x = 450;
    pad.position.y = 745;
    stage.addChild(pad);

    requestAnimationFrame(update);
}

function update() {

    

    ball.position.x +=0.8;
    ball.position.y -= 0.8;

    renderer.render(stage);

    requestAnimationFrame(update);
}

function refr() {
    renderer.render(stage);
}