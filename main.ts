scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    info.changeLifeBy(-1)
})
info.setLife(20)
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 . . . . . . . . . . 
    . . . . 2 2 2 . . . . . . . . . 
    . . . . . 2 . . . . . . . . . . 
    . . . . . 2 . . . . . . . . . . 
    . . . . 2 2 2 . . . . . . . . . 
    . . . . 2 . 2 . . . . . . . . . 
    . . . . 2 . 2 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
