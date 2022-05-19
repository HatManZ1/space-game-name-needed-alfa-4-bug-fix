namespace SpriteKind {
    export const enemyshoot = SpriteKind.create()
    export const playerprojectile = SpriteKind.create()
    export const projectileblue = SpriteKind.create()
    export const enemyclone1 = SpriteKind.create()
    export const turetweak = SpriteKind.create()
    export const TURTEMISLE = SpriteKind.create()
    export const enemyambush = SpriteKind.create()
    export const misleship = SpriteKind.create()
    export const shipmisle = SpriteKind.create()
    export const fastattack = SpriteKind.create()
    export const wall = SpriteKind.create()
    export const base = SpriteKind.create()
    export const bomb = SpriteKind.create()
    export const defuser = SpriteKind.create()
    export const circle = SpriteKind.create()
    export const onoff = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 0, 30)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyambush, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 500)
    game.over(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bostcooldown == 1) {
        if (mySprite.vx > 0) {
            bostcooldown = 0
            mySprite.vx += 20
            animation.runImageAnimation(
            mySprite,
            assets.animation`flying ship`,
            250,
            false
            )
            pause(1000)
            mySprite.vx += -20
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . a a 9 9 9 . . . . . . 
                . . . 4 4 5 b c c b b . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . a a 9 9 9 . . . . . . 
                . . 4 4 4 5 b c c b b . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . a a 9 9 9 . . . . . . 
                . . 4 . 4 5 b c c b b . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . a a 9 9 9 . . . . . . 
                . 4 . 4 4 5 b c c b b . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            500,
            true
            )
            pause(2000)
            bostcooldown = 1
        } else if (mySprite.vx < 0) {
            bostcooldown = 0
            mySprite.vx += -20
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 9 9 9 a a 8 . . . . 
                . . . . . b b c c b 8 9 9 . . . 
                . . . . . . . . . . . 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 9 9 9 a a 8 . . . . 
                . . . . . b b c c b 8 9 9 9 . . 
                . . . . . . . . . . . 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 9 9 9 a a 8 8 . . . 
                . . . . . b b c c b 8 9 9 9 9 . 
                . . . . . . . . . . . 8 8 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 9 9 9 a a 8 . . . . 
                . . . . . b b c c b 8 9 9 . 9 . 
                . . . . . . . . . . . 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            125,
            false
            )
            pause(1000)
            mySprite.vx += 20
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . a a 9 9 9 . . . . . . 
                . . . 4 4 5 b c c b b . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . a a 9 9 9 . . . . . . 
                . . 4 4 4 5 b c c b b . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . a a 9 9 9 . . . . . . 
                . . 4 . 4 5 b c c b b . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . a a 9 9 9 . . . . . . 
                . 4 . 4 4 5 b c c b b . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            500,
            true
            )
            pause(2000)
            bostcooldown = 1
        }
    }
})
sprites.onOverlap(SpriteKind.bomb, SpriteKind.base, function (sprite, otherSprite) {
    bomb2.setVelocity(0, 0)
    info.startCountdown(30)
    pause(40000)
    empnumber = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.playerprojectile)
    mySprite2.setPosition(mySprite.x, mySprite.y)
    mySprite2.setFlag(SpriteFlag.DestroyOnWall, true)
    mySprite2.setVelocity(90, 0)
    music.zapped.play()
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.playerprojectile)
})
sprites.onOverlap(SpriteKind.playerprojectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    myEnemy.follow(mySprite, 0)
    myEnemy.startEffect(effects.fire, 2500)
    pause(3000)
    myEnemy.setPosition(9, 51)
    myEnemy.follow(mySprite, 32)
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (mySprite.vx < 35) {
        mySprite.vx += 5
    } else {
        mySprite.vx += 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyshoot, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 500)
    game.over(false)
})
sprites.onOverlap(SpriteKind.playerprojectile, SpriteKind.enemyshoot, function (sprite, otherSprite) {
    myenemy2shoot.follow(mySprite, 0)
    myenemy2shoot.startEffect(effects.fire, 2500)
    pause(3000)
    myenemy2shoot.setPosition(9, 51)
    myenemy2shoot.follow(mySprite, 23)
})
info.onCountdownEnd(function () {
    if (bomb2.overlapsWith(turetbase1)) {
        turetbase1.destroy(effects.fire, 500)
        game.splash("Base destroyed you win!")
        pause(500)
        game.over(true)
    } else {
        game.showLongText("EMP destroyed by enemies", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.playerprojectile, SpriteKind.enemyambush, function (sprite, otherSprite) {
    ambushship.follow(mySprite, 0)
    ambushship.startEffect(effects.fire, 2500)
    pause(3000)
    tiles.placeOnTile(ambushship, tiles.getTileLocation(42, 10))
    ambushship.follow(mySprite, 40)
})
sprites.onOverlap(SpriteKind.playerprojectile, SpriteKind.turetweak, function (sprite, otherSprite) {
    turetweakpoint.startEffect(effects.spray)
    sprites.destroyAllSpritesOfKind(SpriteKind.TURTEMISLE)
    on_or_off = 0
    pause(10000)
    effects.clearParticles(turetweakpoint)
    on_or_off = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.misleship, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 500)
    game.over(false)
})
sprites.onOverlap(SpriteKind.playerprojectile, SpriteKind.misleship, function (sprite, otherSprite) {
    mislelaunchership.follow(mySprite, 0)
    mislelaunchership.startEffect(effects.fire, 2500)
    sprites.destroyAllSpritesOfKind(SpriteKind.shipmisle)
    pause(5000)
    tiles.placeOnTile(mislelaunchership, tiles.getTileLocation(9, 10))
    mislelaunchership.follow(mySprite, 20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 500)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.shipmisle, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 500)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TURTEMISLE, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 500)
    game.over(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 0, 30)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyclone1, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 500)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.base, function (sprite, otherSprite) {
    if (bomb2.overlapsWith(turetbase1) || empnumber == 1) {
    	
    } else {
        bomb2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c . . . . 
            . . . . b b a b a b a b b . . . 
            . . . . . c c c c c c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.bomb)
        bomb2.setPosition(turetbase1.x, turetbase1.y)
    }
    pause(2000)
})
sprites.onOverlap(SpriteKind.playerprojectile, SpriteKind.enemyclone1, function (sprite, otherSprite) {
    myenemyclone1.follow(mySprite, 0)
    myenemyclone1.startEffect(effects.fire, 2500)
    pause(3000)
    myenemyclone1.setPosition(9, 51)
    myenemyclone1.follow(mySprite, 32)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    if (bomb2.overlapsWith(turetbase1)) {
        bomb2.destroy()
        bomb2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c . . . . 
            . . . . b b a b a b a b b . . . 
            . . . . . c c c c c c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.bomb)
        bomb2.setPosition(153, 0)
        game.showLongText("EMP destroyed", DialogLayout.Bottom)
        empnumber = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 500)
    game.over(false)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (mySprite.vx >= -28) {
        mySprite.vx += -4
    } else {
        mySprite.vx += 0
    }
})
let projectile: Sprite = null
let enemy_projectile: Sprite = null
let shipmisle2: Sprite = null
let misle: Sprite = null
let mySprite2: Sprite = null
let empnumber = 0
let mislelaunchership: Sprite = null
let ambushship: Sprite = null
let turetweakpoint: Sprite = null
let myenemyclone1: Sprite = null
let on_or_off = 0
let myenemy2shoot: Sprite = null
let myEnemy: Sprite = null
let turetbase1: Sprite = null
let bomb2: Sprite = null
let bostcooldown = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`ship`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 10))
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . a a 9 9 9 . . . . . . 
    . . . 4 4 5 b c c b b . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . a a 9 9 9 . . . . . . 
    . . 4 4 4 5 b c c b b . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . a a 9 9 9 . . . . . . 
    . . 4 . 4 5 b c c b b . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . a a 9 9 9 . . . . . . 
    . 4 . 4 4 5 b c c b b . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
