function right() {
    sensors.DDMmotor(AnalogPin.P15, 1, AnalogPin.P16, 128)
}

//  8上升
//  2下降
//  4向左轉
//  6向右轉
//  1上升C
//  3下降E
//  7向左轉F
//  9向右轉D
//  0停止
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 8) {
        Raise()
        basic.showLeds(`
            . . # . .
            # # # # #
            . # . # .
            . # # # .
            . # # # .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    
    if (receivedNumber == 2) {
        Lower()
        basic.showLeds(`
            # # . # #
            # . # . .
            # . # # #
            # . # # #
            # . # # #
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    
    if (receivedNumber == 4) {
        left()
        basic.showLeds(`
            . . # . .
            # # # # #
            . # # # #
            . # . # .
            # . # # #
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    
    if (receivedNumber == 6) {
        right()
        basic.showLeds(`
            . . # . .
            # # # # #
            . # . . .
            . # . # #
            . # . # #
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    
    if (receivedNumber == 1) {
        Front()
        basic.showLeds(`
            . # . # .
            # # # # #
            # # . # #
            # # . # #
            # # . # #
            `)
        basic.pause(50)
        basic.clearScreen()
    }
    
    if (receivedNumber == 3) {
        Back()
        basic.showLeds(`
            # # # # #
            # . . . .
            # . # # #
            # . # . #
            # . # # #
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
function Lower() {
    sensors.DDMmotor(AnalogPin.P13, 0, AnalogPin.P14, 128)
}

function left() {
    sensors.DDMmotor(AnalogPin.P15, 0, AnalogPin.P16, 128)
}

function Raise() {
    sensors.DDMmotor(AnalogPin.P13, 1, AnalogPin.P14, 128)
}

function stop() {
    sensors.DDMmotor(AnalogPin.P13, 0, AnalogPin.P14, 0)
    sensors.DDMmotor(AnalogPin.P15, 0, AnalogPin.P16, 0)
}

function Back() {
    sensors.DDMmotor(AnalogPin.P12, 0, AnalogPin.P2, 0)
}

function Front() {
    sensors.DDMmotor(AnalogPin.P12, 0, AnalogPin.P2, 0)
}

radio.setGroup(1)
