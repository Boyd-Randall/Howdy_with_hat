input.onButtonPressed(Button.A, function () {
    while (true) {
        spinarrow()
    }
})
function spinarrow () {
    basic.pause(50)
    basic.showArrow(ArrowNames.North)
    basic.pause(50)
    basic.showArrow(ArrowNames.East)
    basic.pause(50)
    basic.showArrow(ArrowNames.South)
    basic.pause(50)
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
led.setBrightness(50)
basic.showString(";)")
basic.forever(function () {
	
})
