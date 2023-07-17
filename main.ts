function right () {
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    128
    )
}
// 8上升
// 2下降
// 4向左轉
// 6向右轉
// 1上升C
// 3下降E
// 7向左轉F
// 9向右轉D
// 0停止
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
        left()
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
        right()
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
        Front()
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
        Back()
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
        Open()
        basic.showLeds(`
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            . # . # .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    if (receivedNumber == 9) {
        Close()
        basic.showLeds(`
            . # . # .
            # # # # #
            . . # . .
            # # # # #
            . # . # .
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
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoWritePin(AnalogPin.P0, 180)
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
    pins.servoWritePin(AnalogPin.P8, 180)
    pins.servoWritePin(AnalogPin.P8, 180)
}
function stop () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P12,
    0,
    AnalogPin.P2,
    0
    )
}
function Open () {
    pins.servoWritePin(AnalogPin.P1, 120)
}
function Back () {
    sensors.DDMmotor(
    AnalogPin.P12,
    0,
    AnalogPin.P2,
    128
    )
}
function Front () {
    sensors.DDMmotor(
    AnalogPin.P12,
    1,
    AnalogPin.P2,
    128
    )
}
function Close () {
    pins.servoWritePin(AnalogPin.P1, 0)
}
radio.setGroup(1)
