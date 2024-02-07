namespace SpriteKind {
    export const Test = SpriteKind.create()
    export const Key = SpriteKind.create()
    export const Pferd = SpriteKind.create()
    export const Reiter = SpriteKind.create()
    export const Magic = SpriteKind.create()
    export const objekt = SpriteKind.create()
    export const Npc = SpriteKind.create()
    export const Spitzhacke = SpriteKind.create()
    export const Unsichtbar = SpriteKind.create()
    export const Schwert = SpriteKind.create()
    export const Schwert2 = SpriteKind.create()
    export const Schwert3 = SpriteKind.create()
}
namespace StatusBarKind {
    export const Quest = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    mySprite5.follow(mySprite, 40)
    mySprite6.follow(mySprite, 40)
    if (Nur_einmal_Für_Pfeile == 0) {
        Für_Pfeile = sprites.create(img`
            . . . . . 2 . . . . . 
            . . 2 2 2 2 2 2 2 . . 
            . 2 . . . 2 . . . 2 . 
            . 2 . . . 2 . . . 2 . 
            . 2 . . . 2 . . . 2 . 
            2 2 2 2 2 2 2 2 2 2 2 
            . 2 . . . 2 . . . 2 . 
            . 2 . . . 2 . . . 2 . 
            . 2 . . . 2 . . . 2 . 
            . . 2 2 2 2 2 2 2 . . 
            . . . . . 2 . . . . . 
            `, SpriteKind.Unsichtbar)
        Nur_einmal_Für_Pfeile = 1
    }
})
scene.onOverlapTile(SpriteKind.Spitzhacke, assets.tile`myTile50`, function (sprite, location) {
    if (Nur_einmal_Text == 0) {
        if (Held_hat_Spitzhacke == 1) {
            game.setDialogFrame(img`
                .....cccccccccccccc.....
                ...cbd111111111111dbc...
                ..cd1111111111111111dc..
                .cd111111111111111111dc.
                .b11111111111111111111b.
                cd11111111111111111111dc
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                cd11111111111111111111dc
                .b11111111111111111111b.
                .cd111111111111111111dc.
                ..cd1111111111111111dc..
                ...cbd111111111111d11b..
                .....ccccccccccccccb11b.
                ...................ccccc
                `)
            game.showLongText("Tut mir leid,aber das Spiel in dieser Version ist hier zu Ende.", DialogLayout.Center)
            game.showLongText("Ich hoffe ihr hattet Spaß.", DialogLayout.Center)
            Nur_einmal_Text += 1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile65`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(49, 128), assets.tile`myTile66`)
    info.changeScoreBy(6)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    if (mySprite11.tileKindAt(TileDirection.Center, assets.tile`myTile15`)) {
        mySprite8.follow(mySprite, 40)
        mySprite9.follow(mySprite, 40)
        mySprite10.follow(mySprite, 40)
        if (Nur_einmal_Für_Pfeile2 == 0) {
            Für_Pfeile = sprites.create(img`
                . . . . . 2 . . . . . 
                . . 2 2 2 2 2 2 2 . . 
                . 2 . . . 2 . . . 2 . 
                . 2 . . . 2 . . . 2 . 
                . 2 . . . 2 . . . 2 . 
                2 2 2 2 2 2 2 2 2 2 2 
                . 2 . . . 2 . . . 2 . 
                . 2 . . . 2 . . . 2 . 
                . 2 . . . 2 . . . 2 . 
                . . 2 2 2 2 2 2 2 . . 
                . . . . . 2 . . . . . 
                `, SpriteKind.Unsichtbar)
            Nur_einmal_Für_Pfeile2 = 1
        }
    } else {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(10, 1), assets.tile`myTile11`)) {
            tiles.placeOnTile(Key2, mySprite.tilemapLocation())
            Key2.follow(mySprite, 100)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Npc, function (sprite, otherSprite) {
    if (Mana.value == 4) {
        game.showLongText("Zauberer:Danke dafür erhälst du eine höheres HP maximum.", DialogLayout.Center)
        statusbar.max = 15
        statusbar.setBarSize(75, 4)
        Mana.max = 0
        Mana.value = 0
        Zauberer.setPosition(10, 4)
        game.splash("Quest erfÜhlt!")
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 . . 
            . . . . . 2 2 2 2 2 2 2 2 . 
            . . . c c c c c c c c 2 2 . 
            . . c b b b b b b b b c 2 . 
            . . c b b b b b b b b c 2 . 
            . . c b b b b b b b b c . . 
            . . c b 1 f b b f 1 b c . . 
            . . c b 1 f b b f 1 b c . . 
            . . c b 1 f b b f 1 b c . . 
            . . c b b b b b b b b c . . 
            . . . c c c c c c c c . . . 
            . f e c b b b b b b c e f . 
            . e 4 c b b b b b b c 4 e . 
            . e e c b b b b b b c e e . 
            . . . . c c c c c c . . . . 
            . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 . . 
            . . . . . 2 2 2 2 2 2 2 2 . 
            . . . c c c c c c c c 2 2 . 
            . . c b b b b b b b b c 2 . 
            . . c b b b b b b b b c 2 . 
            . . c b b b b b b b b c . . 
            . . c b 1 f b b f 1 b c . . 
            . . c b 1 f b b f 1 b c . . 
            . . c b 1 f b b f 1 b c . . 
            . f e b b b b b b b b e f . 
            . e 4 c c c c c c c c 4 e . 
            . e e c b b b b b b c e e . 
            . . . c b b b b b b c . . . 
            . . . . c c c c c c . . . . 
            . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . . . 8 . . . 7 . . . 5 . . 
            . . . . . . 2 2 2 2 2 2 . . 
            5 . . . . 2 2 2 2 2 2 2 2 . 
            . . . c c c c c c c c 2 2 . 
            . . 7 b b b 8 b b b b e f . 
            . . c b b b b b b b b 4 e . 
            . . c b 1 f b b f 1 7 e e . 
            . . c b 1 f b b f 1 b c . 7 
            . 8 c b 1 f 7 b f 1 b c . . 
            . . c b b b b b b b b c . . 
            . . c b b b b b b b b c . . 
            . . . c c c c c c c c . 5 . 
            . . . c b b b b b b c . . . 
            . f e c b b b b f f c . . . 
            . e 4 c b b b b f f c . . . 
            . e e f c c c c f f . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . . . 8 . . . 7 . . . 5 . . 
            . . . . . . 2 2 2 2 2 2 . . 
            5 . . . . 2 2 2 2 2 2 2 2 . 
            . . . c c c c c c c c 2 2 . 
            . . 7 b b b 8 b b b b e f . 
            . . c b b b b b b b b 4 e . 
            . . c b 1 f b b f 1 7 e e . 
            . . c b 1 f b b f 1 b c . 7 
            . 8 c b 1 f 7 b f 1 b c . . 
            . . c b b b b b b b b c . . 
            . . c b b b b b b b b c . . 
            . . . c c c c c c c c . 5 . 
            . . . c b b b b b b c . . . 
            . f e c b b b b f f c . . . 
            . e 4 c b b b b f f c . . . 
            . e e f c c c c f f . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            `],
        800,
        false
        )
        music.play(music.createSong(hex`00a0000408010401001c000f05001202c102c20100040500280000006400280003140006020004300000000400012704000800012408000c0001270c001000012410001400012714001800012a18001c00012c1c002000012c03001c0001dc00690000045e0100040000000000000000000005640001040003300000000400012404000800012008000c0001240c001000012010001400012414001800012718001c0001291c002000012905001c000f0a006400f4010a0000040000000000000000000000000000000002300000000400011d04000800011908000c00011d0c001000011910001400011d14001800012018001c0001221c002000012206001c00010a006400f401640000040000000000000000000000000000000002300000000400012004000800011d08000c0001200c001000011d10001400012014001800012418001c0001251c0020000125`), music.PlaybackMode.UntilDone)
        pause(1500)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c f f b b b b c . . 
            . . . . . . f f c c c c . . . 
            . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b f f c . . 
            . . . . . . c c c c f f . . . 
            . . . . . . . . . . f f . . . 
            `],
        500,
        true
        )
    } else {
        if (Quest_Zauberer == 0) {
            if (game.ask("Bringst du mir 4 Kräuter?")) {
                Mana.max = 4
                Quest_Zauberer += 1
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile52`, function (sprite, location) {
    if (Höhle1 == 0) {
        if (game.ask("Möchtest du die Höhle betreten?")) {
            Höhle1 += 1
            controller.moveSprite(mySprite, 0, 0)
            mySprite.vy = 70
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . e e e e e . . 
                . d . . . . . e e e e e 2 2 . 
                . d . . f f f f f f f c 2 2 . 
                . d . f c c c c c c c b c 2 . 
                . d . f c c c c c c b b c 2 . 
                . d . f c c c c c c b b c 2 . 
                . d . f c d f c c f 1 b 2 2 2 
                . d . f c d f c c f 1 b 2 4 2 
                . d . f c d f c c f 1 b c 2 2 
                . d . f c c c c c c b b c e . 
                f f f . f f f f f f f c . e . 
                f f e f f c c c c c c f e f . 
                . e 4 f c c c c c c c f 4 e . 
                . e e f f f f c c c c f e e . 
                . f . . . f f f f f f . . e . 
                . . . . . f f . . . . . . . . 
                `,img`
                . . . . . . . . e e e e e . . 
                . d . . . . . e e e e e e 2 . 
                . d . . f f f f f f f f 2 2 . 
                . d . f c c c c c c c b c 2 . 
                . d . f c c c c c c b b c 2 . 
                . d . f c c c c c b b b 2 2 . 
                . d . f c d f c c f 1 b 2 4 2 
                . d . f c d f c c f 1 b 2 4 2 
                . d . f c d f c c f 1 b c 2 . 
                . d . f c c c c c b b b c e . 
                f f f . f f f f f c c c . e . 
                f f e f f c c c c c b c e f . 
                . e 4 f c c c c c c c f 4 e . 
                . e e f f f c c c f f f e e . 
                . f . . . f f f f f f . . e . 
                . . . . . . . . . f f . . . . 
                `,img`
                . . . . . . . . e e e e e . . 
                . d . . . . . e e e e e 2 2 . 
                . d . . f f f f f f f c 2 2 . 
                . d . f c c c c c c c b c 2 . 
                . d . f c c c c c c b b c 2 . 
                . d . f c c c c c c b b c 2 . 
                . d . f c d f c c f 1 b 2 2 2 
                . d . f c d f c c f 1 b 2 4 2 
                . d . f c d f c c f 1 b c 2 2 
                . d . f c c c c c c b b c e . 
                f f f . f f f f f f f c . e . 
                f f e f f c c c c c c f e f . 
                . e 4 f c c c c c c c f 4 e . 
                . e e f f f f c c c c f e e . 
                . f . . . f f f f f f . . e . 
                . . . . . f f . . . . . . . . 
                `,img`
                . . . . . . . . e e e e e . . 
                . d . . . . . e e e e e e 2 . 
                . d . . f f f f f f f f 2 2 . 
                . d . f c c c c c c c b c 2 . 
                . d . f c c c c c c b b c 2 . 
                . d . f c c c c c b b b 2 2 . 
                . d . f c d f c c f 1 b 2 4 2 
                . d . f c d f c c f 1 b 2 4 2 
                . d . f c d f c c f 1 b c 2 . 
                . d . f c c c c c b b b c e . 
                f f f . f f f f f c c c . e . 
                f f e f f c c c c c b c e f . 
                . e 4 f c c c c c c c f 4 e . 
                . e e f f f c c c f f f e e . 
                . f . . . f f f f f f . . e . 
                . . . . . . . . . f f . . . . 
                `,img`
                . . . . . . . . e e e e e . . 
                . d . . . . . e e e e e 2 2 . 
                . d . . f f f f f f f c 2 2 . 
                . d . f c c c c c c c b c 2 . 
                . d . f c c c c c c b b c 2 . 
                . d . f c c c c c c b b c 2 . 
                . d . f c d f c c f 1 b 2 2 2 
                . d . f c d f c c f 1 b 2 4 2 
                . d . f c d f c c f 1 b c 2 2 
                . d . f c c c c c c b b c e . 
                f f f . f f f f f f f c . e . 
                f f e f f c c c c c c f e f . 
                . e 4 f c c c c c c c f 4 e . 
                . e e f f f f c c c c f e e . 
                . f . . . f f f f f f . . e . 
                . . . . . f f . . . . . . . . 
                `,img`
                . . . . . . . . e e e e e . . 
                . d . . . . . e e e e e e 2 . 
                . d . . f f f f f f f f 2 2 . 
                . d . f c c c c c c c b c 2 . 
                . d . f c c c c c c b b c 2 . 
                . d . f c c c c c b b b 2 2 . 
                . d . f c d f c c f 1 b 2 4 2 
                . d . f c d f c c f 1 b 2 4 2 
                . d . f c d f c c f 1 b c 2 . 
                . d . f c c c c c b b b c e . 
                f f f . f f f f f c c c . e . 
                f f e f f c c c c c b c e f . 
                . e 4 f c c c c c c c f 4 e . 
                . e e f f f c c c f f f e e . 
                . f . . . f f f f f f . . e . 
                . . . . . . . . . f f . . . . 
                `],
            500,
            true
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(7, 47), assets.tile`myTile2`)
    info.changeScoreBy(3)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(10, 1), assets.tile`myTile11`)) {
        if (In_Höhle == 0) {
            mySprite.setImage(img`
                . . . . . . . . 2 2 2 2 . . . 
                . . . . . . . 2 2 2 2 2 2 2 . 
                . . . . c c c c c c c c 2 2 . 
                . . . c b b b b b b b b c 2 . 
                . . . c b b b b b b b b c 2 . 
                . . . c b b b b b b b b c 2 . 
                . . . c b 1 b b b b 1 b c . . 
                . . c c b 1 f b b f 1 b c . . 
                . . c c b 1 f b b f 1 b c . . 
                . . e e b b b b b b b b c . . 
                . . e 4 c c c c c c c c . . . 
                . . f e c b b b b b b c . . . 
                . c c c c b b b b b b c . . . 
                . . 1 . c b b b b b b c . . . 
                . . 1 . c b b c c c c . . . . 
                . . 1 . . c c . . f f . . . . 
                . . 1 . . f f . . . . . . . . 
                . . 1 . . . . . . . . . . . . 
                . . 1 . . . . . . . . . . . . 
                . . 1 . . . . . . . . . . . . 
                `)
            controller.moveSprite(mySprite, 50, 50)
            if (mySprite.overlapsWith(mySprite2)) {
                sprites.destroy(mySprite2)
                info.changeScoreBy(1)
            }
            if (mySprite.overlapsWith(mySprite3)) {
                sprites.destroy(mySprite3)
                info.changeScoreBy(1)
            }
            if (mySprite.overlapsWith(mySprite4)) {
                sprites.destroy(mySprite4)
                info.changeScoreBy(1)
            }
            if (mySprite.overlapsWith(mySprite5)) {
                sprites.destroy(mySprite5)
                info.changeScoreBy(1)
            }
            if (mySprite.overlapsWith(mySprite6)) {
                sprites.destroy(mySprite6)
                info.changeScoreBy(1)
            }
            if (mySprite.overlapsWith(mySprite7)) {
                sprites.destroy(mySprite7)
                info.changeScoreBy(3)
                mySprite7.setPosition(44, 25)
                sprites.destroy(Für_Pfeile)
            }
            if (mySprite.overlapsWith(mySprite8)) {
                sprites.destroy(mySprite8)
                info.changeScoreBy(2)
            }
            if (mySprite.overlapsWith(mySprite9)) {
                sprites.destroy(mySprite9)
                info.changeScoreBy(3)
            }
            if (mySprite.overlapsWith(mySprite10)) {
                tiles.placeOnTile(mySprite12, mySprite10.tilemapLocation())
                sprites.destroy(mySprite10)
            }
            if (mySprite.overlapsWith(mySprite11)) {
                sprites.destroy(mySprite11)
                info.changeScoreBy(3)
                mySprite11.setPosition(44, 25)
                sprites.destroy(Für_Pfeile)
            }
            if (mySprite.overlapsWith(mySprite12)) {
                mySprite12.follow(mySprite, 40)
                Test2.setPosition(12, 20)
                pause(700)
                if (!(Test2.tileKindAt(TileDirection.Center, assets.tile`myTile14`))) {
                    sprites.destroy(mySprite12)
                    info.changeScoreBy(3)
                }
                pause(500)
            }
        } else {
            mySprite.setImage(img`
                . . . . . . . . e e e e . . . 
                . . . . . . . e e e e e e e . 
                . . . . f f f f f f f f e e . 
                . . . f c c c c c c c c f e . 
                . . . f c c c c c c c c f e . 
                . . . f c c c c c c c c f e . 
                . . . f c d c c c c d c f . . 
                . . f f c d f c c f d c f . . 
                . . f f c d f c c f d c f . . 
                . . e e c c c c c c c c f . . 
                . . e 4 f f f f f f f f . . . 
                . . f e f c c c c c c f . . . 
                . f f f f c c c c c c f . . . 
                . . d . f c c c c c c f . . . 
                . . d . f c c f f f f . . . . 
                . . d . . f f . . f f . . . . 
                . . d . . f f . . . . . . . . 
                . . d . . . . . . . . . . . . 
                . . d . . . . . . . . . . . . 
                . . d . . . . . . . . . . . . 
                `)
            controller.moveSprite(mySprite, 50, 50)
            if (mySprite.overlapsWith(mySprite2)) {
                sprites.destroy(mySprite2)
                info.changeScoreBy(1)
            }
            if (mySprite.overlapsWith(mySprite3)) {
                sprites.destroy(mySprite3)
                info.changeScoreBy(1)
            }
            if (mySprite.overlapsWith(mySprite4)) {
                sprites.destroy(mySprite4)
                info.changeScoreBy(1)
            }
            if (mySprite.overlapsWith(mySprite5)) {
                sprites.destroy(mySprite5)
                info.changeScoreBy(1)
            }
            if (mySprite.overlapsWith(mySprite6)) {
                sprites.destroy(mySprite6)
                info.changeScoreBy(1)
            }
            if (mySprite.overlapsWith(mySprite7)) {
                sprites.destroy(mySprite7)
                info.changeScoreBy(3)
                mySprite7.setPosition(44, 25)
                sprites.destroy(Für_Pfeile)
            }
            if (mySprite.overlapsWith(mySprite8)) {
                sprites.destroy(mySprite8)
                info.changeScoreBy(2)
            }
            if (mySprite.overlapsWith(mySprite9)) {
                sprites.destroy(mySprite9)
                info.changeScoreBy(3)
            }
            if (mySprite.overlapsWith(mySprite10)) {
                tiles.placeOnTile(mySprite12, mySprite10.tilemapLocation())
                sprites.destroy(mySprite10)
            }
            if (mySprite.overlapsWith(mySprite11)) {
                sprites.destroy(mySprite11)
                info.changeScoreBy(3)
                mySprite11.setPosition(44, 25)
                sprites.destroy(Für_Pfeile)
            }
            if (mySprite.overlapsWith(mySprite12)) {
                mySprite12.follow(mySprite, 40)
                Test2.setPosition(12, 20)
                pause(700)
                if (!(Test2.tileKindAt(TileDirection.Center, assets.tile`myTile14`))) {
                    sprites.destroy(mySprite12)
                    info.changeScoreBy(3)
                }
                pause(500)
            }
        }
    }
})
statusbars.onStatusReached(StatusBarKind.Quest, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    for (let index = 0; index < 10000; index++) {
        Hindernis_Photopia = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    if (Quest_Zauberer == 1) {
        Mana.value += 1
        tiles.setTileAt(tiles.getTileLocation(1, 105), assets.tile`myTile22`)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (In_Höhle == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `],
        2000,
        true
        )
        Energie_start = 0
        controller.moveSprite(mySprite)
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e 2 2 . 
            . . . . f f f f f f f c 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f d f c c f 1 b b 2 2 2 
            . . . f d f c c f 1 b b 2 4 2 
            . . . f d f c c f 1 b b c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . e e e e e e . 
            . . . . . . . e e e e e e 2 . 
            . . . . f f f f f f f f 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b 2 2 . 
            . . . f c c c c c b b b 2 4 2 
            . . . f d f c c f 1 b b 2 4 2 
            . . . f d f c c f 1 b b c 2 . 
            . . . f d f c c f 1 b b c e . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f f c c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e 2 2 . 
            . . . . f f f f f f f c 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f d f c c f 1 b b 2 2 2 
            . . . f d f c c f 1 b b 2 4 2 
            . . . f d f c c f 1 b b c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . e e e e e e . 
            . . . . . . . e e e e e e 2 . 
            . . . . f f f f f f f f 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b 2 2 . 
            . . . f c c c c c b b b 2 4 2 
            . . . f d f c c f 1 b b 2 4 2 
            . . . f d f c c f 1 b b c 2 . 
            . . . f d f c c f 1 b b c e . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f f c c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e 2 2 . 
            . . . . f f f f f f f c 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c d f c c f 1 b 2 2 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . e e e e e e . 
            . . . . . . . e e e e e e 2 . 
            . . . . f f f f f f f f 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b 2 2 . 
            . . . f c c c c c b b b 2 4 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 . 
            . . . f c d f c c f 1 b c e . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f f c c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e 2 2 . 
            . . . . f f f f f f f c 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c d f c c f 1 b 2 2 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . e e e e e e . 
            . . . . . . . e e e e e e 2 . 
            . . . . f f f f f f f f 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b 2 2 . 
            . . . f c c c c c b b b 2 4 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 . 
            . . . f c d f c c f 1 b c e . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f f c c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `],
        2000,
        true
        )
        Energie_start = 0
        controller.moveSprite(mySprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile62`, function (sprite, location) {
    if (Held_hat_Spitzhacke == 0) {
        controller.moveSprite(mySprite, 0, 0)
        tiles.setTileAt(tiles.getTileLocation(47, 123), assets.tile`myTile67`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    if (Quest_Zauberer == 1) {
        Mana.value += 1
        tiles.setTileAt(tiles.getTileLocation(8, 86), assets.tile`myTile22`)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    if (Neues_Gebiet_Zauberwald == 0) {
        game.splash("Neues Gebiet", "The Magic Forest")
        Neues_Gebiet_Zauberwald += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    Zauberwald_Musik = 1
    Wald_Musik = 0
    Wüste_Musik = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile67`, function (sprite, location) {
    if (Held_hat_Spitzhacke == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . e e e e e . . 
            . d . . . . . e e e e e 2 2 . 
            . d . . f f f f f f f c 2 2 . 
            . d . f c c c c c c c b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c d f c c f 1 b 2 2 2 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b c 2 2 
            . d . f c c c c c c b b c e . 
            f f f . f f f f f f f c . e . 
            f f e f f c c c c c c f e f . 
            . e 4 f c c c c c c c f 4 e . 
            . e e f f f f c c c c f e e . 
            . f . . . f f f f f f . . e . 
            . . . . . f f . . . . . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . d . . . . . e e e e e e 2 . 
            . d . . f f f f f f f f 2 2 . 
            . d . f c c c c c c c b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c c c c c b b b 2 2 . 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b c 2 . 
            . d . f c c c c c b b b c e . 
            f f f . f f f f f c c c . e . 
            f f e f f c c c c c b c e f . 
            . e 4 f c c c c c c c f 4 e . 
            . e e f f f c c c f f f e e . 
            . f . . . f f f f f f . . e . 
            . . . . . . . . . f f . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . d . . . . . e e e e e 2 2 . 
            . d . . f f f f f f f c 2 2 . 
            . d . f c c c c c c c b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c d f c c f 1 b 2 2 2 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b c 2 2 
            . d . f c c c c c c b b c e . 
            f f f . f f f f f f f c . e . 
            f f e f f c c c c c c f e f . 
            . e 4 f c c c c c c c f 4 e . 
            . e e f f f f c c c c f e e . 
            . f . . . f f f f f f . . e . 
            . . . . . f f . . . . . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . d . . . . . e e e e e e 2 . 
            . d . . f f f f f f f f 2 2 . 
            . d . f c c c c c c c b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c c c c c b b b 2 2 . 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b c 2 . 
            . d . f c c c c c b b b c e . 
            f f f . f f f f f c c c . e . 
            f f e f f c c c c c b c e f . 
            . e 4 f c c c c c c c f 4 e . 
            . e e f f f c c c f f f e e . 
            . f . . . f f f f f f . . e . 
            . . . . . . . . . f f . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . d . . . . . e e e e e 2 2 . 
            . d . . f f f f f f f c 2 2 . 
            . d . f c c c c c c c b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c d f c c f 1 b 2 2 2 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b c 2 2 
            . d . f c c c c c c b b c e . 
            f f f . f f f f f f f c . e . 
            f f e f f c c c c c c f e f . 
            . e 4 f c c c c c c c f 4 e . 
            . e e f f f f c c c c f e e . 
            . f . . . f f f f f f . . e . 
            . . . . . f f . . . . . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . d . . . . . e e e e e e 2 . 
            . d . . f f f f f f f f 2 2 . 
            . d . f c c c c c c c b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c c c c c b b b 2 2 . 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b c 2 . 
            . d . f c c c c c b b b c e . 
            f f f . f f f f f c c c . e . 
            f f e f f c c c c c b c e f . 
            . e 4 f c c c c c c c f 4 e . 
            . e e f f f c c c f f f e e . 
            . f . . . f f f f f f . . e . 
            . . . . . . . . . f f . . . . 
            `],
        500,
        true
        )
        controller.moveSprite(mySprite, 100, 100)
        Spitzhacke2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 . . e . . 1 1 . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . e . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Spitzhacke)
        tiles.placeOnTile(Spitzhacke2, mySprite.tilemapLocation())
        Spitzhacke2.follow(mySprite, 120)
        Mana.value += 1
        Held_hat_Spitzhacke += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    Wüste_Musik = 1
    Wald_Musik = 0
    Zauberwald_Musik = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    if (Quest_Zauberer == 1) {
        Mana.value += 1
        tiles.setTileAt(tiles.getTileLocation(28, 97), assets.tile`myTile22`)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(projectile)
    sprites.destroy(projectile2)
    statusbar.value += -2
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (In_Höhle == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `],
        2000,
        true
        )
        Energie_start = 0
        controller.moveSprite(mySprite)
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . e e e e e . . . . . . . 
            . . e e e e e e e . . . . . . 
            . . e e f f f f f f f c . . . 
            . . e f c c c c c c c b c . . 
            . . e f c c c c c c b b c . . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c d f c c f 1 2 2 2 
            . . . f c c d f c c f 1 2 4 2 
            . . . f c c d f c c f 1 c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . e e e e e e . . . . . . 
            . . e e e e e e e e . . . . . 
            . . e e f f f f f f f f . . . 
            . . e f c c c c c c c b c . . 
            . . e f c c c c c c b b 2 2 . 
            . . . f c c c c c b b b 2 4 2 
            . . . f c c d f c b f 1 2 4 2 
            . . . f c c d f c b f 1 c 2 . 
            . . . f c c d f c b f 1 c e . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f f c c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . e e e e e e . . . . . . 
            . . e e e e e e e e . . . . . 
            . . e e f f f f f f f c . . . 
            . . e f c c c c c c c b c . . 
            . . e f c c c c c c b b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c d f c c f 1 2 2 2 
            . . . f c c d f c c f 1 2 4 2 
            . . . f c c d f c c f 1 c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . e e e e e e . . . . . . 
            . . e e e e e e e e . . . . . 
            . . e e f f f f f f f f . . . 
            . . e f c c c c c c c b c . . 
            . . e f c c c c c c b b 2 2 . 
            . . . f c c c c c b b b 2 4 2 
            . . . f c c d f c b f 1 2 4 2 
            . . . f c c d f c b f 1 c 2 . 
            . . . f c c d f c b f 1 c e . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f f c c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e 2 2 . 
            . . . . f f f f f f f c 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c d f c c f 1 b 2 2 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . e e e e e e . 
            . . . . . . . e e e e e e 2 . 
            . . . . f f f f f f f f 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b 2 2 . 
            . . . f c c c c c b b b 2 4 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 . 
            . . . f c d f c c f 1 b c e . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f f c c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e 2 2 . 
            . . . . f f f f f f f c 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c d f c c f 1 b 2 2 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . e e e e e e . 
            . . . . . . . e e e e e e 2 . 
            . . . . f f f f f f f f 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b 2 2 . 
            . . . f c c c c c b b b 2 4 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 . 
            . . . f c d f c c f 1 b c e . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f f c c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `],
        2000,
        true
        )
        Energie_start = 0
        controller.moveSprite(mySprite)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (In_Höhle == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c 2 2 2 2 2 2 2 
            . . . . c b b b b 2 2 2 2 2 2 
            . . . . c b b b b b 2 2 2 2 2 
            . . . . c b b b b b b b 2 2 . 
            . . . . c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c f f b b b b c . . 
            . . . . . . f f c c c c . . . 
            . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c 2 2 2 2 2 2 2 
            . . . . c b b b b 2 2 2 2 2 2 
            . . . . c b b b b b 2 2 2 2 2 
            . . . . c b b b b b b b 2 2 . 
            . . . . c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b f f c . . 
            . . . . . . c c c c f f . . . 
            . . . . . . . . . . f f . . . 
            `],
        500,
        true
        )
        controller.moveSprite(mySprite)
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . e e e e e . 
            . 2 . . . . . . e e e e e e e 
            2 2 4 . . c f f e e e e e e e 
            4 4 2 . c b b c c e e e e e e 
            2 4 2 . c b b b c c e e e e e 
            2 e 2 . c b b b c c c c e e . 
            . e . . c b b b c c c c c f . 
            . e . . c b b b c c c c c f . 
            . e . . c b b c c c c c c f . 
            . e . . c b c c c c c c c f . 
            . e . . . f f f f f f f f . . 
            . e f e f f c c c c c c f . . 
            . e e 4 f c c c c c c c f . . 
            . e e e f f f f c c c c f . . 
            . e . . . . f f f f f f . . . 
            . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . . . . e e e e e . 
            . 2 . . . . . . e e e e e e e 
            2 2 4 . . c f f e e e e e e e 
            4 4 2 . c b c c c e e e e e e 
            2 4 2 . c b b c c c e e e e e 
            2 e 2 . c b b c c c c c e e . 
            . e . . c b b c c c c c c f . 
            . e . . c b b c c c c c c f . 
            . e . . c b c c c c c c c f . 
            . e . . f c c c c c c c c f . 
            . e . . . f f f f f f f f . . 
            . e f e f f c c c c c c f . . 
            . e e 4 f c c c c c c c f . . 
            . e e e f f c c c c f f f . . 
            . e . . . . f f f f f f . . . 
            . . . . . . . . . . f f . . . 
            `],
        500,
        true
        )
        controller.moveSprite(mySprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    if (Neues_Gebiet_Wasteland == 0) {
        game.splash("Neues Gebiet", "The Wastland")
        Neues_Gebiet_Wasteland += 1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Unsichtbar, function (sprite, otherSprite) {
    if (Nur_einmal_Für_Pfeile == 1) {
        tiles.setTileAt(Für_Pfeile.tilemapLocation(), assets.tile`myTile70`)
        sprites.destroy(sprite)
        sprites.destroy(sprite)
    }
    if (Nur_einmal_Für_Pfeile2 == 1) {
        tiles.setTileAt(Für_Pfeile.tilemapLocation(), assets.tile`myTile71`)
        sprites.destroy(sprite)
        sprites.destroy(sprite)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 3) {
        if (In_Höhle == 0) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . 2 2 2 2 . . 
                . . . . . . . . 2 2 2 2 2 2 . 
                . . . . . c c c c c c c c 2 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b 7 f 1 b c . 
                . . . . c b 1 f 2 2 2 1 b c . 
                . . . . c b b 2 2 f e c b c . 
                . . . . . c c 2 2 e 4 c c . . 
                . . . . . c b 2 2 e e c c . . 
                . . . . . c b b 2 2 2 c c . . 
                . . . . . c b b b b b b c . . 
                . . . . . . c c c c c c . . . 
                . . . . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . 2 2 2 2 . . 
                . . . . . . . . 2 2 2 2 2 2 . 
                . . . . . c c c c c c c c 2 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b b 2 1 b c . 
                . . . . c b b b b f e c b c . 
                . . . . . c c c 2 e 4 c c . . 
                . . . . . c b 2 2 e e c c . . 
                . . . . . c b b 2 2 2 c c . . 
                . . . . . c b b b b b b c . . 
                . . . . . . c c c c c c . . . 
                . . . . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . 2 2 2 2 . . 
                . . . . . . . . 2 2 2 2 2 2 . 
                . . . . . c c c c c c c c 2 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b b b b f e c b c . 
                . . . . . c c c 2 e 4 c c . . 
                . . . . . c b b 2 e e c c . . 
                . . . . . c b b b 2 2 c c . . 
                . . . . . c b b b b b b c . . 
                . . . . . . c c c c c c . . . 
                . . . . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . 2 2 2 2 . . 
                . . . . . . . . 2 2 2 2 2 2 . 
                . . . . . c c c c c c c c 2 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b b b b f e c b c . 
                . . . . . c c c c e 4 c c . . 
                . . . . . c b b b e e c c . . 
                . . . . . c b b b b b c c . . 
                . . . . . c b b b b b b c . . 
                . . . . . . c c c c c c . . . 
                . . . . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . 2 2 2 2 . . 
                . . . . . . . . 2 2 2 2 2 2 . 
                . . . . . c c c c c c c c 2 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b b b b b b b b c . 
                . . . . . c c c c c c c c . . 
                . . . . . c b b b b b b c . . 
                . . . . . c b b b b b b c . . 
                . . . . . c b b b b b b c . . 
                . . . . . . c c c c c c . . . 
                . . . . . . f f . . f f . . . 
                `],
            800,
            false
            )
            statusbar.value += 2
            info.changeScoreBy(-3)
            pause(2000)
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . 2 2 2 2 2 . 
                . . . . . . . . 2 2 2 2 2 2 2 
                . . . . . c c c c c c c c 2 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b b b b b b b b c . 
                . . . . . c c c c c c c c . . 
                . . . . . c b b b b b b c . . 
                . . . . . c b b b b b b c . . 
                . . . . . c f f b b b b c . . 
                . . . . . . f f c c c c . . . 
                . . . . . . f f . . . . . . . 
                `,img`
                . . . . . . . . . 2 2 2 2 2 . 
                . . . . . . . . 2 2 2 2 2 2 2 
                . . . . . c c c c c c c c 2 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c 2 
                . . . . c b b b b b b b b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b 1 f b b f 1 b c . 
                . . . . c b b b b b b b b c . 
                . . . . . c c c c c c c c . . 
                . . . . . c b b b b b b c . . 
                . . . . . c b b b b b b c . . 
                . . . . . c b b b b f f c . . 
                . . . . . . c c c c f f . . . 
                . . . . . . . . . . f f . . . 
                `],
            500,
            true
            )
        } else {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . e e e e . . 
                . . . . . . . . e e e e e e . 
                . . . . . f f f f f f f f e e 
                . . . . f c c c c c c c c f e 
                . . . . f c c c c c c c c f e 
                . . . . f c c c c c c c c f e 
                . . . . f c d f c c f d c f . 
                . . . . f c d f c 6 f d c f . 
                . . . . f c d f e e e d c f . 
                . . . . f c c e e f e f c f . 
                . . . . . f f e e e 4 f f . . 
                . . . . . f c e e e e f f . . 
                . . . . . f c c e e e f f . . 
                . . . . . f c c c c c c f . . 
                . . . . . . f f f f f f . . . 
                . . . . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . e e e e . . 
                . . . . . . . . e e e e e e . 
                . . . . . f f f f f f f f e e 
                . . . . f c c c c c c c c f e 
                . . . . f c c c c c c c c f e 
                . . . . f c c c c c c c c f e 
                . . . . f c d f c c f d c f . 
                . . . . f c d f c c f d c f . 
                . . . . f c d f c c e d c f . 
                . . . . f c c c c f e f c f . 
                . . . . . f f f e e 4 f f . . 
                . . . . . f c e e e e f f . . 
                . . . . . f c c e e e f f . . 
                . . . . . f c c c c c c f . . 
                . . . . . . f f f f f f . . . 
                . . . . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . e e e e . . 
                . . . . . . . . e e e e e e . 
                . . . . . f f f f f f f f e e 
                . . . . f c c c c c c c c f e 
                . . . . f c c c c c c c c f e 
                . . . . f c c c c c c c c f e 
                . . . . f c d f c c f d c f . 
                . . . . f c d f c c f d c f . 
                . . . . f c d f c c f d c f . 
                . . . . f c c c c f e f c f . 
                . . . . . f f f e e 4 f f . . 
                . . . . . f c c e e e f f . . 
                . . . . . f c c c e e f f . . 
                . . . . . f c c c c c c f . . 
                . . . . . . f f f f f f . . . 
                . . . . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . e e e e . . 
                . . . . . . . . e e e e e e . 
                . . . . . f f f f f f f f e e 
                . . . . f c c c c c c c c f e 
                . . . . f c c c c c c c c f e 
                . . . . f c c c c c c c c f e 
                . . . . f c d f c c f d c f . 
                . . . . f c d f c c f d c f . 
                . . . . f c d f c c f d c f . 
                . . . . f c c c c f e f c f . 
                . . . . . f f f f e 4 f f . . 
                . . . . . f c c c e e f f . . 
                . . . . . f c c c c c f f . . 
                . . . . . f c c c c c c f . . 
                . . . . . . f f f f f f . . . 
                . . . . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . e e e e . . 
                . . . . . . . . e e e e e e . 
                . . . . . f f f f f f f f e e 
                . . . . f c c c c c c c c f e 
                . . . . f c c c c c c c c f e 
                . . . . f c c c c c c c c f e 
                . . . . f c d f c c f d c f . 
                . . . . f c d f c c f d c f . 
                . . . . f c d f c c f d c f . 
                . . . . f c c c c c c c c f . 
                . . . . . f f f f f f f f . . 
                . . . . . f c c c c c c f . . 
                . . . . . f c c c c c c f . . 
                . . . . . f c c c c c c f . . 
                . . . . . . f f f f f f . . . 
                . . . . . . f f . . f f . . . 
                `],
            800,
            false
            )
            info.changeScoreBy(-3)
            statusbar.value += 2
            pause(2000)
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . e e e e e . . 
                . . . . . . . e e e e e 2 2 . 
                . . . . f f f f f f f c 2 2 . 
                . . . f c c c c c c c b c 2 . 
                . . . f c c c c c c b b c 2 . 
                . . . f c c c c c c b b c 2 . 
                . . . f c d f c c f 1 b 2 2 2 
                . . . f c d f c c f 1 b 2 4 2 
                . . . f c d f c c f 1 b c 2 2 
                . . . f c c c c c c b b c e . 
                . . . . f f f f f f f c . e . 
                . . . . f c c c c c c f e f . 
                . . . . f c c c c c c f 4 e . 
                . . . . f f f c c c c f e e . 
                . . . . . f f f f f f . . e . 
                . . . . . f f . . . . . . . . 
                `,img`
                . . . . . . . . e e e e e . . 
                . . . . . . . e e e e e e 2 . 
                . . . . f f f f f f f f 2 2 . 
                . . . f c c c c c c c b c 2 . 
                . . . f c c c c c c b b c 2 . 
                . . . f c c c c c b b b 2 2 . 
                . . . f c d f c c f 1 b 2 4 2 
                . . . f c d f c c f 1 b 2 4 2 
                . . . f c d f c c f 1 b c 2 . 
                . . . f c c c c c b b b c e . 
                . . . . f f f f f c c c . e . 
                . . . . f c c c c c b c e f . 
                . . . . f c c c c c c f 4 e . 
                . . . . f f c c c f f f e e . 
                . . . . . f f f f f f . . e . 
                . . . . . . . . . f f . . . . 
                `,img`
                . . . . . . . . e e e e e . . 
                . . . . . . . e e e e e 2 2 . 
                . . . . f f f f f f f c 2 2 . 
                . . . f c c c c c c c b c 2 . 
                . . . f c c c c c c b b c 2 . 
                . . . f c c c c c c b b c 2 . 
                . . . f c d f c c f 1 b 2 2 2 
                . . . f c d f c c f 1 b 2 4 2 
                . . . f c d f c c f 1 b c 2 2 
                . . . f c c c c c c b b c e . 
                . . . . f f f f f f f c . e . 
                . . . . f c c c c c c f e f . 
                . . . . f c c c c c c f 4 e . 
                . . . . f f f c c c c f e e . 
                . . . . . f f f f f f . . e . 
                . . . . . f f . . . . . . . . 
                `,img`
                . . . . . . . . e e e e e . . 
                . . . . . . . e e e e e e 2 . 
                . . . . f f f f f f f f 2 2 . 
                . . . f c c c c c c c b c 2 . 
                . . . f c c c c c c b b c 2 . 
                . . . f c c c c c b b b 2 2 . 
                . . . f c d f c c f 1 b 2 4 2 
                . . . f c d f c c f 1 b 2 4 2 
                . . . f c d f c c f 1 b c 2 . 
                . . . f c c c c c b b b c e . 
                . . . . f f f f f c c c . e . 
                . . . . f c c c c c b c e f . 
                . . . . f c c c c c c f 4 e . 
                . . . . f f c c c f f f e e . 
                . . . . . f f f f f f . . e . 
                . . . . . . . . . f f . . . . 
                `,img`
                . . . . . . . . e e e e e . . 
                . . . . . . . e e e e e 2 2 . 
                . . . . f f f f f f f c 2 2 . 
                . . . f c c c c c c c b c 2 . 
                . . . f c c c c c c b b c 2 . 
                . . . f c c c c c c b b c 2 . 
                . . . f c d f c c f 1 b 2 2 2 
                . . . f c d f c c f 1 b 2 4 2 
                . . . f c d f c c f 1 b c 2 2 
                . . . f c c c c c c b b c e . 
                . . . . f f f f f f f c . e . 
                . . . . f c c c c c c f e f . 
                . . . . f c c c c c c f 4 e . 
                . . . . f f f c c c c f e e . 
                . . . . . f f f f f f . . e . 
                . . . . . f f . . . . . . . . 
                `,img`
                . . . . . . . . e e e e e . . 
                . . . . . . . e e e e e e 2 . 
                . . . . f f f f f f f f 2 2 . 
                . . . f c c c c c c c b c 2 . 
                . . . f c c c c c c b b c 2 . 
                . . . f c c c c c b b b 2 2 . 
                . . . f c d f c c f 1 b 2 4 2 
                . . . f c d f c c f 1 b 2 4 2 
                . . . f c d f c c f 1 b c 2 . 
                . . . f c c c c c b b b c e . 
                . . . . f f f f f c c c . e . 
                . . . . f c c c c c b c e f . 
                . . . . f c c c c c c f 4 e . 
                . . . . f f c c c f f f e e . 
                . . . . . f f f f f f . . e . 
                . . . . . . . . . f f . . . . 
                `],
            500,
            true
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(42, 45), assets.tile`myTile8`)
    info.changeScoreBy(6)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.setGameOverMessage(false, "Game Over!Try again.")
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    if (Erklärung_ende_photopia == 0) {
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("Hier endet das Tal Photopia am Tifa Gebirge", DialogLayout.Center)
        Erklärung_ende_photopia += 1
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (In_Höhle == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c 2 2 2 2 2 2 2 
            . . . . c b b b b 2 2 2 2 2 2 
            . . . . c b b b b b 2 2 2 2 2 
            . . . . c b b b b b b b 2 2 . 
            . . . . c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c 2 2 2 2 2 2 2 
            . . . . c b b b b 2 2 2 2 2 2 
            . . . . c b b b b b 2 2 2 2 2 
            . . . . c b b b b b b b 2 2 . 
            . . . . c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `],
        2000,
        true
        )
        Energie_start = 0
        controller.moveSprite(mySprite)
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . e e e e e . 
            . 2 . . . . . . e e e e e e e 
            2 2 4 . . c f f e e e e e e e 
            4 4 2 . c b b c c e e e e e e 
            2 4 2 . c b b b c c e e e e e 
            2 e 2 . c b b b c c c c e e . 
            . e . . c b b b c c c c c f . 
            . e . . c b b b c c c c c f . 
            . e . . c b b c c c c c c f . 
            . e . . c b c c c c c c c f . 
            . e . . . f f f f f f f f . . 
            . e f e f f c c c c c c f . . 
            . e e 4 f c c c c c c c f . . 
            . e e e f f c c c c c c f . . 
            . e . . . . f f f f f f . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . 2 . . . . . . . e e e e e . 
            2 2 4 . . . . . e e e e e e e 
            4 4 2 . . c f f e e e e e e e 
            2 4 2 . c b c c c e e e e e e 
            2 e 2 . c b b c c c e e e e e 
            . e . . c b b c c c c c e e . 
            . e . . c b b c c c c c c f . 
            . e . . c b c c c c c c c f . 
            . e . . c b c c c c c c c f . 
            . e . . f c c c c c c c c f . 
            . e f e f f f f f f f f f . . 
            . e e 4 f c c c c c c c f . . 
            . e e e f f c c c c c c f . . 
            . e . . . . f f f f f f . . . 
            . . . . . . f f . . f f . . . 
            `],
        2000,
        true
        )
        Energie_start = 0
        controller.moveSprite(mySprite)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (In_Höhle == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c f f b b b b c . . 
            . . . . . . f f c c c c . . . 
            . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c 1 f b b f 1 b b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b f f c . . 
            . . . . . . c c c c f f . . . 
            . . . . . . . . . . f f . . . 
            `],
        500,
        true
        )
        controller.moveSprite(mySprite)
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e 2 2 . 
            . . . . f f f f f f f c 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f d f c c f d b b 2 2 2 
            . . . f d f c c f d b b 2 4 2 
            . . . f d f c c f d b b c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f f f c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . . . . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e e 2 . 
            . . . . f f f f f f f f 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c b b b 2 2 . 
            . . . f d f c c f 1 b b 2 4 2 
            . . . f d f c c f 1 b b 2 4 2 
            . . . f d f c c f 1 b b c 2 . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f c c c . e . 
            . . . . f c c c c c b c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f f c c c f f f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . . . . . f f . . . . 
            `],
        500,
        true
        )
        controller.moveSprite(mySprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    if (Quest_Zauberer == 1) {
        Mana.value += 1
        tiles.setTileAt(tiles.getTileLocation(48, 90), assets.tile`myTile22`)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile50`, function (sprite, location) {
    if (Held_hat_Spitzhacke == 0) {
        if (Hindernis_Photopia == 0) {
            game.setDialogFrame(img`
                ..bbbbbbbbbbbbbbbbbbbb..
                .b11bb11bb11bb11bb11bbb.
                bbb11bb11bb11bb11bb11b1b
                bb1bbbbbbbbbbbbbbbbbb11b
                b11bb11111111111111bb1bb
                b1bb1111111111111111bbbb
                bbbb1111111111111111bb1b
                bb1b1111111111111111b11b
                b11b1111111111111111b1bb
                b1bb1111111111111111bbbb
                bbbb1111111111111111bb1b
                bb1b1111111111111111b11b
                b11b1111111111111111b1bb
                b1bb1111111111111111bbbb
                bbbb1111111111111111bb1b
                bb1b1111111111111111b11b
                b11b1111111111111111b1bb
                b1bb1111111111111111bbbb
                bbbb1111111111111111bb1b
                bb1bb11111111111111bb11b
                b11bbbbbbbbbbbbbbbbbb1bb
                b1b11bb11bb11bb11bb11bbb
                .bbb11bb11bb11bb11bb11b.
                ..bbbbbbbbbbbbbbbbbbbb..
                `)
            game.showLongText("Anscheinend ist der Weg hier am Pass zusammen gefallen!?", DialogLayout.Center)
            game.showLongText("Ich muss die Felsen abbauen wenn ich nach Hyloria will.", DialogLayout.Center)
            game.showLongText("Ich habe aber keine Spitzhacke!", DialogLayout.Center)
            Hindernis_Photopia += 1
            if (game.ask("Finde eine Spitzhacke")) {
                Mana.max = 1
            }
            if (Mana.value == 1) {
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
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                500,
                false
                )
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile58`, function (sprite, location) {
    for (let index = 0; index < 100; index++) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . e e e e e . . 
            . d . . . . . e e e e e 2 2 . 
            . d . . f f f f f f f c 2 2 . 
            . d . f c c c c c c c b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c d f c c f 1 b 2 2 2 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b c 2 2 
            . d . f c c c c c c b b c e . 
            f f f . f f f f f f f c . e . 
            f f e f f c c c c c c f e f . 
            . e 4 f c c c c c c c f 4 e . 
            . e e f f f f c c c c f e e . 
            . f . . . f f f f f f . . e . 
            . . . . . f f . . . . . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . d . . . . . e e e e e e 2 . 
            . d . . f f f f f f f f 2 2 . 
            . d . f c c c c c c c b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c c c c c b b b 2 2 . 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b c 2 . 
            . d . f c c c c c b b b c e . 
            f f f . f f f f f c c c . e . 
            f f e f f c c c c c b c e f . 
            . e 4 f c c c c c c c f 4 e . 
            . e e f f f c c c f f f e e . 
            . f . . . f f f f f f . . e . 
            . . . . . . . . . f f . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . d . . . . . e e e e e 2 2 . 
            . d . . f f f f f f f c 2 2 . 
            . d . f c c c c c c c b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c d f c c f 1 b 2 2 2 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b c 2 2 
            . d . f c c c c c c b b c e . 
            f f f . f f f f f f f c . e . 
            f f e f f c c c c c c f e f . 
            . e 4 f c c c c c c c f 4 e . 
            . e e f f f f c c c c f e e . 
            . f . . . f f f f f f . . e . 
            . . . . . f f . . . . . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . d . . . . . e e e e e e 2 . 
            . d . . f f f f f f f f 2 2 . 
            . d . f c c c c c c c b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c c c c c b b b 2 2 . 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b c 2 . 
            . d . f c c c c c b b b c e . 
            f f f . f f f f f c c c . e . 
            f f e f f c c c c c b c e f . 
            . e 4 f c c c c c c c f 4 e . 
            . e e f f f c c c f f f e e . 
            . f . . . f f f f f f . . e . 
            . . . . . . . . . f f . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . d . . . . . e e e e e 2 2 . 
            . d . . f f f f f f f c 2 2 . 
            . d . f c c c c c c c b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c d f c c f 1 b 2 2 2 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b c 2 2 
            . d . f c c c c c c b b c e . 
            f f f . f f f f f f f c . e . 
            f f e f f c c c c c c f e f . 
            . e 4 f c c c c c c c f 4 e . 
            . e e f f f f c c c c f e e . 
            . f . . . f f f f f f . . e . 
            . . . . . f f . . . . . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . d . . . . . e e e e e e 2 . 
            . d . . f f f f f f f f 2 2 . 
            . d . f c c c c c c c b c 2 . 
            . d . f c c c c c c b b c 2 . 
            . d . f c c c c c b b b 2 2 . 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b 2 4 2 
            . d . f c d f c c f 1 b c 2 . 
            . d . f c c c c c b b b c e . 
            f f f . f f f f f c c c . e . 
            f f e f f c c c c c b c e f . 
            . e 4 f c c c c c c c f 4 e . 
            . e e f f f c c c f f f e e . 
            . f . . . f f f f f f . . e . 
            . . . . . . . . . f f . . . . 
            `],
        500,
        true
        )
    }
    tiles.placeOnTile(mySprite, tiles.getTileLocation(48, 123))
    controller.moveSprite(mySprite)
    mySprite.vy = 0
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(10, 1), assets.tile`myTile11`)) {
        if (In_Höhle == 0) {
            mySprite.setImage(img`
                . . . . . . . . 2 2 2 2 . . . 
                . . . . . . . 2 2 2 2 2 2 2 . 
                . . . . c c c c c c c c 2 2 . 
                . . . c b b b b b b b b c 2 . 
                . . . c b b b b b b b b c 2 . 
                . . . c b b b b b b b b c 2 . 
                . . . c b 1 f b b f 1 b c . . 
                . . . c b 1 f b b f 1 b c . . 
                . . . c b 1 f b b f 1 b c . . 
                . . . c b b b b b b b b c . . 
                . . . c c c c c c c c c . . . 
                . . . . c b b b b b b c . . . 
                . . . . c b b b b b b c . . . 
                . . . . c b b b b b b c . . . 
                . . . . . c c c c c c . . . . 
                . . . . . f f . . f f . . . . 
                `)
            controller.moveSprite(mySprite, 100, 100)
        } else {
            mySprite.setImage(img`
                . . . . . . . . e e e e . . . 
                . . . . . . . e e e e e e e . 
                . . . . f f f f f f f f e e . 
                . . . f c c c c c c c c f e . 
                . . . f c c c c c c c c f e . 
                . . . f c c c c c c c c f e . 
                . . . f c d f c c f d c f . . 
                . . . f c d f c c f d c f . . 
                . . . f c d f c c f d c f . . 
                . . . f c c c c c c c c f . . 
                . . . f f f f f f f f f . . . 
                . . . . f c c c c c c f . . . 
                . . . . f c c c c c c f . . . 
                . . . . f c c c c c c f . . . 
                . . . . . f f f f f f . . . . 
                . . . . . f f . . f f . . . . 
                `)
            controller.moveSprite(mySprite, 100, 100)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile68`, function (sprite, location) {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . 2 2 2 2 2 . 
        . . 1 . . . . . 2 2 2 2 2 2 2 
        . . 1 . . c c c c c c c c 2 2 
        . . 1 . c b b b b b b b b c 2 
        . . 1 . c b b b b b b b b c 2 
        . . 1 . c b b b b b b b b c . 
        . . 1 . c b 1 f b b f 1 b c . 
        . . 1 . c b 1 f b b f 1 b c . 
        . . 1 . c b 1 f b b f 1 b c . 
        . . 1 . c b b b b b b b b c . 
        . c c c c c c c c c c c c c . 
        . c f e c c b b b b b b c . . 
        . . e 4 c b b b b b b b c . . 
        . . e e c c f f b b b b c . . 
        . . c . . . f f c c c c . . . 
        . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . . . . 2 2 2 2 2 . 
        . . 1 . . . . . 2 2 2 2 2 2 2 
        . . 1 . . c c c c c c c c 2 2 
        . . 1 . c b b b b b b b b c 2 
        . . 1 . c b b b b b b b b c 2 
        . . 1 . c b b b b b b b b c . 
        . . 1 . c b 1 f b b f 1 b c . 
        . . 1 . c b 1 f b b f 1 b c . 
        . . 1 . c b 1 f b b f 1 b c . 
        . . 1 . c b b b b b b b b c . 
        . c c c c c c c c c c c c c . 
        . c f e c c b b b b b b c . . 
        . . e 4 c b b b b b b b c . . 
        . . e e c c b b b b f f c . . 
        . . c . . . c c c c f f . . . 
        . . . . . . . . . . f f . . . 
        `],
    500,
    false
    )
    tiles.placeOnTile(mySprite, tiles.getTileLocation(42, 114))
    if (Held_hat_Spitzhacke == 1) {
        tiles.placeOnTile(Spitzhacke2, mySprite.tilemapLocation())
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (In_Höhle == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c f f b b b b c . . 
            . . . . . . f f c c c c . . . 
            . . . . . . f f . . . . . . . 
            `,img`
            . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 c c c c c c c c . . 
            . . . 2 c b b b b b b b b c . 
            . . . 2 c b b b b b b b b c . 
            . . . . c b b b b b b b b c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b 1 f b b f 1 c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b f f c . . 
            . . . . . . c c c c f f . . . 
            . . . . . . . . . . f f . . . 
            `],
        500,
        true
        )
        controller.moveSprite(mySprite)
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . e e e e e . . . . . . . 
            . . e e e e e e e . . . . . . 
            . . e e f f f f f f f c . . . 
            . . e f c c c c c c c b c . . 
            . . e f c c c c c c b b c . . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c d f c c f 1 2 2 2 
            . . . f c c d f c c f 1 2 4 2 
            . . . f c c d f c c f 1 c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f f f c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . . . . . . . 
            `,img`
            . . . e e e e e . . . . . . . 
            . . e e e e e e e . . . . . . 
            . . e e f f f f f f f f . . . 
            . . e f c c c c c c c b c . . 
            . . e f c c c c c c b b c 2 . 
            . . . f c c c c c b b b 2 2 . 
            . . . f c c d f c b f 1 2 4 2 
            . . . f c c d f c b f 1 2 4 2 
            . . . f c c d f c b f 1 c 2 . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f c c c . e . 
            . . . . f c c c c c b c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f f c c c f f f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . . . . . f f . . . . 
            `],
        500,
        true
        )
        controller.moveSprite(mySprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite2.follow(mySprite, 40)
    mySprite3.follow(mySprite, 40)
    mySprite4.follow(mySprite, 40)
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "GAME OVER!")
    game.gameOver(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (In_Höhle == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c f f b b b b c . . 
            . . . . . . f f c c c c . . . 
            . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b f f c . . 
            . . . . . . c c c c f f . . . 
            . . . . . . . . . . f f . . . 
            `],
        500,
        true
        )
        controller.moveSprite(mySprite)
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e 2 2 . 
            . . . . f f f f f f f c 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c d f c c f 1 b 2 2 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f f f c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . . . . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e e 2 . 
            . . . . f f f f f f f f 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c b b b 2 2 . 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f c c c . e . 
            . . . . f c c c c c b c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f f c c c f f f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . . . . . f f . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e 2 2 . 
            . . . . f f f f f f f c 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c d f c c f 1 b 2 2 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f f f c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . . . . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e e 2 . 
            . . . . f f f f f f f f 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c b b b 2 2 . 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f c c c . e . 
            . . . . f c c c c c b c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f f c c c f f f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . . . . . f f . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e 2 2 . 
            . . . . f f f f f f f c 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c d f c c f 1 b 2 2 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f f f c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . . . . . . . 
            `,img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e e 2 . 
            . . . . f f f f f f f f 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c b b b 2 2 . 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f c c c . e . 
            . . . . f c c c c c b c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f f c c c f f f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . . . . . f f . . . . 
            `],
        500,
        true
        )
        controller.moveSprite(mySprite)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (mySprite2.overlapsWith(mySprite)) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . f f f f f f . 
            . . 1 . . . . f f f f f f f f 
            . . 1 . . c c c c c c c c f f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f 1 f f f f 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f f f f f f f f c . 
            . c c c c c c c c c c c c c . 
            . c f e c c f f f f f f c e f 
            . . e 4 c f f f f f f f c 4 e 
            . . e e c c f f f f f f c e e 
            . . c . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . f f f f f f . 
            . . . . . . . f f f f f f f f 
            . . . . . c c c c c c c c f f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f 1 f f f f 1 f c . 
            . . . . c f 1 2 f f 2 1 f c . 
            . . c . c f 1 2 f f 2 1 f c . 
            . . c . c f f f f f f f f c . 
            . . e e c c c c c c c c c c . 
            . . e 4 c c f f f f f f c e f 
            . c f e c f f f f f f f c 4 e 
            . c c c c c f f f f f f c e e 
            . . 1 . . c f f c c c c . . . 
            . . 1 . . . c c . . f f . . . 
            . . 1 . . . f f . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            `],
        800,
        false
        )
        statusbar.value += -1
        pause(1000)
    }
    if (mySprite3.overlapsWith(mySprite)) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            . . . . . . . . f f f f f f . 
            . . 1 . . . . f f f f f f f f 
            . . 1 . . c c c c c c c c f f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f 1 f f f f 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f f f f f f f f c . 
            . c c c c c c c c c c c c c . 
            . c f e c c f f f f f f c e f 
            . . e 4 c f f f f f f f c 4 e 
            . . e e c c f f f f f f c e e 
            . . c . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . f f f f f f . 
            . . . . . . . f f f f f f f f 
            . . . . . c c c c c c c c f f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f 1 f f f f 1 f c . 
            . . . . c f 1 2 f f 2 1 f c . 
            . . c . c f 1 2 f f 2 1 f c . 
            . . c . c f f f f f f f f c . 
            . . e e c c c c c c c c c c . 
            . . e 4 c c f f f f f f c e f 
            . c f e c f f f f f f f c 4 e 
            . c c c c c f f f f f f c e e 
            . . 1 . . c f f c c c c . . . 
            . . 1 . . . c c . . f f . . . 
            . . 1 . . . f f . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            `],
        800,
        false
        )
        statusbar.value += -1
        pause(1000)
    }
    if (mySprite4.overlapsWith(mySprite)) {
        animation.runImageAnimation(
        mySprite4,
        [img`
            . . . . . . . . f f f f f f . 
            . . 1 . . . . f f f f f f f f 
            . . 1 . . c c c c c c c c f f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f 1 f f f f 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f f f f f f f f c . 
            . c c c c c c c c c c c c c . 
            . c f e c c f f f f f f c e f 
            . . e 4 c f f f f f f f c 4 e 
            . . e e c c f f f f f f c e e 
            . . c . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . f f f f f f . 
            . . . . . . . f f f f f f f f 
            . . . . . c c c c c c c c f f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f 1 f f f f 1 f c . 
            . . . . c f 1 2 f f 2 1 f c . 
            . . c . c f 1 2 f f 2 1 f c . 
            . . c . c f f f f f f f f c . 
            . . e e c c c c c c c c c c . 
            . . e 4 c c f f f f f f c e f 
            . c f e c f f f f f f f c 4 e 
            . c c c c c f f f f f f c e e 
            . . 1 . . c f f c c c c . . . 
            . . 1 . . . c c . . f f . . . 
            . . 1 . . . f f . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            `],
        800,
        false
        )
        statusbar.value += -1
        pause(1000)
    }
    if (mySprite5.overlapsWith(mySprite)) {
        animation.runImageAnimation(
        mySprite5,
        [img`
            . . . . . . . . f f f f f f . 
            . . 1 . . . . f f f f f f f f 
            . . 1 . . c c c c c c c c f f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f 1 f f f f 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f f f f f f f f c . 
            . c c c c c c c c c c c c c . 
            . c f e c c f f f f f f c e f 
            . . e 4 c f f f f f f f c 4 e 
            . . e e c c f f f f f f c e e 
            . . c . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . f f f f f f . 
            . . . . . . . f f f f f f f f 
            . . . . . c c c c c c c c f f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f 1 f f f f 1 f c . 
            . . . . c f 1 2 f f 2 1 f c . 
            . . c . c f 1 2 f f 2 1 f c . 
            . . c . c f f f f f f f f c . 
            . . e e c c c c c c c c c c . 
            . . e 4 c c f f f f f f c e f 
            . c f e c f f f f f f f c 4 e 
            . c c c c c f f f f f f c e e 
            . . 1 . . c f f c c c c . . . 
            . . 1 . . . c c . . f f . . . 
            . . 1 . . . f f . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            `],
        800,
        false
        )
        statusbar.value += -1
        pause(1000)
    }
    if (mySprite6.overlapsWith(mySprite)) {
        animation.runImageAnimation(
        mySprite6,
        [img`
            . . . . . . . . f f f f f f . 
            . . 1 . . . . f f f f f f f f 
            . . 1 . . c c c c c c c c f f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f 1 f f f f 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f f f f f f f f c . 
            . c c c c c c c c c c c c c . 
            . c f e c c f f f f f f c e f 
            . . e 4 c f f f f f f f c 4 e 
            . . e e c c f f f f f f c e e 
            . . c . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . f f f f f f . 
            . . . . . . . f f f f f f f f 
            . . . . . c c c c c c c c f f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f 1 f f f f 1 f c . 
            . . . . c f 1 2 f f 2 1 f c . 
            . . c . c f 1 2 f f 2 1 f c . 
            . . c . c f f f f f f f f c . 
            . . e e c c c c c c c c c c . 
            . . e 4 c c f f f f f f c e f 
            . c f e c f f f f f f f c 4 e 
            . c c c c c f f f f f f c e e 
            . . 1 . . c f f c c c c . . . 
            . . 1 . . . c c . . f f . . . 
            . . 1 . . . f f . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            `],
        800,
        false
        )
        statusbar.value += -1
        pause(1000)
    }
    if (mySprite6.overlapsWith(mySprite)) {
        animation.runImageAnimation(
        mySprite6,
        [img`
            . . . . . . . . f f f f f f . 
            . . 1 . . . . f f f f f f f f 
            . . 1 . . c c c c c c c c f f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f 1 f f f f 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f f f f f f f f c . 
            . c c c c c c c c c c c c c . 
            . c f e c c f f f f f f c e f 
            . . e 4 c f f f f f f f c 4 e 
            . . e e c c f f f f f f c e e 
            . . c . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . f f f f f f . 
            . . . . . . . f f f f f f f f 
            . . . . . c c c c c c c c f f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f 1 f f f f 1 f c . 
            . . . . c f 1 2 f f 2 1 f c . 
            . . c . c f 1 2 f f 2 1 f c . 
            . . c . c f f f f f f f f c . 
            . . e e c c c c c c c c c c . 
            . . e 4 c c f f f f f f c e f 
            . c f e c f f f f f f f c 4 e 
            . c c c c c f f f f f f c e e 
            . . 1 . . c f f c c c c . . . 
            . . 1 . . . c c . . f f . . . 
            . . 1 . . . f f . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            `],
        800,
        false
        )
        statusbar.value += -1
        pause(1000)
    }
    if (mySprite8.overlapsWith(mySprite)) {
        animation.runImageAnimation(
        mySprite8,
        [img`
            . . . . . . . . f f f f f f . 
            . . 1 . . . . f f f f f f f f 
            . . 1 . . c c c c c c c c f f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f f f f f f f f c f 
            . . 1 . c f 1 f f f f 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f 1 2 f f 2 1 f c . 
            . . 1 . c f f f f f f f f c . 
            . c c c c c c c c c c c c c . 
            . c f e c c f f f f f f c e f 
            . . e 4 c f f f f f f f c 4 e 
            . . e e c c f f f f f f c e e 
            . . c . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . f f f f f f . 
            . . . . . . . f f f f f f f f 
            . . . . . c c c c c c c c f f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f f f f f f f f c f 
            . . . . c f 1 f f f f 1 f c . 
            . . . . c f 1 2 f f 2 1 f c . 
            . . c . c f 1 2 f f 2 1 f c . 
            . . c . c f f f f f f f f c . 
            . . e e c c c c c c c c c c . 
            . . e 4 c c f f f f f f c e f 
            . c f e c f f f f f f f c 4 e 
            . c c c c c f f f f f f c e e 
            . . 1 . . c f f c c c c . . . 
            . . 1 . . . c c . . f f . . . 
            . . 1 . . . f f . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . 
            `],
        800,
        false
        )
        statusbar.value += -1
        pause(1000)
    }
    if (mySprite9.overlapsWith(mySprite)) {
        animation.runImageAnimation(
        mySprite9,
        [img`
            ..1.......ffffff.
            .11.e....ffffffff
            .11.e..ccccccccff
            .111e1cffffffffcf
            .111e1cffffffffcf
            .11.e.cffffffffcf
            .11.e.cf1ffff1fc.
            ..1.e.cf12ff21fc.
            ....e.cf12ff21fc.
            ....e.cffffffffc.
            ....e.cccccccccc.
            ....feccffffffcef
            ....e4cfffffffc4e
            ....eeccffffffcee
            ....e...cccccc...
            ........ff..ff...
            .................
            .................
            .................
            .................
            .................
            `,img`
            ..........ffffff.
            .........ffffffff
            .......ccccccccff
            ......cffffffffcf
            ......cffffffffcf
            ......cffffffffcf
            ......cf1ffff1fc.
            ......cf12ff21fc.
            ......cf12ff21fc.
            ....e.cffffffffc.
            ....eecccccccccc.
            ....e4ccffffffcef
            ....fecfffffffc4e
            ....e.ccffffffcee
            ..1.e..cffcccc...
            .11.e...cc..ff...
            .111e1..ff.......
            .111e1...........
            .111e1...........
            .11.e............
            ..1.e............
            `],
        800,
        false
        )
        statusbar.value += -1
        pause(1000)
    }
    if (mySprite10.overlapsWith(mySprite)) {
        animation.runImageAnimation(
        mySprite10,
        [img`
            ...1..............
            ..111....ffffff...
            ..111...ffffffff..
            ..1e1.ccccccccff..
            ...e.cffffffffcf..
            ...e.cffffffffcf..
            ...e.cffffffffcf..
            ...e.cf1ffff1fc...
            ...e.cf12ffccccc..
            ...e.cf12fcfffffc.
            ...e.cffffcfffffc.
            ...e.ccccccfffffc.
            ...feccfffcfffffc.
            ...e4cffffcfffffc.
            ...eeccfffcfffffc.
            ...e...ccccfffffc.
            ...e...ff..ccccc..
            ..................
            ..................
            ..................
            ..................
            ..................
            ..................
            `,img`
            ..................
            .........ffffff...
            ........ffffffff..
            ......ccccccccff..
            .....cffffffffcf..
            .....cffffffffcf..
            .....cffffffffcf..
            .....cf1ffff1fc...
            .....cf12ff21fccc.
            ...e.cf12ff21cfffc
            ...e.cfffffffcfffc
            ...eecccccccccfffc
            ...e4ccffffffcfffc
            ...fecfffffffcfffc
            ...e.ccffffffcfffc
            ...e..cffcccccfffc
            ...e...cc..ff.ccc.
            ...e...ff.........
            ...e..............
            ..1e1.............
            ..111.............
            ..111.............
            ...1..............
            `],
        1000,
        false
        )
        statusbar.value += -1
        pause(1000)
    }
    if (mySprite12.overlapsWith(mySprite)) {
        animation.runImageAnimation(
        mySprite12,
        [img`
            ...1..............
            ..111....ffffff...
            ..111...ffffffff..
            ..1e1.ccccccccff..
            ...e.cffffffffcf..
            ...e.cffffffffcf..
            ...e.cffffffffcf..
            ...e.cf1ffff1fc...
            ...e.cf12ff21fc...
            ...e.cf12ff21fc...
            ...e.cffffffffc...
            ...e.cccccccccc...
            ...feccffffffc....
            ...e4cfffffffc....
            ...eeccffffffc....
            ...e...ccccccc....
            ...e...ff...ff....
            ..................
            ..................
            ..................
            ..................
            ..................
            ..................
            `,img`
            ..................
            .........ffffff...
            ........ffffffff..
            ......ccccccccff..
            .....cffffffffcf..
            .....cffffffffcf..
            .....cffffffffcf..
            .....cf1ffff1fc...
            .....cf12ff21fc...
            ...e.cf12ff21fc...
            ...e.cffffffffc...
            ...eecccccccccc...
            ...e4ccffffffc....
            ...fecfffffffc....
            ...e.ccffffffc....
            ...e..cffccccc....
            ...e...cc..ff.....
            ...e...ff.........
            ...e..............
            ..1e1.............
            ..111.............
            ..111.............
            ...1..............
            `],
        1000,
        false
        )
        statusbar.value += -1
        pause(1000)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    Wald_Musik = 1
    Wüste_Musik = 0
    Zauberwald_Musik = 0
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (In_Höhle == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 2 . 
            . . . . . . . . 2 2 2 2 2 2 2 
            . . . . . c c c c c c c c 2 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c 2 
            . . . . c b b b b b b b b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b 1 f b b f 1 b c . 
            . . . . c b b b b b b b b c . 
            . . . . . c c c c c c c c . . 
            . . . . . c b b b b b b c . . 
            . . . . . c b b b b b b c . . 
            . . . . . . c c c c c c . . . 
            . . . . . . f f . . f f . . . 
            `],
        2000,
        true
        )
        Energie_start = 0
        controller.moveSprite(mySprite)
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e 2 2 . 
            . . . . f f f f f f f c 2 2 . 
            . . . f c c c c c c c b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c d f c c f 1 b 2 2 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b c 2 2 
            . . . f c c c c c c b b c e . 
            . . . . f f f f f f f c . e . 
            . . . . f c c c c c c f e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . e e e e e . . 
            . . . . . . . e e e e e 2 2 . 
            . . . . f f f f f f f c 2 2 . 
            . . . f c c c c c c b b c 2 . 
            . . . f c c c c c b b b c 2 . 
            . . . f c c c c c b b b 2 4 2 
            . . . f c d f c c f 1 b 2 4 2 
            . . . f c d f c c f 1 b 2 2 . 
            . . . f c d f c c f 1 b c e . 
            . . . f c c c c c b b b c e . 
            . . . . f f f f f f c c e f . 
            . . . . f c c c c c c f 4 e . 
            . . . . f c c c c c c f e e . 
            . . . . . f f f f f f . . e . 
            . . . . . f f . . f f . . . . 
            `],
        2000,
        true
        )
        Energie_start = 0
        controller.moveSprite(mySprite)
    }
})
let projectile2: Sprite = null
let projectile: Sprite = null
let Spitzhacke2: Sprite = null
let Energie_start = 0
let Für_Pfeile: Sprite = null
let Quest_Zauberer = 0
let Mana: StatusBarSprite = null
let Zauberer: Sprite = null
let Key2: Sprite = null
let Test2: Sprite = null
let mySprite12: Sprite = null
let mySprite11: Sprite = null
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let Neues_Gebiet_Wasteland = 0
let Neues_Gebiet_Zauberwald = 0
let Zauberwald_Musik = 0
let Wüste_Musik = 0
let Wald_Musik = 0
let Erklärung_ende_photopia = 0
let Hindernis_Photopia = 0
let Höhle1 = 0
let Nur_einmal_Für_Pfeile = 0
let Nur_einmal_Für_Pfeile2 = 0
let In_Höhle = 0
let Held_hat_Spitzhacke = 0
let Nur_einmal_Text = 0
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
controller.moveSprite(mySprite)
game.setDialogFrame(img`
    ..bbbbbbbbbbbbbbbbbbbb..
    .b11bb11bb11bb11bb11bbb.
    bbb11bb11bb11bb11bb11b1b
    bb1bbbbbbbbbbbbbbbbbb11b
    b11bb11111111111111bb1bb
    b1bb1111111111111111bbbb
    bbbb1111111111111111bb1b
    bb1b1111111111111111b11b
    b11b1111111111111111b1bb
    b1bb1111111111111111bbbb
    bbbb1111111111111111bb1b
    bb1b1111111111111111b11b
    b11b1111111111111111b1bb
    b1bb1111111111111111bbbb
    bbbb1111111111111111bb1b
    bb1b1111111111111111b11b
    b11b1111111111111111b1bb
    b1bb1111111111111111bbbb
    bbbb1111111111111111bb1b
    bb1bb11111111111111bb11b
    b11bbbbbbbbbbbbbbbbbb1bb
    b1b11bb11bb11bb11bb11bbb
    .bbb11bb11bb11bb11bb11b.
    ..bbbbbbbbbbbbbbbbbbbb..
    `)