info.setScore(0)
bostcooldown = 1
bomb2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . b b a b a b a b b . . . 
    . . . . . c c c c c c c . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.bomb)
bomb2.setPosition(153, 0)
turetbase1 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ........8..6....
    .........86.....
    ........678.....
    ......7766.8....
    .....66666......
    ...6777777766...
    ..679999767776..
    ..679999677776..
    .67777767777777.
    .77777777777777.
    6666666666666666
    1dddddddddddbddd
    ddbddddd111ddddd
    `, SpriteKind.base)
tiles.placeOnTile(turetbase1, tiles.getTileLocation(21, 9))
mySprite.setVelocity(10, 0)
myEnemy = sprites.create(assets.image`ez enemy`, SpriteKind.Enemy)
myEnemy.follow(mySprite, 32)
tiles.placeOnTile(myEnemy, tiles.getTileLocation(3, 9))
myenemy2shoot = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 6 9 9 . . . . . . . 
    . . . . 7 7 6 9 9 9 . . . . . . 
    . . . . . 7 7 6 9 9 9 . . . . . 
    . . . . 6 6 7 7 6 6 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.enemyshoot)
tiles.placeOnTile(myenemy2shoot, tiles.getTileLocation(2, 10))
myenemy2shoot.follow(mySprite, 23)
on_or_off = 1
pause(2000)
myenemyclone1 = sprites.create(assets.image`ez enemy`, SpriteKind.enemyclone1)
myenemyclone1.follow(mySprite, 32)
tiles.placeOnTile(myenemyclone1, tiles.getTileLocation(42, 10))
turetweakpoint = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 7 
    . . . . . . . . . . . . . . 5 7 
    . . . . . . . . . . . . . 5 5 7 
    . . . . . . . . . . . . 5 5 4 7 
    . . . . . . . . . . . 5 5 4 2 7 
    . . . . . . . . . . 5 5 4 2 7 7 
    . . . . . . . . . 7 7 7 7 7 7 7 
    `, SpriteKind.turetweak)
tiles.placeOnTile(turetweakpoint, tiles.getTileLocation(19, 9))
ambushship = sprites.create(assets.image`ambush`, SpriteKind.enemyambush)
tiles.placeOnTile(ambushship, tiles.getTileLocation(47, 10))
ambushship.follow(mySprite, 40)
pause(4000)
mislelaunchership = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . 8 7 6 . 2 . . . . . . . . 
    . . . 8 6 7 6 7 7 . . . . . . . 
    . . . 7 7 6 7 9 9 . . . . . . . 
    . . . . 8 8 7 7 8 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.misleship)
tiles.placeOnTile(mislelaunchership, tiles.getTileLocation(17, 12))
mislelaunchership.follow(mySprite, 20)
forever(function () {
    pause(4000)
    if (on_or_off == 1) {
        misle = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 . 6 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 6 . 6 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.TURTEMISLE)
        tiles.placeOnTile(misle, tiles.getTileLocation(20, 9))
        misle.follow(mySprite, 25)
    } else {
    	
    }
})
forever(function () {
    pause(5000)
    shipmisle2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 2 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.shipmisle)
    shipmisle2.setPosition(mislelaunchership.x, mislelaunchership.y)
    shipmisle2.follow(mySprite, 25)
})
forever(function () {
    enemy_projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, myenemy2shoot, 60, 0)
    pause(1000)
})
forever(function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ambushship, -80, 0)
    pause(200)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ambushship, -80, 0)
    pause(2000)
})
