var splash
var gameState = "wait"
var playbutton, soundonbutton, soundoffbutton;
var backgroundImg, player, zombie, bgSound;

function preload() {
    splash = loadImage("Ghoul Grapple.gif")
    backgroundImg = loadImage("background.jpg")
    player = loadImage("character.png")
    zombie = loadImage("zombie.png")
    bgSound = loadSound("zombieSound.mp3")
    level1bg=loadImage("background.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("startbutton.png")
    playbutton.position(width / 2 - 100, height / 2 + height / 8)
    playbutton.size(155, 140);

    soundonbutton = createImg("soundOn.png")
    soundonbutton.position(playbutton.x+200, playbutton.y - 25)
    soundonbutton.size(150, 175)
    soundonbutton.mouseClicked(mute)


    soundoffbutton = createImg("soundOff.png")
    soundoffbutton.position(playbutton.x + 200, playbutton.y - 25)
    soundoffbutton.size(150, 175)
    soundoffbutton.hide()
    soundoffbutton.mouseClicked(mute)
    bgSound.loop()



    ground=createSprite(width/2,height/2,width,height)
    ground.addImage(level1bg)
    ground.visible=false

}

function draw() {
    // background("white")
    if (gameState === "wait") {
        if (!bgSound.isPlaying) {
            bgSound.play()
        }
        background(splash)
    }

    playbutton.mousePressed(() => {
        gameState = "level1"
        playbutton.hide()
    })

    if (gameState == "level1") {
        background(level1bg)
        playbutton.hide()
        soundoffbutton.hide()
        soundonbutton.hide()
        ground.visible=true

    }



}

function mute() {
    if (bgSound.isPlaying) {
        bgSound.stop();
        soundoffbutton.show();
        soundonbutton.hide();
        console.log("mute")
    }
    else {
        soundonbutton.show()
        soundoffbutton.hide();
        bgSound.play();
        console.log("unmute")
    }
}

//HW: 