game.showLongText("Willkommen in Photopia edler Ritter der roten Löwen ", DialogLayout.Center)
game.showLongText("Deine Aufgabe ist es den bösen Lord der Raubritter zu besiegen.", DialogLayout.Center)
game.showLongText("Viel Glück edler Ritter der roten Löwen.", DialogLayout.Center)
game.showLongText("(Schlagen A,2HP für 3 Punkte B,Magieball a+b für 50 Mana)", DialogLayout.Center)
mySprite = sprites.create(img`
    . . . . . . . . 2 2 2 2 . . . 
    . . . . . . . 2 2 2 2 2 2 2 . 
    . . . . c c c c c c c c 2 2 . 
    . . . c b b b b b b b b c 2 . 
    . . . c b b b b b b b b c 2 . 
    . . . c b b b b b b b b c 2 . 
    . . . c b 1 f b b f 1 b c . . 
    . . . c b 1 f b b f 1 b c . . 
    . . . c b 1 f b b f 1 b c . . 
    . . . c b b b b b b b b c . . 
    . . . c c c c c c c c c . . . 
    . . . . c b b b b b b c . . . 
    . . . . c b b b b b b c . . . 
    . . . . c b b b b b b c . . . 
    . . . . . c c c c c c . . . . 
    . . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
scene.setBackgroundImage(img`
    999999999999999999999999bdddddddddddddddddddddddb9999999999999999999999999999999999999999999999999999999999999999999999999999bddddddddb9999999999999999999999999
    999999999999999999999999bdddddddddddddddddddddddb9999999999999999999999999999999999999999999999999999999999999999999999999999bddddddddb9999999999999999999999999
    99999999999999999999999bbddddddddddddddddddddddddb99999999999999999999999999999999999999999999999999999999e22299999999999999bdddddddddb9999999999999999999999999
    99999999999999999999999bdddddddddddddddddddddddddb99999999999999999999999999999999999999999999999999999999e22222299999999999bdddddddddb9999999999999999999999999
    99999999999999999999999bddddddddddddddddddddddddddb9999999999999999999999999999999999999999999999999999999e22222299999999999bdddddddddb9999999999999999999999999
    9999999999999999999999bdddddddddddddddddddddddddddb9999999999999999999999999999999999999999999999999999999e22222299999999999bdddddddddb9999999999999999999999999
    9999999999999999999999bdddddddddddddddddddddddddddb9999999999999999999999999999999999999999999999999999999e2999999999999999bddddddddddb9999999999999999999999999
    9999999999999999999999bdddddddddddddddddddddddddddb9999999999999999999999999999999999999999999999999999999e9999999999999999bddddddddddb9999999999999999999999999
    999999999999999999999bddddddddddddddddddddddddddddbb999999999999999999999999999999999999999999999999999999e9999999999999999bddddddddddb9999999999999999999999999
    999999999999999999999bdddddddddddddddddddddddddddddb999999999999999999999999999999999999999999999999999999e9999999999999999bdddddddddddb999999999999999999999999
    999999999999999999999bdddddddddddddddddddddddddddddbb999999999999999999999999999cc9ccc9cc9999999999cc9ccc9cc999999999999999bdddddddddddb999999999999999999999999
    999999999999999999999bddddddddddddddddddddddddddddddb999999999999999999999999999ccccccccc9999999999ccccccccc999999999999999bdddddddddddb999999999999999999999999
    99999999999999999999bdddddddddddddddddddddddddddddddb999999999999999999999999999cbbbbbbbc9999999999cbbbbbbbc999999999999999bdddddddddddb999999999999999999999999
    99999999999999999999bdddddddddddddddddddddddddddddddb999999999999999999999999999cbbbbbbbc9999999999cbbbbbbbc999999999999999bdddddddddddb999999999999999999999999
    9999999999999999999bbdddddddddddddddddddddddddddddddb999999999999999999999999999cbbbbbbbc9999999999cbbbbbbbc999999999999999bdddddddddddb999999999999999999999999
    9999999999999999999bdddddddddddddddddddddddddddddddddb99999999999999999999999999cbbbbbbbccc9cccc9cccbbbbbbbc999999999999999bdddddddddddb999999999999999999999999
    9999999999999999999bdddddddddddddddddddddddddddddddddb99999999999999999999999999cbbbbbbbccccccccccccbbbbbbbc999999999999999bddddddddddddb99999999999999999999999
    9999999999999999999bdddddddddddddddddddddddddddddddddb99999999999999999999999999cbbbbbbbcbbbbbbbbbbcbbbbbbbc999999999999999bddddddddddddb99999999999999999999999
    9999999999999999999bdddddddddddddddddddddddddddddddddb99999999999999999999999999cbbbbbbbcbbbbbbbbbbcbbbbbbbc999999999999999bddddddddddddb99999999999999999999999
    999999999999999999bdddddddddddddddddddddddddddddddddddb9999999999999999999999999cbbbbbbbcbbbbbbbbbbcbbbbbbbc999999999999999bddddddddddddb99999999999999999999999
    999999999999999999bdddddddddddddddddddddddddddddddddddb99999999999999999999999999cbbbbbcbbbbbbbbbbbbcbbbbbc999999999999999bddddddddddddddb9999999999999999999999
    99999999999999999bddddddddddddddddddddddddddddddddddddb99999999999999999999999999cbbbbbcbbbccccccbbbcbbbbbc999999999999999bddddddddddddddb9999999999999999999999
    99999999999999999bdddddddddddddddddddddddddddddddddddddb9999999999999999999999999cbbbbbcbbceeeeeecbbcbbbbbc99999999999999bdddddddddddddddb9999999999999999999999
    9999999999999999bddddddddddddddddddddddddddddddddddddddb9999999999999999999999999cbbbbbcbbceeeeeecbbcbbbbbc99999999999999bddddddddddddddddb999999999999999999999
    999999999999999bdddddddddddddddddddddddddddddddddddddddb9999999999999999999999999cbbbbbcbbceeeeeecbbcbbbbbc9999999999999bdddddddddddddddddb999999999999999999999
    999999999999999bdddddddddddddddddddddddddddddddddddddddb9999999999999999999999999cbbbbbcbbceeeeeecbbcbbbbbc9999999999999bdddddddddddddddddb999999999999999999999
    999999999999999bdddddddddddddddddddddddddddddddddddddddb9999999999999999999999999cbbbbbcbbceeeeeecbbcbbbbbc999999999999bdddddddddddddddddddb99999999999999999999
    999999999999999bdddddddddddddddddddddddddddddddddddddddb9999999999999999999999999cbbbbbcbbceeeeeecbbcbbbbbc999999999999bdddddddddddddddddddb99999999999999999999
    999999999999999bdddddddddddddddddddddddddddddddddddddddbb999977777777777777777777cccccccccccceeeecbbcbbbbbc999999999999bdddddddddddddddddddb99999999999999999999
    99999999999999bddddddddddddddddddddddddddddddddddddddddd7777777777777777777777777777777777777cccccbbcbbbbbc99999999999bddddddddddddddddddddb99999999999999999999
    99999999999999bdddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777ccccccccc777777777777777dddddddddddddddddb99999999999999999999
    9999999999999bdddddddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddb9999999999999999999
    9999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddb9999999999999999999
    997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddb999999999999999999
    9777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddb999999999999999999
    97777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777db999999999999999999
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999999
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777766666666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777667777777766677777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777677777777777767777777777777777777777777777777777777777777777777777777777777666666677777777777777777
    7777777777777777777777777777777777777777777777777777777777777677777777777767777777777777777777777777777777777777777777777777777777776666777777667777777777777777
    7777777777777666666777777777777777777777777777777777777777777677777777777767777777777777777777777777777777777777777777777777777666767777777777776777777777777777
    7777777777666777766666677777777777777777777777777777777777777677777777777767777777777777777777777777777777777777777777777776666676667777777777776777777777777777
    7777777777677777777777766777777777777777777777777777777777777677777777777677777777777777777777777777777777777777777777777766777777776777777777777677777777777777
    7777777777667777777777777677777777777777777777777777777777777667777777777677777777777777777777777777777777777777777777777667777777777667777777777767777777777777
    7777777777767777777777777677777777777777777777777777777777777766777777777677777777777777777777777777777777777777777777777677777777777767777777777776777777777777
    777777777776777777777777767777777777777777777777777777777777777e667777776777777777777777777777777777777777777777777777777677777777777776666666666676777777777777
    777777777777677777777777767777777777777777777777777777777777777eeee666666777777777777777777777777777777777777777777777777677777777777776777777777766777777777777
    777777777777767777777777767777777777777777777777777777777777777eeee777777777777777777777777777777777777777777777777777777677777777777776777777777776777777777777
    777777777777776777777777767777777777777777777777777777777777777eeee777777777777777777777777777777777777777777777777777777677777777777776777777777776777777777777
    777777777777776677777777767777777777777777777777777777777777777eeeee77777777777777777777777777777777777777777777777777777667777777777776777777777776777777777777
    777777777777777667777777767777777777777777777777777777777777777eeeee77777777777777777777777777777777777777777777777777777767777777777766777777777776777777777777
    777777777777777ee6777777677777777777777777777777777777777777777eeeee77777777777777777777777777777777777777777777777777777776666666666666667777777776777777777777
    777777777777777eee666666677777777777777777777777777777777777777eeeee77777777777777777777777777777777777777777777777777777777777eeee7777eee6666666766777777777777
    777777777777777eeee77777777777777777777777777777777777777777777eeeee7777777777777777777777777777777777777777777777777777777777eeeee7777eeeeee7776667777777777777
    777777777777777eeeee7777777777777777777777777777777777777777777eeeee7777777777777777777777777777777777777777777777777777777777eeeee7777777eee7777777777777777777
    77777777777777eeeeee7777777777777777777777777777777777777777777eeeee7777777777777777777777777777777777777777777777777777777777eeeee7777777eee7777777777777777777
    77777777777777eeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeeeee777777eeee777777777777777777
    77777777777777eeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeeeee777777eeee777777777777777777
    77777777777777eeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeeeeee777777eeee777777777777777777
    7777777777777777eeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeeeeee777777eee7777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeeeeee7777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.setPosition(100, 300)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . 2 2 2 2 2 . 
    . . . . . . . . 2 2 2 2 2 2 2 
    . . . . . c c c c c c c c 2 2 
    . . . . c b b b b b b b b c 2 
    . . . . c b b b b b b b b c 2 
    . . . . c b b b b b b b b c . 
    . . . . c b 1 f b b f 1 b c . 
    . . . . c b 1 f b b f 1 b c . 
    . . . . c b 1 f b b f 1 b c . 
    . . . . c b b b b b b b b c . 
    . . . . . c c c c c c c c . . 
    . . . . . c b b b b b b c . . 
    . . . . . c b b b b b b c . . 
    . . . . . c f f b b b b c . . 
    . . . . . . f f c c c c . . . 
    . . . . . . f f . . . . . . . 
    `,img`
    . . . . . . . . . 2 2 2 2 2 . 
    . . . . . . . . 2 2 2 2 2 2 2 
    . . . . . c c c c c c c c 2 2 
    . . . . c b b b b b b b b c 2 
    . . . . c b b b b b b b b c 2 
    . . . . c b b b b b b b b c . 
    . . . . c b 1 f b b f 1 b c . 
    . . . . c b 1 f b b f 1 b c . 
    . . . . c b 1 f b b f 1 b c . 
    . . . . c b b b b b b b b c . 
    . . . . . c c c c c c c c . . 
    . . . . . c b b b b b b c . . 
    . . . . . c b b b b b b c . . 
    . . . . . c b b b b f f c . . 
    . . . . . . c c c c f f . . . 
    . . . . . . . . . . f f . . . 
    `],
500,
true
)
statusbar = statusbars.create(50, 4, StatusBarKind.Health)
statusbar.setBarBorder(1, 15)
statusbar.setLabel("HP")
statusbar.max = 10
statusbar.positionDirection(CollisionDirection.Top)
statusbar.setColor(2, 15, 2)
Nur_einmal_Text = 0
Held_hat_Spitzhacke = 0
In_Höhle = 0
Nur_einmal_Für_Pfeile2 = 0
Nur_einmal_Für_Pfeile = 0
Höhle1 = 0
Hindernis_Photopia = 0
Erklärung_ende_photopia = 0
Wald_Musik = 1
Wüste_Musik = 0
Zauberwald_Musik = 0
Neues_Gebiet_Zauberwald = 0
Neues_Gebiet_Wasteland = 0
mySprite2 = sprites.create(img`
    . . . . . . . . f f f f . . . 
    . . . . . . . f f f f f f f . 
    . 1 . . c c c c c c c c f f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f 1 f f f f 1 f c . . 
    . 1 . c f 1 2 f f 2 1 f c . . 
    . 1 . c f 1 2 f f 2 1 f c . . 
    . 1 . c f f f f f f f f c . . 
    c c c c c c c c c c c c . . . 
    c f e c c f f f f f f c . . . 
    . e 4 c f f f f f f f c . . . 
    . e e c c f f f f f f c . . . 
    . c . . . c c c c c c . . . . 
    . . . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 47))
