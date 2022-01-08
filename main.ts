controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (diry == -1) {
        diry = 0
        dirx = 1
    } else if (diry == 1) {
        diry = 0
        dirx = -1
    } else if (dirx == 1) {
        diry = 1
        dirx = 0
    } else if (dirx == -1) {
        diry = -1
        dirx = 0
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (diry == -1) {
        diry = 0
        dirx = -1
    } else if (diry == 1) {
        diry = 0
        dirx = 1
    } else if (dirx == 1) {
        diry = -1
        dirx = 0
    } else if (dirx == -1) {
        diry = 1
        dirx = 0
    } else {
    	
    }
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (diry == -1) {
        diry = 0
        dirx = 1
    } else if (diry == 1) {
        diry = 0
        dirx = -1
    } else if (dirx == 1) {
        diry = 1
        dirx = 0
    } else if (dirx == -1) {
        diry = -1
        dirx = 0
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (diry == -1) {
        diry = 0
        dirx = -1
    } else if (diry == 1) {
        diry = 0
        dirx = 1
    } else if (dirx == 1) {
        diry = -1
        dirx = 0
    } else if (dirx == -1) {
        diry = 1
        dirx = 0
    } else {
    	
    }
})
let staryY = 0
let staryX = 0
let cialo_spr: Sprite = null
let diry = 0
let dirx = 0
let maxX = 160
let maxY = 124
dirx = 1
diry = 0
let glowa = image.create(8, 8)
glowa.fill(7)
let glowa_spr = sprites.create(glowa, SpriteKind.Player)
glowa_spr.setStayInScreen(true)
let cialko = image.create(8, 8)
cialko.fill(6)
let tablica_cialo: Sprite[] = []
for (let index = 0; index <= 4; index++) {
    cialo_spr = sprites.create(cialko, SpriteKind.Player)
    cialo_spr.setPosition(glowa_spr.x, glowa_spr.y + (index + 1) * 8)
    tablica_cialo.push(cialo_spr)
}
game.onUpdateInterval(500, function () {
    staryX = glowa_spr.x
    staryY = glowa_spr.y
    tablica_cialo.insertAt(0, tablica_cialo.pop())
    tablica_cialo[0].setPosition(glowa_spr.x, glowa_spr.y)
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
})
