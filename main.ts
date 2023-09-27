scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.setGameOverMessage(true, "you wın")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let ferrari: Sprite = null
let murtazi: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let murtaza = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 6 6 f f f . . . . 
    . . . f f f 6 6 6 6 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
    . d f e 2 f f f f f f 2 e f d . 
    . d f f f f e e e e f f f f d . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f f . 
    . . e f e 4 d d d d 4 e f f d f 
    . . e 4 d d e 2 2 2 2 f e f b f 
    . . . e d d e 2 2 2 2 f 4 f b f 
    . . . . e e f 5 5 4 4 f . f c f 
    . . . . . f 5 f f f f f . f f . 
    . . . . . . . . . f f f . . . . 
    `, SpriteKind.Player)
murtaza.setPosition(80, 20)
controller.moveSprite(murtaza)
scene.cameraFollowSprite(murtaza)
game.onUpdateInterval(2000, function () {
    murtazi = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    murtazi.setVelocity(50, 0)
    tiles.placeOnRandomTile(murtazi, sprites.castle.tileDarkGrass3)
    murtazi.x = 16
    murtazi.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(500, function () {
    ferrari = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 c c c c 6 6 . . . . 
        . . . c c c c c c c c c c . . . 
        . . c c 6 6 6 6 6 6 6 c c 6 . . 
        . 6 c c 6 6 6 6 6 6 6 c c 9 6 d 
        . 6 c c 8 8 8 8 8 8 8 b c 9 6 6 
        . 6 6 8 9 9 8 9 9 9 8 8 b 9 6 6 
        . 6 8 9 9 9 8 9 9 9 9 8 6 6 6 6 
        . 8 8 9 9 9 8 9 9 9 9 9 8 6 6 6 
        . 8 8 8 8 8 8 8 8 8 8 8 8 6 d d 
        . 8 8 f f 8 8 8 f f 8 8 8 8 d d 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 f f f f 8 8 8 8 f f f f 8 8 
        . . f f f f 8 8 8 8 f f f f 8 . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    ferrari.setVelocity(-50, 0)
    tiles.placeOnRandomTile(ferrari, sprites.vehicle.roadHorizontal)
    ferrari.x = 200
    ferrari.setFlag(SpriteFlag.DestroyOnWall, true)
})
