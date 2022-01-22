namespace SpriteKind {
    export const glowa = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    diry = -1
    dirx = 0
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.allOfKind(SpriteKind.Enemy).length > 0) {
        sprites.allOfKind(SpriteKind.Enemy)._pickRandom().destroy()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    diry = 0
    dirx = -1
})
function dogenerujjedzonko () {
    if (Math.percentChance(50)) {
        zarelko = sprites.create(img`
            . . . . 7 7 . . 
            . . . 7 . . . . 
            . . 2 2 2 . . . 
            . 2 2 2 2 2 . . 
            . 2 2 2 2 2 . . 
            . 2 2 2 2 2 . . 
            . . 2 2 2 . . . 
            . . . . . . . . 
            `, SpriteKind.Food)
        zarelko.setPosition(randint(8, maxX - 8), randint(8, maxY - 8))
        zarelko.z = 1
    } else if (Math.percentChance(50)) {
        zarelko = sprites.create(img`
            . . . . 7 7 . . 
            . . . 7 . . . . 
            . . 5 5 5 . . . 
            . . 5 5 5 . . . 
            . . 5 5 5 . . . 
            . . 5 5 5 . . . 
            . . 5 5 5 . . . 
            . . . . . . . . 
            `, SpriteKind.Food)
        zarelko.setPosition(randint(8, maxX - 8), randint(8, maxY - 8))
        zarelko.z = 3
    } else {
        zarelko = sprites.create(img`
            . . . . 7 7 . . 
            . . . 7 . . . . 
            . . a a a . . . 
            . . a a a . . . 
            . . a a a . . . 
            . . a a a . . . 
            . . a a a . . . 
            . . . . . . . . 
            `, SpriteKind.Food)
        zarelko.setPosition(randint(8, maxX - 8), randint(8, maxY - 8))
        zarelko.z = 2
    }
}
sprites.onOverlap(SpriteKind.glowa, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.glowa, SpriteKind.Player, function (sprite, otherSprite) {
    if (ruszamsie == 0) {
        game.over(false)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    diry = 0
    dirx = 1
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    dogenerujprzszkadzajke()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    diry = 1
    dirx = 0
})
sprites.onOverlap(SpriteKind.glowa, SpriteKind.Food, function (sprite, otherSprite) {
    music.pewPew.play()
    if (otherSprite.z == 1) {
        rosnij = 1
    } else if (otherSprite.z == 2) {
        rosnij = -1
    } else if (otherSprite.z == 3) {
        if (sprites.allOfKind(SpriteKind.Enemy).length > 0) {
            sprites.allOfKind(SpriteKind.Enemy)._pickRandom().destroy()
        }
    } else {
    	
    }
    otherSprite.destroy(effects.spray, 500)
    dogenerujjedzonko()
    info.changeScoreBy(1)
})
function dogenerujprzszkadzajke () {
    if (Math.percentChance(50)) {
        glaz_spr = sprites.create(img`
            . . . . . . . . 
            . d d d d d d . 
            . d e f c e d . 
            . d c e e c d . 
            . d f e c f d . 
            . d e f e c d . 
            . d d d d d d . 
            . . . . . . . . 
            `, SpriteKind.Enemy)
        glaz_spr.setPosition(randint(8, maxX - 8), randint(8, maxY - 8))
        glaz_spr.vx = randint(5, 20)
        glaz_spr.vy = randint(5, 20)
        glaz_spr.setBounceOnWall(true)
        glaz_spr.setStayInScreen(true)
    } else {
        kamyk_spr = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . e f e e . . 
            . . e e e e . . 
            . . f e e f . . 
            . . e f e e . . 
            . . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Enemy)
        kamyk_spr.setPosition(randint(8, maxX - 8), randint(8, maxY - 8))
        kamyk_spr.lifespan = 30000
    }
}
let staryY = 0
let staryX = 0
let kamyk_spr: Sprite = null
let glaz_spr: Sprite = null
let zarelko: Sprite = null
let tablica_cialo: Sprite[] = []
let cialo_spr: Sprite = null
let diry = 0
let dirx = 0
let maxY = 0
let maxX = 0
let rosnij = 0
let ruszamsie = 0
let przeszkadzajka = randint(20, 100)
ruszamsie = 1
rosnij = 0
maxX = 160
maxY = 124
dirx = 1
diry = 0
let glowa = image.create(8, 8)
glowa.fill(7)
let glowa_spr = sprites.create(glowa, SpriteKind.glowa)
glowa_spr.setStayInScreen(true)
let cialko = image.create(8, 8)
cialko.fill(6)
for (let index = 0; index <= 4; index++) {
    cialo_spr = sprites.create(cialko, SpriteKind.Player)
    cialo_spr.setPosition(glowa_spr.x, glowa_spr.y + (index + 1) * 8)
    tablica_cialo.push(cialo_spr)
}
dogenerujjedzonko()
game.onUpdateInterval(500, function () {
    ruszamsie = 1
    staryX = glowa_spr.x
    staryY = glowa_spr.y
    if (rosnij == 0) {
        tablica_cialo.insertAt(0, tablica_cialo.pop())
    } else if (rosnij == -1) {
        tablica_cialo.insertAt(0, tablica_cialo.pop())
        if (tablica_cialo.length > 3) {
            cialo_spr = tablica_cialo.pop()
            cialo_spr.destroy()
        }
        rosnij = 0
    } else {
        cialo_spr = sprites.create(cialko, SpriteKind.Player)
        tablica_cialo.insertAt(0, cialo_spr)
        rosnij = 0
    }
    glowa_spr.x = staryX + dirx * 8
    glowa_spr.y = staryY + diry * 8
    if (glowa_spr.x >= maxX) {
        glowa_spr.x = 0
    } else if (glowa_spr.x <= 0) {
        glowa_spr.x = maxX
    } else if (glowa_spr.y <= 0) {
        glowa_spr.y = maxY
    } else if (glowa_spr.y >= maxY) {
        glowa_spr.y = 0
    } else {
    	
    }
    tablica_cialo[0].setPosition(staryX, staryY)
    ruszamsie = 0
    przeszkadzajka += -1
    if (przeszkadzajka <= 0) {
        przeszkadzajka = randint(20, 100)
        dogenerujprzszkadzajke()
    }
})
