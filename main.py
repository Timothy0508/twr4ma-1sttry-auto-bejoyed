def right():
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 128)
# 8上升
# 2下降
# 4向左轉
# 6向右轉
# 1上升C
# 3下降E
# 7向左轉F
# 9向右轉D
# 0停止
# 

def on_received_number(receivedNumber):
    if receivedNumber == 8:
        Raise()
        basic.show_leds("""
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            """)
        basic.pause(50)
        basic.clear_screen()
    if receivedNumber == 2:
        Lower()
        basic.show_leds("""
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            """)
        basic.pause(50)
        basic.clear_screen()
    if receivedNumber == 4:
        left()
        basic.show_leds("""
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            """)
        basic.pause(50)
        basic.clear_screen()
    if receivedNumber == 6:
        right()
        basic.show_leds("""
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            """)
        basic.pause(50)
        basic.clear_screen()
    if receivedNumber == 1:
        Front()
        basic.show_leds("""
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . # . .
            """)
        basic.pause(50)
        basic.clear_screen()
    if receivedNumber == 3:
        Back()
        basic.show_leds("""
            . . # . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            """)
        basic.pause(50)
        basic.clear_screen()
    if receivedNumber == 7:
        basic.show_leds("""
            . . # . .
            . . . # .
            # . . . #
            . . . # .
            . . # . .
            """)
        basic.pause(50)
        basic.clear_screen()
    if receivedNumber == 9:
        basic.show_leds("""
            . . # . .
            . # . . .
            # . . . #
            . # . . .
            . . # . .
            """)
        basic.pause(50)
        basic.clear_screen()
    if receivedNumber == 0:
        stop()
        basic.show_leds("""
            . # # # .
            # # . . #
            # . # . #
            # . . # #
            . # # # .
            """)
        basic.pause(50)
        basic.clear_screen()
radio.on_received_number(on_received_number)

def Lower():
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 128)
def left():
    sensors.dd_mmotor(AnalogPin.P15, 0, AnalogPin.P16, 128)
def Raise():
    sensors.dd_mmotor(AnalogPin.P13, 1, AnalogPin.P14, 128)
def stop():
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 0)
    sensors.dd_mmotor(AnalogPin.P15, 0, AnalogPin.P16, 0)
radio.set_group(1)
def Front():
    sensors.dd_mmotor(AnalogPin.P12, 0, AnalogPin.P2, 0)
def Back():
    sensors.dd_mmotor(AnalogPin.P12, 0, AnalogPin.P2, 0)