mySprite3 = sprites.create(img`
    . . . . . . . . f f f f . . . 
    . . . . . . . f f f f f f f . 
    . 1 . . c c c c c c c c f f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f 1 f f f f 1 f c . . 
    . 1 . c f 1 2 f f 2 1 f c . . 
    . 1 . c f 1 2 f f 2 1 f c . . 
    . 1 . c f f f f f f f f c . . 
    c c c c c c c c c c c c . . . 
    c f e c c f f f f f f c . . . 
    . e 4 c f f f f f f f c . . . 
    . e e c c f f f f f f c . . . 
    . c . . . c c c c c c . . . . 
    . . . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(3, 46))
mySprite4 = sprites.create(img`
    . . . . . . . . f f f f . . . 
    . . . . . . . f f f f f f f . 
    . 1 . . c c c c c c c c f f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f 1 f f f f 1 f c . . 
    . 1 . c f 1 2 f f 2 1 f c . . 
    . 1 . c f 1 2 f f 2 1 f c . . 
    . 1 . c f f f f f f f f c . . 
    c c c c c c c c c c c c . . . 
    c f e c c f f f f f f c . . . 
    . e 4 c f f f f f f f c . . . 
    . e e c c f f f f f f c . . . 
    . c . . . c c c c c c . . . . 
    . . . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite4, tiles.getTileLocation(5, 46))
