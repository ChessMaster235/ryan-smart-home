function Smart_lights () {
    if (input.lightLevel() < 8) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
}
function movement_for_garage () {
    pins.digitalWritePin(DigitalPin.P8, pins.digitalReadPin(DigitalPin.P2))
}
function Garage () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index2 = 0; index2 <= 120; index2++) {
            pins.servoWritePin(AnalogPin.P0, 120 - index2)
            basic.pause(10)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index <= 120; index++) {
            pins.servoWritePin(AnalogPin.P0, index)
            basic.pause(10)
        }
    }
}
basic.forever(function () {
    Garage()
    Smart_lights()
    movement_for_garage()
})
