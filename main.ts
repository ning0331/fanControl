input.onButtonPressed(Button.A, function () {
    flag = 1
    SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    flag = 0
    basic.showIcon(IconNames.Yes)
    speed = 50
})
input.onButtonPressed(Button.B, function () {
    flag = 1
    if (speed == 50) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 150)
        basic.showNumber(1)
        speed = 100
    } else {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        basic.showNumber(2)
        speed = 100
    }
})
let speed = 0
let flag = 0
SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
SuperBit.MotorStopAll()
basic.showIcon(IconNames.Yes)
flag = 0
speed = 50
let speedFlag = 0
basic.forever(function () {
    if (flag == 0 && pins.digitalReadPin(DigitalPin.P13) == 1) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, speed)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