mySprite5 = sprites.create(img`
    . . . . . . . . f f f f . . . 
    . . . . . . . f f f f f f f . 
    . 1 . . c c c c c c c c f f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f 1 f f f f 1 f c . . 
    . 1 . c f 1 2 f f 2 1 f c . . 
    . 1 . c f 1 2 f f 2 1 f c . . 
    . 1 . c f f f f f f f f c . . 
    c c c c c c c c c c c c . . . 
    c f e c c f f f f f f c . . . 
    . e 4 c f f f f f f f c . . . 
    . e e c c f f f f f f c . . . 
    . c . . . c c c c c c . . . . 
    . . . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite5, tiles.getTileLocation(42, 47))
mySprite6 = sprites.create(img`
    . . . . . . . . f f f f . . . 
    . . . . . . . f f f f f f f . 
    . 1 . . c c c c c c c c f f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f 1 f f f f 1 f c . . 
    . 1 . c f 1 2 f f 2 1 f c . . 
    . 1 . c f 1 2 f f 2 1 f c . . 
    . 1 . c f f f f f f f f c . . 
    c c c c c c c c c c c c . . . 
    c f e c c f f f f f f c . . . 
    . e 4 c f f f f f f f c . . . 
    . e e c c f f f f f f c . . . 
    . c . . . c c c c c c . . . . 
    . . . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite6, tiles.getTileLocation(41, 48))
