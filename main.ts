function right () {
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    96
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
    }
    if (receivedNumber == 2) {
        Lower()
    }
    if (receivedNumber == 4) {
        left()
    }
    if (receivedNumber == 6) {
        right()
    }
    if (receivedNumber == 1) {
        Front()
    }
    if (receivedNumber == 3) {
        Back()
    }
    if (receivedNumber == 7) {
        Open()
    }
    if (receivedNumber == 9) {
        Close()
    }
    if (receivedNumber == 0) {
        stop()
    }
})
function Lower () {
    pins.servoWritePin(AnalogPin.P8, 0)
}
function left () {
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    96
    )
}
function Raise () {
    pins.servoWritePin(AnalogPin.P8, 180)
}
function stop () {
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
    pins.servoWritePin(AnalogPin.P8, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
}
function Open () {
    pins.servoWritePin(AnalogPin.P1, 180)
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
let degree = 0
pins.servoWritePin(AnalogPin.P1, degree)
radio.setGroup(103)
