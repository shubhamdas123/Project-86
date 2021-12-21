var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
        blockImg = Img;

        blockImg.scaleToWidth(canvas.width);
        blockImg.scaleToHeight(canvas.height);
        blockImg.set({
            top: 0,
            left: 0
        })
        canvas.add(blockImg)
    });
}

function playSound() {
    x.play();
}