mySprite7 = sprites.create(img`
    . . . . . . . . . . f f f f . . 
    . . . . . . . . . f f f f f f f 
    . . . . . . c c c c c c c c f f 
    . . . . f c f f f f f f f f c f 
    . . . f 1 c f f f f f f f f c f 
    . . f . 1 c f f f f f f f f c f 
    . . f . 1 c f 1 f f f f 1 f c . 
    . . f . 1 c f 1 2 f f 2 1 f c . 
    . . f . 1 c f 1 2 f f 2 1 f c e 
    . 1 f . 1 f e f f f f f f f c e 
    1 b b b b b b 2 2 c c c c c e e 
    . 1 e 4 1 e e f f f f f f c e e 
    . . e e 1 c f f f f f f f c e e 
    . . f . 1 c c f f f f f f c e e 
    . . f . 1 . . c c c c c c . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite7, tiles.getTileLocation(40, 44))
mySprite8 = sprites.create(img`
    . . . . . . . . f f f f . . . 
    . . . . . . . f f f f f f f . 
    . 1 . . c c c c c c c c f f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f f f f f f f f c f . 
    . 1 . c f 1 f f f f 1 f c . . 
    . 1 . c f 1 2 f f 2 1 f c . . 
    . 1 . c f 1 2 f f 2 1 f c . . 
    . 1 . c f f f f f f f f c . . 
    c c c c c c c c c c c c . . . 
    c f e c c f f f f f f c . . . 
    . e 4 c f f f f f f f c . . . 
    . e e c c f f f f f f c . . . 
    . c . . . c c c c c c . . . . 
    . . . . . f f . . f f . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite8, tiles.getTileLocation(25, 73))
