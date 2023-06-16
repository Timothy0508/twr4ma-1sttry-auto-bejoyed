// 8上升
// 2下降
// 4向左轉
// 6向右轉
// 1上升C
// 3下降E
// 7向左轉F
// 9向右轉D
// 0停止
// 
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
        Raise()
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    if (receivedNumber == 2) {
        Lower()
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    if (receivedNumber == 4) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    if (receivedNumber == 6) {
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    if (receivedNumber == 7) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # . . . #
            . . . # .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    if (receivedNumber == 9) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . #
            . # . . .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    if (receivedNumber == 0) {
        stop()
        basic.showLeds(`
            . # # # .
            # # . . #
            # . # . #
            # . . # #
            . # # # .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
})
function Lower () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    128
    )
}
function left () {
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    128
    )
}
function Raise () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    128
    )
}
function stop () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
}
radio.setGroup(1)
