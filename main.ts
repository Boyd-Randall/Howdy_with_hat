input.onButtonPressed(Button.A, function () {
    spinarrow()
})
function spinarrow () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
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
	
})