mySprite9 = sprites.create(img`
    . . 1 . . . . . . . . f f f f . . 
    . 1 1 . e . . . . . f f f f f f f 
    . 1 1 . e . . c c c c c c c c f f 
    . 1 1 1 e 1 c f f f f f f f f c f 
    . 1 1 1 e 1 c f f f f f f f f c f 
    . 1 1 . e . c f f f f f f f f c f 
    . 1 1 . e . c f 1 f f f f 1 f c . 
    . . 1 . e . c f 1 2 f f 2 1 f c . 
    . . . . e . c f 1 2 f f 2 1 f c . 
    . . . . e . c f f f f f f f f c . 
    . . . . e . c c c c c c c c c . . 
    . . . . f e c c f f f f f f c . . 
    . . . . e 4 c f f f f f f f c . . 
    . . . . e e c c f f f f f f c . . 
    . . . . e . . . c c c c c c . . . 
    . . . . . . . . f f . . f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite9, tiles.getTileLocation(27, 73))
mySprite10 = sprites.create(img`
    ..................
    ...1..............
    ..111.....ffff....
    ..111....fffffff..
    ..1e1.ccccccccff..
    ...e.cffffffffcf..
    ...e.cffffffffcf..
    ...e.cffffffffcf..
    ...e.cf1ffff1fc...
    ...e.cf12ffccccc..
    ...e.cf12fcfffffc.
    ...e.cffffcfffffc.
    ...e.ccccccfffffc.
    ...feccfffcfffffc.
    ...e4cffffcfffffc.
    ...eeccfffcfffffc.
    ...e...ccccfffffc.
    ...e...ff..ccccc..
    ..................
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite10, tiles.getTileLocation(26, 72))
mySprite11 = sprites.create(img`
    . . . . . . . . . . f f f f . . 
    . . . . . . . . . f f f f f f f 
    . . . . . . c c c c c c c c f f 
    . . . . f c f f f f f f f f c f 
    . . . f 1 c f f f f f f f f c f 
    . . f . 1 c f f f f f f f f c f 
    . . f . 1 c f 1 f f f f 1 f c . 
    . . f . 1 c f 1 2 f f 2 1 f c . 
    . . f . 1 c f 1 2 f f 2 1 f c e 
    . 1 f . 1 f e f f f f f f f c e 
    1 b b b b b b 2 2 c c c c c e e 
    . 1 e 4 1 e e f f f f f f c e e 
    . . e e 1 c f f f f f f f c e e 
    . . f . 1 c c f f f f f f c e e 
    . . f . 1 . . c c c c c c . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite11, tiles.getTileLocation(28, 70))
mySprite12 = sprites.create(img`
    ..................
    ...1..............
    ..111.....ffff....
    ..111....fffffff..
    ..1e1.ccccccccff..
    ...e.cffffffffcf..
    ...e.cffffffffcf..
    ...e.cffffffffcf..
    ...e.cf1ffff1fc...
    ...e.cf12ff21fc...
    ...e.cf12ff21fc...
    ...e.cffffffffc...
    ...e.cccccccccc...
    ...feccffffffc....
    ...e4cfffffffc....
    ...eeccffffffc....
    ...e...ccccccc....
    ...e...ff...ff....
    ..................
    `, SpriteKind.Enemy)
mySprite12.setPosition(20, 20)
Test2 = sprites.create(img`
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    .....b............
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    `, SpriteKind.Test)
tiles.placeOnTile(Test2, tiles.getTileLocation(26, 69))
Key2 = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . 5 5 5 5 . 
    . . . . . . . . . . 5 . . 5 . 
    . . . . . . . . . . 5 . . 5 . 
    . . . . . . . . . . 5 5 5 5 . 
    . . . . . . . . . . . 5 . . . 
    . . . . . . . . . . . 5 5 . . 
    . . . . . . . . . . . 5 . . . 
    . . . . . . . . . . . 5 5 . . 
    `, SpriteKind.Key)
