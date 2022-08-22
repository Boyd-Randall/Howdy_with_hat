input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        `)
})
basic.showString("Howdy")
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        `)
})
