let distance2 = 0
I2C_LCD1602.LcdInit(0)
basic.forever(function () {
    I2C_LCD1602.clear()
    distance2 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    basic.pause(100)
    if (distance2 < 5) {
        I2C_LCD1602.ShowString("Someone is at", 0, 0)
        basic.pause(1000)
        I2C_LCD1602.ShowString("the Garage!", 0, 1)
        basic.pause(1000)
    } else {
        I2C_LCD1602.ShowString("Distance is:", 0, 0)
        I2C_LCD1602.ShowNumber(distance2, 12, 0)
    }
})