info.setScore(0)
Zauberer = sprites.create(img`
    . 9 9 9 . 9 . . . . . . . . . . 
    9 9 9 9 9 . . . 8 8 8 . . . . . 
    8 9 8 9 8 . . . 8 9 9 8 . . . . 
    8 9 8 9 8 9 8 8 8 9 9 9 8 8 . . 
    . 8 8 8 8 8 8 8 9 9 9 9 8 6 8 8 
    . 9 8 8 6 6 9 6 9 9 9 9 6 9 6 6 
    . . 8 8 6 9 9 6 6 9 9 6 6 9 9 6 
    . . 8 . 8 9 9 9 6 6 6 6 9 9 9 8 
    . . 8 . . f 9 9 9 9 9 9 9 9 f . 
    . . 8 . . f f 1 f e e f 1 f f . 
    . . 8 . . f f 1 f 4 4 f 1 f f . 
    . . 8 . . . f 4 4 4 4 4 4 f . . 
    . . f e 8 8 8 8 8 8 8 8 8 8 . . 
    . . e 4 8 9 9 9 9 9 9 9 9 8 . . 
    . . e e 8 8 8 9 9 9 9 9 9 8 . . 
    . . 8 . . . 8 9 9 9 9 9 9 8 . . 
    . . 8 . . . . 8 8 8 8 8 8 . . . 
    . . 8 . . . . c c . . c c . . . 
    `, SpriteKind.Npc)
