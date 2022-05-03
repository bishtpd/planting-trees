controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setImage(img`
        . . . . f f f f f f f . . . . . 
        . . . f f 7 7 7 7 7 f f f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 f . . . . . 
        . . . . f f f e f f . . . . . . 
        . . . . . . f e f . . . . . . . 
        . . . . . . f e f . . . . . . . 
        . . . . . . f e f . . . . . . . 
        . . . . . . f e f . . . . . . . 
        . . . . . . f e f . . . . . . . 
        . . . . . f e e e f f . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
let mySprite: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f 3 3 3 3 f . . . . . 
    . . . . f 3 3 f 3 f 3 f . . . . 
    . . . . . f 3 3 3 3 3 f . . . . 
    . . . . . f 3 f 3 f 3 f . . . . 
    . . . . . f 3 3 f 3 3 f . . . . 
    . . . . . . f 3 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . f 3 3 3 f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let mysprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . f e f . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite2.setPosition(randint(0, 100), randint(0, 100))
mySprite3.setPosition(randint(0, 100), randint(0, 100))
mysprite4.setPosition(randint(0, 100), randint(0, 100))
mySprite5.setPosition(randint(0, 100), randint(0, 100))
mySprite6.setPosition(randint(0, 100), randint(0, 100))
scene.cameraFollowSprite(mySprite)
