let strip: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGBW)
    strip.showBarGraph(0, 255)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . # . .
        . # # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . # .
        . # # # #
        # . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . #
        # # # # .
        . # . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . #
        . . # # .
        . # # . .
        # . # . .
        . # . # .
        `)
    basic.showLeds(`
        # . # . .
        . # # . .
        . . # # .
        . . # . #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . # # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # . . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . # # # #
        # . . # .
        `)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        `)
})
basic.forever(function () {
    music.play(music.stringPlayable("- C E D G F A D ", 373), music.PlaybackMode.UntilDone)
})