tiles.placeOnTile(Zauberer, tiles.getTileLocation(39, 103))
Mana = statusbars.create(4, 40, StatusBarKind.Quest)
Mana.positionDirection(CollisionDirection.Left)
Mana.setLabel("Quest")
Mana.setColor(7, 15, 7)
Mana.setBarBorder(1, 15)
Mana.max = 0
Quest_Zauberer = 0
forever(function () {
    if (Zauberwald_Musik == 1) {
        music.stopAllSounds()
        music.setVolume(60)
        music.play(music.createSong(hex`0078000408020303001c0001dc00690000045e0100040000000000000000000005640001040003600000000400011904000800011b08000c00011d0c001000011e10001400011d14001800011e18001c0001201c002000011d20002400011b24002800011928002c0001192c003000011d30003400011b34003800011d38003c00011b3c004000011906001c00010a006400f401640000040000000000000000000000000000000002600000000400012204000800012408000c0001250c001000012710001400012514001800012718001c0001291c002000012520002400012424002800012028002c0001202c003000012430003400012234003800012438003c0001223c004000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80060000000010001010400050001020800090001020c000d0001021000110001021400150001021800190001021c001d0001022000210001002400250001002800290001002c002d0001003000310001013400350001013800390001003c003d000100`), music.PlaybackMode.UntilDone)
    }
})
forever(function () {
    if (Wüste_Musik == 1) {
        music.stopAllSounds()
        music.setVolume(60)
        music.play(music.createSong(hex`0082000408070203001c0001dc00690000045e0100040000000000000000000005640001040003cc0000000400012008000c00012510001400012018001c0001221c002000012424002800012028002c00012430003400012038003c0001244000440001224400480001244c005000012050005400012458005c0001275c00600001246400680001276c007000012a7000740001277400780001227c00800001208400880001248c009000012090009400012798009c00012a9c00a0000127a400a8000124ac00b0000120b000b4000124b800bc000120bc00c0000124c400c8000127cc00d0000124d400d8000120dc00e000012406001c00010a006400f401640000040000000000000000000000000000000002cc0000000400010f08000c00011210001400010c18001c00010d1c002000010f24002800010c28002c00010f30003400010c38003c00010f40004400010c44004800010f4c005000010c50005400010f58005c0001125c006000010f6400680001126c007000011670007400011274007800010d7c008000010c84008800010f8c009000010c90009400011298009c0001169c00a0000112a400a800010fac00b000010cb000b400010fb800bc00010cbc00c000010fc400c8000112cc00d000010fd400d800010cdc00e000010f`), music.PlaybackMode.UntilDone)
    }
})
game.onUpdateInterval(500, function () {
    tiles.placeOnTile(Für_Pfeile, mySprite.tilemapLocation())
})
game.onUpdateInterval(800, function () {
    if (mySprite7.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 1 . . . . . . . . . 2 . . 
            . 1 1 e e e e e e e e e 2 . . . 
            . . 1 1 . . . . . . . . . 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite7, 120, 120)
        projectile.follow(Für_Pfeile, 150)
    }
})
game.onUpdateInterval(800, function () {
    if (mySprite11.tileKindAt(TileDirection.Center, assets.tile`myTile15`)) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 1 . . . . . . . . . 2 . . 
            . 1 1 e e e e e e e e e 2 . . . 
            . . 1 1 . . . . . . . . . 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite11, 120, 120)
        projectile2.follow(Für_Pfeile, 150)
    }
})
game.onUpdateInterval(2000, function () {
    In_Höhle = 0
})
game.onUpdateInterval(5000, function () {
    Hindernis_Photopia = 0
})
forever(function () {
    if (Wald_Musik == 1) {
        music.stopAllSounds()
        music.setVolume(60)
        music.play(music.createSong(hex`008c000408100200001c00010a006400f4016400000400000000000000000000000000050000041c0300000400020d2204000800012408000c00010a0c00100001201000140002052418001c000208271c002000012420002400010c24002800012728002c0001242c003000010830003400012034003800010838003c0001243c004000020c2740004400012444004800012748004c000208244c005000020f2750005400012054005800010c58005c0001245c006000010c60006400012064006800020f246c007000020c2070007400012474007800010c78007c0001277c008000011280008400020f2a8400880002122788008c00010f8c00900002122090009400020f2494009800020c2798009c0001089c00a000020c20a000a400020f22a400a800021224a800ac00020f27ac00b000020c24b000b400020820b400b800020c24b800bc00020f27bc00c000021224c000c400021420c400c800021422c800cc00021224cc00d000020f25d000d400020c24d400d800020f25d800dc00020c27dc00e000020829e000e400020c2ae400e800020f27e800ec00020f24ec00f000020c20f000f400020824f400f800020527f800fc0002082afc000001020c2c00010401020f2c0401080102122a08010c010214270c01100102112410011401020d2014011801020a2418011c01010d1c0120010211242001240101142401280102112028012c01020d242c013001010a30013401020c2734013801010f38013c010212243c014001010f400144010211204401480102142448014c0101144c01500102112450015401020d2754015801011158015c010214275c01600102112a60016401010d64016801020a2568016c010206206c01700101057001740102062474017801020a2778017c01010d7c018001020a208001840102062484018801010a88018c01020d248c0190010211279001940102142a9401980102112798019c01020d249c01a001020a20a001a40102061da401a801020620a801ac01020a24ac01b001020d27b001b401020a2ab401b8010127b801bc01020a24bc01c0010120c001c401020c1dc801cc01020d20d001d401020a1dd401d8010120d801dc010108dc01e001010ae001e401010ce801ec01010cf001f4010108f801fc01010f03001c0001dc00690000045e01000400000000000000000000056400010400036a0200000400011608000c00011210001400010a18001c00010f2000240001142c003000010f34003800010f3c004000011148004c00010c4c005000011454005800010f5c006000010f6400680001146c007000011274007800010f7c008000011680008400011284008800011688008c0001128c009000011690009400011294009800010f98009c00010c9c00a000010fa000a4000112a400a8000116a800ac000112ac00b000010fb000b400010cb400b800010fb800bc000112bc00c0000116c000c4000118c400c8000118c800cc000116cc00d0000112d000d400010fd400d8000112d800dc00010fdc00e000010ce000e400010fe400e8000112e800ec000112ec00f000010ff000f400010cf400f8000108f800fc00010cfc000001010f00010401011204010801011608010c0101180c011001011410011401011114011801010d18011c0101111c012001011420012401011824012801011428012c0101112c013001010d30013401010f34013801011238013c0101163c014001011240014401011444014801011848014c0101184c015001011450015401011154015801011458015c0101185c016001011460016401011164016801010d68016c01010a6c017001010670017401010a74017801010d78017c0101117c018001010d80018401010a84018801010d88018c0101118c019001011490019401011894019801011498019c0101119c01a001010da001a401010aa401a801010aa801ac01010dac01b0010111b001b401010db801bc01010dc001c401010dc801cc010111d001d401010dd801dc01010adc01e001010de001e401010fe801ec01010ff001f401010cf801fc010112`), music.PlaybackMode.UntilDone)
    }
})
